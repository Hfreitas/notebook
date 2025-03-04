import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import the generated route tree

import { reportWebVitals } from "@/shared/lib/helpers/report-web-vitals";
import "@/shared/styles/global.css";

import { AuthProvider } from "@/shared/providers/auth/provider";
import { QueryProvider } from "@/shared/providers/query-client/provider";
import { RouterProvider } from "@/shared/providers/router/provider";

// Render the app
// eslint-disable-next-line unicorn/prefer-query-selector
const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <AuthProvider>
        <QueryProvider>
          <RouterProvider />
        </QueryProvider>
      </AuthProvider>
    </StrictMode>,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
