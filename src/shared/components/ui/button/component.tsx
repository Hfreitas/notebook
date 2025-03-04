import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { buttonVariants } from "./variants";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/helpers/class-names";

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...properties
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...properties}
    />
  );
}

export { Button };
