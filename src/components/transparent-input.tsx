"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export const TransparentInput = ({
  className,
  ...props
}: React.ComponentProps<"input">) => {
  return (
    <Input
      {...props}
      className={cn(
        "w-full whitespace-pre-wrap rounded-none border-0 bg-transparent p-0 text-2xl font-medium shadow-none transition-[padding-left] duration-300 focus-visible:border-b focus-visible:border-foreground focus-visible:pl-3 focus-visible:ring-0 md:text-2xl",
        className,
      )}
    />
  );
};
