import { pgTable, text, uuid, varchar } from "drizzle-orm/pg-core"

export const contact = pgTable("contact", {
  id: uuid("id").defaultRandom().primaryKey(),
  full_name: varchar("full_name", { length: 50 }).notNull(),
  email: text("email").notNull(),
  message: text("message").notNull()
})
