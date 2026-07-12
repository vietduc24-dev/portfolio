import * as React from "react";

import { cn } from "@/lib/utils";

function Badge({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
