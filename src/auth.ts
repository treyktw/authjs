import NextAuth, { type DefaultSession } from "next-auth";
import authConfig from "./auth.config";
import { GetUserById } from "./data/user";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";

declare module "@auth/core" {
  interface Session{
    user: {
      role: "ADMIN" | "USER"
    } & DefaultSession["user"]
  }
}

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth({
  pages:{
    signIn: "/auth/login",
    error: "/auth/error"
  },
  events:{
    async linkAccount({user}) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() }
      })
    }
  },
  callbacks: {

    async signIn({ user, account }) {
      console.log({
        user, 
        account
      })
      // Allow OAuth without email verification
      if (account?.provider !== "credentials") {
        return true;
      }

      const existingUser = await GetUserById(user.id);
      // prevent sign-in without email verification
      if(!existingUser?.emailVerified) return false;

      //TODO: Add 2fa check
       
      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.sub && session.user) {
        session.user.role = token.role;
      }

      return session;
    },
    async jwt({ token }) {
      if(!token.sub) return token;
      const existingUser = await GetUserById(token.sub);
      if(!existingUser) return token;
      
      token.role = existingUser.role;

      return token;
    },
  },
  ...authConfig,
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
});
