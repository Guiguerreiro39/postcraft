import { api } from "@/trpc/react";
import { toast } from "sonner";

export const useCreateEmptyPost = () => {
  const utils = api.useUtils();

  const createPostMutation = api.post.create.useMutation({
    onSuccess: async () => {
      await utils.post.getMany.invalidate();
    },
    onError: () => {
      toast.error("Failed to create blank post");
    },
  });

  const handleCreateBlankPost = () => {
    createPostMutation.mutate({
      title: "New Post",
    });
  };

  return {
    ...createPostMutation,
    mutate: handleCreateBlankPost,
  };
};
