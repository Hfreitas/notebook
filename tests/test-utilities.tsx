/* eslint-disable react-refresh/only-export-components */
import * as TestingLibrary from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { RenderOptions } from "@testing-library/react";
import type { ReactElement, ReactNode } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const UIProviders = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => TestingLibrary.render(ui, { wrapper: UIProviders, ...options });

type RenderHookParameters = Parameters<typeof TestingLibrary.renderHook>;

const customRenderHook = (
  renderFunction: RenderHookParameters[0],
  options?: Omit<RenderHookParameters[1], "wrapper">,
) =>
  TestingLibrary.renderHook(renderFunction, {
    wrapper: UIProviders,
    ...options,
  });

export function setupRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) {
  return {
    user: userEvent.setup(),
    ...customRender(ui, options),
  };
}

export function setupRenderHook(
  renderFunction: RenderHookParameters[0],
  options?: Omit<RenderHookParameters[1], "wrapper">,
) {
  return {
    ...customRenderHook(renderFunction, options),
  };
}

export const TestUtilities = {
  ...TestingLibrary,
  render: customRender,
  renderHook: customRenderHook,
};
