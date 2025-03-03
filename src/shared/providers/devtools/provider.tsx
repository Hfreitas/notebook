/* eslint-disable unicorn/no-null */
import { Suspense, lazy } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const TanStackRouterDevtools
  = process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then(result => ({
          default: result.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      );

export function DevtoolsProvider() {
  return (
    <>
      <Suspense>
        <TanStackRouterDevtools position="bottom-right" />
      </Suspense>
      <ReactQueryDevtools buttonPosition="bottom-left" />
    </>
  );
}
