import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { posts } from "@/server/db/schema";

import {
  userPrompt,
  systemPrompt,
} from "@/domains/generate/api/prompts/post-from-video";
import { generateObject } from "ai";
import { models } from "@/server/ai/models";

export const generateRouter = createTRPCRouter({
  createPostFromVideo: protectedProcedure
    .input(
      z.object({
        videoUrl: z.string().min(1),
        tone: z.number().min(1).max(5),
        size: z.number().min(1).max(5),
        complexity: z.number().min(1).max(5),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const videoId = ctx.services.youtube
        .getVideoId({
          videoUrl: input.videoUrl,
        })
        .getSuccessResultOrThrow("Invalid video URL");

      const caption = await ctx.services.youtube.getCaption({
        videoId,
      });

      const captionText = caption
        .getSuccessResultOrThrow("Failed to get caption")
        .map((caption) => caption.text)
        .join(" ");

      try {
        const response = await generateObject({
          model: models.google,
          schema: z.object({
            title: z.string().describe("The title of the post"),
            description: z.string().describe("A short description of the post"),
            content: z.string().describe("The content of the post in markdown"),
          }),
          system: systemPrompt({
            tone: input.tone,
            size: input.size,
            complexity: input.complexity,
          }),
          prompt: userPrompt(captionText),
        });

        const post = await ctx.db
          .insert(posts)
          .values({
            userId: ctx.userId,
            title: response.object.title,
            description: response.object.description,
            videoUrl: input.videoUrl,
            content: response.object.content,
          })
          .returning();

        return post[0];
      } catch (error) {
        console.error(error);
        throw new Error("Failed to generate post from video");
      }
    }),
});
