import { type InferSelectModel, relations, sql } from "drizzle-orm";
import {
  pgEnum,
  pgTableCreator,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */

export const createTable = pgTableCreator((name) => `video-to-post_${name}`);

// POST TABLE

export const postStateEnum = pgEnum("post_state", ["draft", "published"]);

export type Post = InferSelectModel<typeof posts>;

export const posts = createTable("post", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 256 }).notNull(),
  description: text("description").notNull(),

  videoUrl: text("video_url"),
  content: text("content")
    .notNull()
    .$type<string>()
    .$default(() => sql`''`),
  state: postStateEnum("state").notNull().default("draft"),

  userId: uuid("user_id").notNull(),

  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .$onUpdate(() => new Date())
    .notNull(),
});

export const postsRelations = relations(posts, ({ one }) => ({
  user: one(user, {
    fields: [posts.userId],
    references: [user.id],
  }),
}));

// USER TABLE

export const user = createTable("user", {
  id: uuid("id").primaryKey().defaultRandom(),
  clerkId: text("clerk_id").notNull().unique(),

  firstName: varchar("first_name", { length: 256 }),
  lastName: varchar("last_name", { length: 256 }),

  imageUrl: text("image_url").notNull(),

  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .$onUpdate(() => new Date())
    .notNull(),
});

export const usersRelations = relations(user, ({ many }) => ({
  posts: many(posts),
}));
