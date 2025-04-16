DO $$ BEGIN
 CREATE TYPE "public"."post_state" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
