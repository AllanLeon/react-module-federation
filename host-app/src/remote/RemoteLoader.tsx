import {
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
  Suspense,
} from "react";

import ErrorBoundary from "../components/ErrorBoundary";
import { RemoteModuleData, useRemoteModule } from "./use-remote-module";

type RemoteWrapperProps<P extends object = {}> = PropsWithChildren<{
  data: RemoteModuleData;
  loadingFallback?: ReactNode;
  errorFallback?: ReactNode;
  componentProps?: P;
}>;

const RawRemoteLoader: FunctionComponent<
  Pick<RemoteWrapperProps, "data" | "componentProps" | "errorFallback">
> = ({ data, componentProps, errorFallback }) => {
  const { Component: FederatedComponent, errorLoading } = useRemoteModule(data);
  if (errorLoading) {
    return errorFallback;
  }

  return FederatedComponent && <FederatedComponent {...componentProps} />;
};

const RemoteLoader: FunctionComponent<RemoteWrapperProps> = ({
  data,
  componentProps,
  loadingFallback = "Loading...",
  errorFallback = "Something went wrong",
}) => {
  return (
    <Suspense fallback={loadingFallback}>
      <ErrorBoundary fallback={errorFallback}>
        <RawRemoteLoader
          data={data}
          componentProps={componentProps}
          errorFallback={errorFallback}
        />
      </ErrorBoundary>
    </Suspense>
  );
};

export default RemoteLoader;
