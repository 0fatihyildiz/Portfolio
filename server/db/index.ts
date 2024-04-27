import { neon, neonConfig, NeonQueryFunction } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import * as schema from "./schema"

neonConfig.fetchConnectionCache = true

const client: NeonQueryFunction<boolean, boolean> = neon(process.env.CONNECTION_URL!)

export const db = drizzle(client, { schema })
