import { createUser } from "@/service/sanity";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID as string,
      clientSecret: process.env.GOOGLE_OAUTH_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user: { id, name, email, image } }) {
      if (!email || !name) return false;
      createUser({
        id,
        name,
        username: email.split("@")[0],
        email,
        image: image || "",
      });
      return true;
    },
    async session({ session, token }) {
      const user = session.user;
      if (user) {
        session.user = {
          ...user,
          username: user.email?.split("@")[0],
          id: token.id as string, // jwt로 생성한 id를 session의 id를 만들어서 넣어줌
        };
      }
      return session;
    },
    async jwt({ token, user }) {
      // 좋아요 요청시 userId를 보내주기위해 session의 tokent을 이용해서 userId 생성
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: "/signin",
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
