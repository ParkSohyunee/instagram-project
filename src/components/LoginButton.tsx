"use client";

import { useSession, signOut, signIn } from "next-auth/react";
import Link from "next/link";

interface Props {
  size: string;
  type: boolean;
}

const BG_GRADIENT_COLOR =
  "bg-gradient-to-tr from-yellow from-20 via-pink via-50 to-purple to-90";

export default function Loginbutton(props: Props) {
  const { data, status } = useSession();

  const message = status === "unauthenticated" ? "Sign in" : "Sign out";
  const padding = props.size === "large" ? "py-4 px-8" : " px-2 py-1";

  const handleSignin = async () => {
    await signIn("google", { callbackUrl: "http://localhost:3000" });
  };

  const handelSignout = async () => {
    await signOut({ callbackUrl: "http://localhost:3000" });
  };

  return (
    <>
      {data ? (
        <button
          onClick={handelSignout}
          className={`text-xl p-0.5 rounded-md ${BG_GRADIENT_COLOR}`}
        >
          <div className={`bg-white ${padding} rounded-sm`}>{message}</div>
        </button>
      ) : props.type ? (
        <button
          onClick={handleSignin}
          className={`text-xl p-1 rounded-md mt-32 ${BG_GRADIENT_COLOR}`}
        >
          <div className="bg-white py-4 px-8 rounded-sm">
            Sign In With Google
          </div>
        </button>
      ) : (
        <Link
          href="/signin"
          className={`text-xl p-0.5 rounded-md ${BG_GRADIENT_COLOR}`}
        >
          <div className={`bg-white ${padding} rounded-sm`}>Sign in</div>
        </Link>
      )}
    </>
  );
}