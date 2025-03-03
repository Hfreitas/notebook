import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";

// Import the generated route tree
import { routeTree } from "@/routeTree.gen";

import { queryClient } from "@/shared/providers/query-client/client";
import "@/shared/styles/global.css";
import { DefaultCatchBoundary } from "@/shared/components/default-catch-boundary.tsx";
import { NotFound } from "@/shared/components/not-found.tsx";

export function createRouter() {
  return routerWithQueryClient(
    createTanStackRouter({
      routeTree,
      defaultPreload: "intent",
      scrollRestoration: true,
      defaultStructuralSharing: true,
      defaultPreloadStaleTime: 0,
      defaultErrorComponent: DefaultCatchBoundary,
      defaultNotFoundComponent: () => <NotFound />,
      context: {
        queryClient,
      },
    }),
    queryClient,
  );
}

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
