import { ClerkProvider } from "@clerk/clerk-react";
import type { ReactNode } from "react";
import { AUTH_SERVICE_KEY } from "@/shared/config/environment";

export function AuthProvider({ children }: { children: ReactNode }) {
  if (!AUTH_SERVICE_KEY) {
    throw new Error("Missing Auth service key");
  }

  return (
    <ClerkProvider publishableKey={AUTH_SERVICE_KEY}>{children}</ClerkProvider>
  );
}
