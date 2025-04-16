"use client";

import { useGenerateFromVideoDialog } from "@/components/dialogs/generate-from-video-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCreateEmptyPost } from "@/domains/post/api/useCases/use-create-empty-post";
import { FilePlus, Video } from "lucide-react";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export const DropdownCreatePost = ({ children }: Props) => {
  const { mutate: createEmptyPost } = useCreateEmptyPost();
  const { toggle: toggleGenerateFromVideoDialog } =
    useGenerateFromVideoDialog();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={createEmptyPost}>
            <FilePlus className="size-5" />
            <span>Create blank post</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={toggleGenerateFromVideoDialog}>
            <Video className="size-5" />
            <span>Generate from video</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
