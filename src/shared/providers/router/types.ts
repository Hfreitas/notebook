import type { QueryClient } from "@tanstack/react-query";
import type { LoadedClerk, UseAuthReturn } from "@clerk/types";

export type AppRouterContext = {
  queryClient: QueryClient;
  isSignedIn?: UseAuthReturn["isSignedIn"];
  auth?: LoadedClerk;
};
