"use client";

import { useCallback, useEffect } from "react";

import "@blocknote/shadcn/style.css";
import "@/styles/editor.css";

import { BlockNoteView } from "@blocknote/shadcn";
import { useCreateBlockNote } from "@blocknote/react";
import { useTheme } from "next-themes";
import { Card, CardContent } from "@/components/ui/card";
import { UnexpectedError } from "@/lib/result";

type Props = {
  content: string;
};

const BlockNoteEditor = ({ content }: Props) => {
  const { resolvedTheme } = useTheme();
  const editor = useCreateBlockNote({});

  const insertMarkdown = useCallback(async () => {
    if (content.length === 0) return undefined;

    const blocks = await editor.tryParseMarkdownToBlocks(content);
    editor.replaceBlocks(editor.document, blocks);
  }, [content, editor]);

  useEffect(() => {
    if (!editor) return;

    insertMarkdown().catch((error) => {
      console.error(error);
      throw new UnexpectedError("Failed to insert markdown", error);
    });
  }, [editor, insertMarkdown]);

  return (
    <Card>
      <CardContent className="px-2 py-4">
        <BlockNoteView
          data-theming-css-demo
          editor={editor}
          theme={resolvedTheme === "dark" ? "dark" : "light"}
        />
      </CardContent>
    </Card>
  );
};

export default BlockNoteEditor;
