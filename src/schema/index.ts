
import * as z from "zod"

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password Is Required"
  })
});

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Minimum 6 characters Required"
  }),
  name: z.string().min(1, {
    message: "Please provide your Name"
  })
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message:  "Minimum 6 Characters required"
  })
});


export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is Required"
  }),
});
