import { api, HydrateClient } from "@/trpc/server";

import { PostEditForm } from "@/domains/post/components/post-edit-form";

type Props = {
  params: Promise<{ postId: string }>;
};

export default async function Home({ params }: Props) {
  const { postId } = await params;
  await api.post.getById.prefetch({ id: postId });

  return (
    <HydrateClient>
      <PostEditForm postId={postId} />
    </HydrateClient>
  );
}
