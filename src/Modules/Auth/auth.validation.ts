import z from "zod";


const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters");

const emailSchema = z
  .string()
  .email("Invalid email address")
  .toLowerCase();

const otpSchema = z
  .string()
  .length(6, "OTP must be 6 digits")
  .regex(/^\d+$/, "OTP must contain only numbers");


  
export const signupSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: emailSchema,
  password: passwordSchema,
  mobileNumber: z.string().regex(/^\+?\d{7,15}$/, "Invalid phone number"),
  DOB: z.string().datetime().optional(),
  gender: z.enum(["Male", "Female"]).optional(),
  provider: z.enum(["system", "google"]).optional().default("system"),
});

export type SignupInput = z.infer<typeof signupSchema>;



export const signinSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type SigninInput = z.infer<typeof signinSchema>;



export const confirmOtpSchema = z.object({
  email: emailSchema,
  code: otpSchema,
  type: z.enum(["confirmEmail", "forgetPassword"]),
});

export type ConfirmOtpInput = z.infer<typeof confirmOtpSchema>;




export const forgotSchema = z.object({
  email: emailSchema,
});

export type ForgotInput = z.infer<typeof forgotSchema>;




export const resetPasswordSchema = z.object({
  email: emailSchema,
  code: otpSchema,
  newPassword: passwordSchema,
});

export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
