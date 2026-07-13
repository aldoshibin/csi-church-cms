import { z } from "zod";


export const loginSchema = z.object({
  email: z.string().min(1, "Email is required.").email("Enter a valid email address."),
  password: z.string().min(1, "Password is required."),
  rememberMe: z.boolean().optional(),
});

export const registerSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required."),
    email: z.string().min(1, "Email is required.").email("Enter a valid email address."),
    // PhoneInput emits a complete E.164 string (e.g. "+919876543210");
    // validate the shape it actually produces rather than raw local digits.
    phoneNumber: z
      .string()
      .min(1, "Phone number is required.")
      .regex(/^\+[0-9]{7,15}$/, "Enter a valid phone number."),
    password: z
      .string()
      .min(8, "Minimum 8 characters with letters and numbers.")
      .regex(/[A-Za-z]/, "Minimum 8 characters with letters and numbers.")
      .regex(/[0-9]/, "Minimum 8 characters with letters and numbers."),
    passwordConfirm: z.string().min(1, "Please confirm your password."),
    dateOfBirth: z.string().optional(),
    signupType: z.enum(["MEMBER", "VOLUNTEER", "STAFF", "PRIEST_PASTOR"], {
      errorMap: () => ({ message: "Please select how you're signing up." }),
    }),
    parishBranchId: z.string().min(1, "Please select your parish or branch."),
    agreeToTerms: z.literal(true, {
      errorMap: () => ({ message: "You must agree to the Terms of Service and Privacy Policy." }),
    }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords do not match.",
    path: ["passwordConfirm"],
  });

export const forgotPasswordSchema = z.object({
  email: z.string().min(1, "Email is required.").email("Enter a valid email address."),
});

export const resetPasswordSchema = z
  .object({
    newPassword: z.string().min(8, "Password must be at least 8 characters."),
    newPasswordConfirm: z.string().min(1, "Please confirm your password."),
  })
  .refine((data) => data.newPassword === data.newPasswordConfirm, {
    message: "Passwords do not match.",
    path: ["newPasswordConfirm"],
  });

export const memberSchema = z.object({
  first_name: z.string().min(1, "First name is required."),
  last_name: z.string().min(1, "Last name is required."),
  gender: z.enum(["MALE", "FEMALE", "OTHER"], { errorMap: () => ({ message: "Select a gender." }) }),
  date_of_birth: z.string().optional().nullable(),
  email: z.string().email("Enter a valid email address.").optional().or(z.literal("")),
  phone_number: z.string().optional(),
  marital_status: z.enum(["SINGLE", "MARRIED", "WIDOWED", "DIVORCED"]).optional(),
  church_id: z.union([z.string(), z.number()]).refine((v) => v !== "" && v != null, "Church is required."),
  family_id: z.union([z.string(), z.number(), z.null()]).optional(),
  joined_date: z.string().min(1, "Joined date is required."),
});
