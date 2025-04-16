"use client";

import { InfiniteScroll } from "@/components/infinite-scroll";

import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { POSTS_PER_PAGE } from "@/constants";
import {
  PostItem,
  PostItemSkeleton,
} from "@/domains/post/components/post-item";
import { api } from "@/trpc/react";

export const PostsSidebar = () => {
  const [data] = api.post.getMany.useSuspenseQuery({
    limit: POSTS_PER_PAGE,
  });

  return (
    <SidebarMenu>
      {data.items.map((post) => (
        <SidebarMenuItem key={post.id}>
          <PostItem post={post} />
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
};

export const PostsSidebarSkeleton = () => (
  <SidebarMenu>
    {Array.from({ length: 8 }).map((_, index) => (
      <SidebarMenuItem key={index}>
        <PostItemSkeleton />
      </SidebarMenuItem>
    ))}
  </SidebarMenu>
);
