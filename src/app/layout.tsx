import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import NextAuthProvider from "@/app/context/NextAuth";
import { SWRProvider } from "./context/SwrProvider";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={openSans.className}>
      <body className="flex flex-col w-full h-full mx-auto max-w-screen-2xl">
        <NextAuthProvider>
          <SWRProvider>
            <Header />
            <main className="grow px-20 py-14">{children}</main>
            <footer className="bg-green-100">footer</footer>
          </SWRProvider>
        </NextAuthProvider>
        {/* body 안 가장 마지막 요소에 portal을 만들어줌 */}
        <div id="portal" />
      </body>
    </html>
  );
}
