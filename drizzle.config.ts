import type { Config } from "drizzle-kit"

export default {
  schema: "server/db/schema.ts",
  out: "server/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.CONNECTION_URL!
  },
  verbose: true,
  strict: true,
} satisfies Config
