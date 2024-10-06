import z from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(8, { message: "Password min length is 8" }),
});

export const registerSchema = z
  .object({
    loginName: z.string().min(5),
    email: z.string().email({ message: "Invalid email" }),
    password: z.string().min(8, { message: "Password min length is 8" }),
    confirmPassword: z.string().min(8, { message: "Password min length is 8" }),
  })
  .refine((data: any) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
