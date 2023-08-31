"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const gradientColor =
  "bg-gradient-to-tr from-yellow-500 from-20% via-pink-500 via-50% to-purple-500 to-90%";

export default function Loginbutton() {
  const { data, status } = useSession();
  // console.log(data?.user?.name);

  return (
    <>
      {data ? (
        <Link
          href="/"
          onClick={() => signOut()}
          className={`text-xl p-0.5 rounded-md ${gradientColor}`}
        >
          <div className="bg-white px-2 py-1 rounded-sm">Sign out</div>
        </Link>
      ) : (
        <Link
          href="/api/auth/signin"
          onClick={() => signIn()}
          className={`text-xl p-0.5 rounded-md ${gradientColor}`}
        >
          <div className="bg-white px-2 py-1 rounded-sm">Sign in</div>
        </Link>
      )}
    </>
  );
}
