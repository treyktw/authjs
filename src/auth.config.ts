import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./schema";
import bcryptjs from "bcryptjs"
import { getUserByEmail } from "./data/user";

export default {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET
    }),
    Credentials({
    async authorize(credentials) {
      const validatedFields = LoginSchema.safeParse(credentials)

      if(validatedFields.success) {
        const { email, password } = validatedFields.data;

        const user = await getUserByEmail(email)
        if(!user || !user.password) return null

        const passwordsMatch = await bcryptjs.compare(
          password,
          user.password
        );

        if(passwordsMatch) return user;
      }
      return null
    }
  })]
} satisfies NextAuthConfig;