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
    session({ session }) {
      const user = session.user;
      if (user) {
        session.user = {
          ...user,
          username: user.email?.split("@")[0],
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
