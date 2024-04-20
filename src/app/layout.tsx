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
      <body className="w-full max-w-screen-xl overflow-auto mx-auto">
        <NextAuthProvider>
          <SWRProvider>
            <header className="sticky top-0 py-4 px-8 border-b shadow-sm bg-neutral-50 z-10">
              <Header />
            </header>
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
