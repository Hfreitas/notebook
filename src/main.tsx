import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import the generated route tree

import "@/shared/styles/global.css";
import { reportWebVitals } from "@/shared/helpers/report-web-vitals.ts";

import { createRouter } from "@/shared/providers/router/index.tsx";
import { QueryProvider } from "@/shared/providers/query-client/provider";

// Render the app
// eslint-disable-next-line unicorn/prefer-query-selector
const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
  const router = createRouter();

  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </StrictMode>,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
