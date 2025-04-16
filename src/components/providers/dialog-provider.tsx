import { GenerateFromVideoDialog } from "@/components/dialogs/generate-from-video-dialog";
import type { PropsWithChildren } from "react";

export const DialogProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <GenerateFromVideoDialog />
    </>
  );
};
