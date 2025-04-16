CREATE TABLE IF NOT EXISTS "video-to-post_user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"clerk_id" text NOT NULL,
	"first_name" varchar(256),
	"last_name" varchar(256),
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone NOT NULL,
	CONSTRAINT "video-to-post_user_clerk_id_unique" UNIQUE("clerk_id")
);
--> statement-breakpoint
ALTER TABLE "video-to-post_post" ADD COLUMN "user_id" uuid NOT NULL;