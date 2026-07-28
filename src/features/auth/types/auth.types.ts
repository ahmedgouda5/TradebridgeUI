import { z } from "zod";

export type AuthRole = "buyer" | "seller";
export const registerSchema = z.object({
  role: z.enum(["buyer", "seller"]),
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Full name is too long"),
  companyName: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name is too long"),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .min(7, "Phone number is too short")
    .max(20, "Phone number is too long")
    .regex(/^[+\d\s\-().]+$/, "Enter a valid phone number"),
  industry: z.string().min(1, "Please select an industry"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  agreedToTerms: z.literal(true, {
    message: "You must accept the terms to continue",
  }),
});

export type RegisterFormData = z.infer<typeof registerSchema>;

export interface RegisterProps {
  initialRole?: AuthRole;
  onSubmit?: (data: RegisterFormData) => void;
  onSignInClick?: () => void;
}
