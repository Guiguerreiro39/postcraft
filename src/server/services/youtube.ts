import { failure, success, type Result } from "@/lib/result";
import { type TranscriptResponse, YoutubeTranscript } from "youtube-transcript";

type Services = {
  getVideoId: ({ videoUrl }: { videoUrl: string }) => Result<string, unknown>;
  getCaption: ({
    videoId,
    lang,
  }: {
    videoId: string;
    lang?: string;
  }) => Promise<Result<TranscriptResponse[], unknown>>;
};

export const services: Services = {
  getVideoId: ({ videoUrl }) => {
    try {
      const validateVideoId = (id?: string | null): Result<string, unknown> => {
        if (!!id && /^[A-Za-z0-9_-]{11}$/.test(id)) {
          return success(id);
        }
        return failure("Invalid video ID");
      };

      const parsedUrl = new URL(videoUrl);
      const host = parsedUrl.hostname;
      const path = parsedUrl.pathname;
      const searchParams = parsedUrl.searchParams;

      // Check standard URL with v= parameter
      if (searchParams.has("v")) {
        const videoId = searchParams.get("v")?.split("&")[0];
        return validateVideoId(videoId);
      }

      // Check shortened youtu.be URLs
      if (host.includes("youtu.be")) {
        const videoId = path.split("/")[1];
        return validateVideoId(videoId);
      }

      // Check embed URLs
      if (path.startsWith("/embed/")) {
        const videoId = path.split("/")[2];
        return validateVideoId(videoId);
      }

      // Check video URLs without v= parameter (less common)
      if (host.includes("youtube.com") && path.startsWith("/watch")) {
        const videoId = path.split("/")[2];
        return validateVideoId(videoId);
      }

      // Check live URLs
      if (path.startsWith("/live/")) {
        const videoId = path.split("/")[2];
        return validateVideoId(videoId);
      }

      return failure("Invalid video URL");
    } catch (error) {
      return failure("Failed to get video ID", error);
    }
  },
  getCaption: async ({ videoId, lang }) => {
    try {
      const response = await YoutubeTranscript.fetchTranscript(videoId, {
        lang,
      });

      if (response.length === 0) {
        return failure("No captions found");
      }

      return success(response);
    } catch (error) {
      return failure("Failed to get caption", error);
    }
  },
};
