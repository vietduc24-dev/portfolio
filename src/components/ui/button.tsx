import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]",
  {
    variants: {
      variant: {
        default:
          "bg-[color:var(--foreground)] px-5 py-3 text-[color:var(--background)] hover:translate-y-[-1px]",
        secondary:
          "border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-3 text-[color:var(--foreground)] hover:border-[color:var(--foreground)]",
        ghost:
          "px-3 py-2 text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)]",
      },
      size: {
        default: "h-11",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
}

export { Button, buttonVariants };
