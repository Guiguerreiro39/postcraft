import { TypographyH3 } from "@/components/ui/typography-h3";
import { TypographyP } from "@/components/ui/typography-p";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  description?: string;
} & ComponentPropsWithoutRef<"div">;

export const Header = ({ title, description, className, ...props }: Props) => (
  <div className={cn("space-y-1", className)} {...props}>
    <TypographyH3>{title}</TypographyH3>
    {description && <TypographyP>{description}</TypographyP>}
  </div>
);
