"use client";

import { AiOutlineHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsPlusSquare } from "react-icons/bs";
import Loginbutton from "./LoginButton";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { data } = useSession();
  console.log(data);

  return (
    <header className="flex justify-between items-center py-4 px-8 border-b shadow-sm">
      <h1 className="text-4xl font-semibold">Instantgram</h1>
      <nav className="flex gap-4 items-center text-3xl">
        <AiOutlineHome />
        <BiSearch />
        <BsPlusSquare className="text-2xl" />
        {data && (
          <Link
            href={"/"}
            className={`bg-gradient-to-tr from-yellow from-20 via-pink via-50 to-purple to-90 rounded-full p-0.5`}
          >
            <Image
              src={`${data.user?.image}`}
              width={40}
              height={40}
              alt="user-avatar"
              className="rounded-full"
            />
          </Link>
        )}
        <Loginbutton size="small" type={false} />
      </nav>
    </header>
  );
}
