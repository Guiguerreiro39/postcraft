"use client";

import { LogoLoading } from "@/components/assets/logo";
import { Card, CardContent } from "@/components/ui/card";
import dynamic from "next/dynamic";

export const Editor = dynamic(() => import("./blocknote-editor"), {
  ssr: false,
  loading: () => <EditorLoading />,
});

export const EditorLoading = () => (
  <Card className="h-[79.5vh]">
    <CardContent className="flex h-full items-center justify-center px-2 py-4">
      <LogoLoading className="h-10 w-10" />
    </CardContent>
  </Card>
);
