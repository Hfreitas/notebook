import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./client.ts";
import type { ReactNode } from "@tanstack/react-router";

export function QueryProvider({ children }: ReactNode) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
