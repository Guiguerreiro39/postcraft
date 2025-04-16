import { Separator } from "@/components/ui/separator";
import { TypographyH5 } from "@/components/ui/typography-h5";
import type { ComponentProps } from "react";

type Props = {
  title: string;
  icon?: React.ReactNode;
} & ComponentProps<"div">;

export const SectionHeader = ({ title, icon, ...props }: Props) => (
  <div {...props}>
    <div className="flex items-center gap-2">
      {icon}
      <TypographyH5>{title}</TypographyH5>
    </div>
    <Separator className="mt-2" />
  </div>
);
