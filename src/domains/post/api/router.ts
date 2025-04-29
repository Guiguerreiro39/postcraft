import { z } from "zod";

import { createTRPCRouter } from "@/server/api/trpc";
import { posts } from "@/server/db/schema";
import { protectedProcedure } from "@/server/api/trpc";

export const postRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        title: z.string().min(1),
        description: z.string().optional(),
        videoUrl: z.string().optional(),
        content: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db
        .insert(posts)
        .values({
          userId: ctx.userId,
          title: input.title,
          description: input.description ?? "",
          videoUrl: input.videoUrl,
          content: input.content ?? "",
        })
        .returning();
    }),

  getById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const data = await ctx.db.query.posts.findFirst({
        where: (post, { eq, and }) =>
          and(eq(post.id, input.id), eq(post.userId, ctx.userId)),
      });

      return data ?? null;
    }),

  getMany: protectedProcedure
    .input(
      z.object({
        cursor: z
          .object({
            id: z.string().uuid(),
            updatedAt: z.date(),
          })
          .nullish(),
        limit: z.number().min(1).max(100).default(10),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { cursor, limit } = input;

      const data = await ctx.db.query.posts.findMany({
        where: (post, { eq, lt, or, and }) =>
          cursor
            ? and(
                or(
                  lt(post.updatedAt, cursor.updatedAt),
                  and(
                    eq(post.updatedAt, cursor.updatedAt),
                    lt(post.id, cursor.id),
                  ),
                ),
                eq(post.userId, ctx.userId),
              )
            : undefined,
        limit: limit + 1,
        orderBy: (post, { desc }) => [desc(post.updatedAt), desc(post.id)],
      });

      // Verify is there is more items to be fetched
      const hasMore = data.length > limit;

      // Remove the last item if there is more items to be fetched
      const items = hasMore ? data.slice(0, -1) : data;

      // Set the next cursor to the last item of the list
      const lastItem = items[items.length - 1];
      const nextCursor =
        hasMore && lastItem
          ? {
              id: lastItem.id,
              updatedAt: lastItem.updatedAt,
            }
          : null;

      return { items, nextCursor };
    }),
});
