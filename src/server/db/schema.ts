// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  integer,
  numeric,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `ecommerce-app_${name}`);

export const product = createTable(
  "post",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    avatar: varchar("avatar", {length: 999}).notNull(),
    price: numeric("price").notNull(),
    salePrice: numeric("sale_price"),
    sale: numeric("sale_percent"),
    reviewCount: integer("review_count"),
    rating: numeric("rating"),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);
