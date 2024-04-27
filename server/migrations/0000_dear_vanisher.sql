CREATE TABLE IF NOT EXISTS "contact" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"full_name" varchar(50) NOT NULL,
	"email" text NOT NULL,
	"message" text NOT NULL
);
