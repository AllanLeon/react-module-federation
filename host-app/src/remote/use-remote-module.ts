import { lazy, useEffect, useState } from "react";

// Based on: https://github.com/module-federation/module-federation-examples/blob/master/advanced-api/dynamic-remotes/app1/src/App.js

declare const __webpack_share_scopes__: any;
declare function __webpack_init_sharing__(str: string): any;

export interface RemoteModuleData {
  url: string;
  scope: string;
  module: string;
}

function loadComponent({ scope, module }: Omit<RemoteModuleData, "url">) {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__("default");
    const container: any = window[scope as any]; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default);
    const factory = await (window[scope as any] as any).get(module);
    const Module = factory();
    return Module;
  };
}

const urlCache = new Set();
function useDynamicScript(url: string) {
  const [ready, setReady] = useState(false);
  const [errorLoading, setErrorLoading] = useState(false);

  useEffect(() => {
    if (!url) return;

    if (urlCache.has(url)) {
      setReady(true);
      setErrorLoading(false);
      return;
    }

    setReady(false);
    setErrorLoading(false);

    const element = document.createElement("script");

    element.src = url;
    element.type = "text/javascript";
    element.async = true;

    element.onload = () => {
      urlCache.add(url);
      setReady(true);
    };

    element.onerror = () => {
      setReady(false);
      setErrorLoading(true);
    };

    document.head.appendChild(element);

    return () => {
      urlCache.delete(url);
      document.head.removeChild(element);
    };
  }, [url]);

  return {
    errorLoading,
    ready,
  };
}

const componentCache = new Map();
export function useRemoteModule<T = any>({ url, scope, module }: RemoteModuleData) {
  const key = `${url}-${scope}-${module}`;
  const [Component, setComponent] = useState<T | null>(null);

  const { ready, errorLoading } = useDynamicScript(url);
  useEffect(() => {
    if (Component) setComponent(null);
    // Only recalculate when key changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    if (ready && !Component) {
      const Comp = lazy(loadComponent({ scope, module }));
      componentCache.set(key, Comp);
      setComponent(Comp as any);
    }
    // key includes all dependencies (scope/module)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Component, ready, key]);

  return { errorLoading, Component };
}
