import { z } from "zod";

// Example: contact form schema
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),

  // phone number validation
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be at most 15 digits")
    .regex(/^[0-9]+$/, "Phone number must contain only digits"),

  message: z.string().min(5, "Message must be at least 5 characters"),
});

// ✅ Inferred Type (optional but useful)
export type ContactInput = z.infer<typeof contactSchema>;
