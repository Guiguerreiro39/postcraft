import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type Props = ComponentProps<"h2">;

export function TypographyH2({ children, className, ...props }: Props) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-3xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
