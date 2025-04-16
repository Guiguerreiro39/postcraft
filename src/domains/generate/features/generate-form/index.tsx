"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { AdvancedSettings } from "@/domains/generate/features/generate-form/advanced-settings";
import { api } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { formSchema } from "./schemas";
import type { z } from "zod";

export const GenerateForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      videoUrl: "",
      tone: 3,
      size: 3,
      complexity: 3,
    },
  });

  const createPostFromVideo = api.generate.createPostFromVideo.useMutation({
    onSuccess: (data) => {
      if (data) router.push(`/posts/${data.id}`);
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    createPostFromVideo.mutate(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex items-start gap-2">
          <FormField
            control={form.control}
            name="videoUrl"
            render={({ field }) => (
              <FormItem className="w-[25rem]">
                <FormControl>
                  <Input placeholder="URL of the video" {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Enter the URL of the video you want to generate a post from.
                </FormDescription>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="px-10 py-3 font-semibold transition"
            disabled={createPostFromVideo.isPending}
          >
            {createPostFromVideo.isPending ? "Generating..." : "Generate"}
          </Button>
        </div>
        <Separator className="mb-4" />
        <AdvancedSettings control={form.control} />
      </form>
    </Form>
  );
};
