"use client";

import { SidebarMenuButton } from "@/components/ui/sidebar";
import type { Post } from "@/server/db/schema";
import { useRouter } from "next/navigation";
import { File, PencilLine } from "lucide-react";
import { notReachable } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  post: Post;
};

export const PostItem = ({ post }: Props) => {
  const router = useRouter();

  const icon = (() => {
    switch (post.state) {
      case "draft":
        return <PencilLine className="text-yellow-500" />;
      case "published":
        return <File className="text-green-500" />;
      default:
        return notReachable(post.state);
    }
  })();

  return (
    <SidebarMenuButton
      className="flex h-fit items-start gap-2"
      onClick={() => router.push(`/posts/${post.id}`)}
    >
      {icon}
      <p className="line-clamp-2 font-semibold">{post.title}</p>
    </SidebarMenuButton>
  );
};

export const PostItemSkeleton = () => (
  <div className="flex items-start gap-2 p-2">
    <Skeleton className="h-5 w-5 rounded-lg" />
    <div className="w-full space-y-1">
      <Skeleton className="h-4 w-full rounded-full" />
      <Skeleton className="h-4 w-full rounded-full" />
    </div>
  </div>
);
