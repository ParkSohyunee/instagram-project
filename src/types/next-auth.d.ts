import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * user type 재정의 => session.user 타입
   */
  interface Session {
    user: {
      id: string;
      username: string;
      name: string;
      email: string;
      image: string;
    } & DefaultSession["user"];
  }
}
