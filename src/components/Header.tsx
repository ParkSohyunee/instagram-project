"use client";

import { AiOutlineHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsPlusSquare } from "react-icons/bs";
import Loginbutton from "./LoginButton";
import { useSession } from "next-auth/react";
import UserAvatar from "./UserAvatar";

export default function Header() {
  const { data } = useSession();

  return (
    <header className="flex justify-between items-center py-4 px-8 border-b shadow-sm">
      <h1 className="text-4xl font-semibold">Instantgram</h1>
      <nav className="flex gap-4 items-center text-3xl">
        <AiOutlineHome />
        <BiSearch />
        <BsPlusSquare className="text-2xl" />
        {data && (
          <UserAvatar
            image={data.user.image || ""}
            size="small"
            highlighter={true}
            username={data.user.username}
          />
        )}
        <Loginbutton size="small" type={false} />
      </nav>
    </header>
  );
}
