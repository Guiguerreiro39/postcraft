"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "@/trpc/react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { TransparentInput } from "@/components/transparent-input";
import { Editor } from "@/domains/post/components/editor";

type Props = {
  postId: string;
};

const formSchema = z.object({
  title: z.string().min(1).max(256),
  description: z.string().optional(),
  content: z.string().optional(),
});

export const PostEditForm = ({ postId }: Props) => {
  const [data] = api.post.getById.useSuspenseQuery({ id: postId });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: data?.title ?? "",
      description: data?.description ?? "",
      content: data?.content ?? "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <TransparentInput placeholder="Title of your post" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <textarea
                  rows={2}
                  className="w-full resize-none whitespace-pre-wrap border-none bg-transparent p-0 text-sm font-medium text-muted-foreground outline-none focus:ring-0"
                  placeholder="Description of your post"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Editor content={field.value ?? ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
