"use client";

import { useSession } from "next-auth/react";

import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import PostList from "./postList/page";
import FollowingBar from "@/components/FollowingBar";

const gradientColor =
  "bg-gradient-to-tr from-yellow from-20 via-pink via-50 to-purple to-90";

export default function Home() {
  const { data: session } = useSession();
  return (
    <section className="flex items-center justify-center p-4">
      {session ? (
        <section className="w-full flex gap-8">
          <div className="w-[70%] flex flex-col items-center">
            <FollowingBar />
            <PostList />
          </div>
          <div className="w-[30%]">
            <Sidebar data={session.user} />
          </div>
        </section>
      ) : (
        <Link
          href="/"
          className={`text-xl p-1 rounded-md mt-32 ${gradientColor}`}
        >
          <div className="bg-white py-4 px-8 rounded-sm">
            Sign In With Google
          </div>
        </Link>
      )}
    </section>
  );
}
