import type { ReactNode } from "react";
import { MainHeader } from "@/widgets/layouts/main/ui/header";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <MainHeader />
      {children}
    </div>
  );
}
