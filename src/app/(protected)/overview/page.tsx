import { api, HydrateClient } from "@/trpc/server";
import { POSTS_PER_PAGE } from "@/constants";
import { PostsOverviewTable } from "@/domains/post/components/posts-overview-table";

export default async function OverviewPage() {
  void api.post.getMany.prefetch({
    limit: POSTS_PER_PAGE,
  });

  return (
    <HydrateClient>
      <PostsOverviewTable />
    </HydrateClient>
  );
}
