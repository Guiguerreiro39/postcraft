import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<object>;

export function TypographyH1({ children }: Props) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
}
