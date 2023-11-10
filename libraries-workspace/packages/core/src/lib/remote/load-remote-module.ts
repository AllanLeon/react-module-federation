import { RemoteModuleData } from "./remote-module-data.model";

declare const __webpack_share_scopes__: any;
declare function __webpack_init_sharing__(str: string): any;

export async function loadRemoteModule({
  url,
  scope,
  module,
}: RemoteModuleData) {
  try {
    const container = await loadScope({ url, scope });
    await __webpack_init_sharing__("default");
    await container.init(__webpack_share_scopes__.default);
    const factory = await container.get(module);
    return factory();
  } catch (error) {
    console.error("Error loading module:", error);
    throw error;
  }
}

function loadScope({ url, scope }: Omit<RemoteModuleData, "module">): Promise<any> {
  const element = document.createElement("script");
  const promise = new Promise((resolve, reject) => {
    element.src = url;
    element.type = "text/javascript";
    element.async = true;
    element.onload = () => resolve(window[scope as any]);
    element.onerror = reject;
  });
  document.head.appendChild(element);
  promise.finally(() => document.head.removeChild(element));
  return promise;
}
