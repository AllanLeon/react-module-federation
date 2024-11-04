import {
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
  Suspense,
} from 'react';

import { ErrorBoundary } from './ErrorBoundary';
import { useRemoteModule } from './use-remote-module';
import { RemoteModuleData } from './remote-module-data.model';

type RemoteWrapperProps<P extends object = object> = PropsWithChildren<{
  data: RemoteModuleData;
  loadingFallback?: ReactNode;
  errorFallback?: ReactNode;
  componentProps?: P;
}>;

const RawRemoteLoader: FunctionComponent<
  Pick<RemoteWrapperProps, 'data' | 'componentProps' | 'errorFallback'>
> = ({ data, componentProps, errorFallback }) => {
  const { Component: FederatedComponent, errorLoading } = useRemoteModule(data);
  if (errorLoading) {
    return errorFallback;
  }

  return !!FederatedComponent && <FederatedComponent {...componentProps} />;
};

export const RemoteLoader: FunctionComponent<RemoteWrapperProps> = ({
  data,
  componentProps,
  loadingFallback = 'Loading...',
  errorFallback = 'Something went wrong',
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
