import { createInsertSchema } from "drizzle-zod"
import { contact } from "../db/schema"
import { db } from "../db"

const insertMovieSchema = createInsertSchema(contact, {
    full_name: schema => schema.full_name.max(50),
    email: schema => schema.full_name.max(50),
    message: schema => schema.message
})

export default defineEventHandler(async (event) => {
    const data = await readValidatedBody(event, insertMovieSchema.parse)

    try {
        const contact = (await db.insert(contact).values(data).returning())[0]

        setResponseStatus(event, 201, "Created successfully.")

        return contact
    }
    catch { throw createError({ statusCode: 500, statusMessage: "Something went wrong." }) }
})
