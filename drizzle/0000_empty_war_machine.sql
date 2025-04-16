CREATE TABLE IF NOT EXISTS "video-to-post_post" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(256) NOT NULL,
	"description" text,
	"video_url" text NOT NULL,
	"content" text NOT NULL,
	"state" "post_state" DEFAULT 'draft' NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone,
	CONSTRAINT "video-to-post_post_title_unique" UNIQUE("title")
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "title_idx" ON "video-to-post_post" USING btree ("title");