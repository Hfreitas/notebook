import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";

import type { AppRouterContext } from "@/shared/providers/router/types";

import { DevtoolsProvider } from "@/shared/providers/devtools/provider";
import { seo } from "@/shared/helpers/seo";
import globalCss from "@/shared/styles/global.css?url";

function Root() {
  return (
    <>
      <Outlet />
      <DevtoolsProvider />
    </>
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
      ...seo({
        title: "React Tanstack Router Template",
        description: "React SPA Starter",
      }),
    ],
    links: [
      { rel: "stylesheet", href: globalCss },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
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
      { rel: "manifest", href: "/manifest.json", color: "#fffff" },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  component: Root,
});
