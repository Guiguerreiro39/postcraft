"use client";

import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { api } from "@/trpc/react";
import { POSTS_PER_PAGE } from "@/constants";

export const PostsOverviewTable = () => {
  const [data] = api.post.getMany.useSuspenseQuery({
    limit: POSTS_PER_PAGE,
  });

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data.items} />
    </div>
  );
};
