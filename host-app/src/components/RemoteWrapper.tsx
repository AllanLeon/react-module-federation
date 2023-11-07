import { FunctionComponent, PropsWithChildren } from "react";
import ErrorBoundary from "./ErrorBoundary";

const RemoteWrapper: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <div
    style={{
      border: "1px solid red",
      background: "white",
      color: "black",
    }}
  >
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);

export default RemoteWrapper;
