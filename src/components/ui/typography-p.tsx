import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type Props = ComponentProps<"p">;

export function TypographyP({ children, className, ...props }: Props) {
  return (
    <p
      className={cn(
        "scroll-m-20 text-sm tracking-tight text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
