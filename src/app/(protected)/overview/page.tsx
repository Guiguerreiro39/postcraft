import { api, HydrateClient } from "@/trpc/server";
import { POSTS_PER_PAGE } from "@/constants";
import PostOverviewList from "@/domains/post/components/post-overview-list";

export default async function OverviewPage() {
  void api.post.getMany.prefetch({
    limit: POSTS_PER_PAGE,
  });

  return (
    <HydrateClient>
      <PostOverviewList />
    </HydrateClient>
  );
}
