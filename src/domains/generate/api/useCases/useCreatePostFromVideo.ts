"use client";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Props = {
  onClose?: () => void;
};

export const useCreatePostFromVideo = ({ onClose }: Props) => {
  const router = useRouter();
  const utils = api.useUtils();

  const mutation = api.generate.createPostFromVideo.useMutation({
    onSuccess: async (data) => {
      await utils.post.getMany.invalidate();
      onClose?.();

      if (data) router.push(`/posts/${data.id}`);
    },
    onError: () => {
      toast.error("Failed to generate post from video");
    },
  });

  return { ...mutation };
};
