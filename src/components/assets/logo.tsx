import { TypographyH4 } from "@/components/ui/typography-h4";
import { cn } from "@/lib/utils";
import Image from "next/image";
import type { ImageProps } from "next/image";

export const Logo = ({
  ...props
}: Pick<ImageProps, "height" | "width" | "className">) => {
  return <Image {...props} src="/logo.svg" alt="Logo" />;
};

export const LogoLoading = ({
  className,
  ...props
}: Pick<ImageProps, "height" | "width" | "className">) => {
  return (
    <Image
      {...props}
      src="/logo.svg"
      alt="Logo"
      className={cn("animate-bounce", className)}
    />
  );
};

export const VerticalLogo = () => (
  <div className="flex gap-2">
    <Logo width={28} height={28} />
    <TypographyH4>Postcraft</TypographyH4>
  </div>
);
