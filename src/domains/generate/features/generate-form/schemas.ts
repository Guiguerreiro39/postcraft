import { z } from "zod";

export const formSchema = z.object({
  videoUrl: z.string().url(),
  tone: z.number().min(1).max(5),
  size: z.number().min(1).max(5),
  complexity: z.number().min(1).max(5),
});
