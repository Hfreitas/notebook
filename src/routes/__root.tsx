import {
  HeadContent,
  Outlet,
  createRootRouteWithContext,
} from "@tanstack/react-router";

import type { AppRouterContext } from "@/shared/providers/router/types";

import { seo } from "@/shared/lib/helpers/seo";
import { DevtoolsProvider } from "@/shared/providers/devtools/provider";
import globalCss from "@/shared/styles/global.css?url";
import { MainLayout } from "@/widgets/layouts/main/layout";

function Root() {
  return (
    <MainLayout>
      <HeadContent />
      <Outlet />
      <DevtoolsProvider />
    </MainLayout>
  );
}

export const Route = createRootRouteWithContext<AppRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { name: "theme-color", content: "#ffffff" },
      ...seo({
        title: "Student Notebook",
        description: "Note taking for students",
      }),
    ],
    links: [
      { rel: "stylesheet", href: globalCss },
      {
        rel: "apple-touch-icon",
        sizes: "192x192",
        href: "/logo192.png",
      },
      {
        href: "/logo192.png",
        type: "image/png",
        sizes: "192x192",
        rel: "icon",
      },
      {
        href: "/logo512.png",
        type: "image/png",
        sizes: "512x512",
        rel: "icon",
      },
      { rel: "manifest", href: "/manifest.json", color: "#ffffff" },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  component: Root,
});
