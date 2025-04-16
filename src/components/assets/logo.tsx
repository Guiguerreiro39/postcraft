import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Logo = ({ ...props }: ComponentPropsWithoutRef<"img">) => {
  return <img src="/logo.svg" alt="Logo" {...props} />;
};

export const LogoLoading = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"img">) => {
  return (
    <img
      src="/logo.svg"
      alt="Logo"
      className={cn("animate-bounce", className)}
      {...props}
    />
  );
};
