import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type Props = ComponentProps<"h5">;

export function TypographyH5({ children, className, ...props }: Props) {
  return (
    <h5
      className={cn(
        "scroll-m-20 text-lg font-medium tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </h5>
  );
}
