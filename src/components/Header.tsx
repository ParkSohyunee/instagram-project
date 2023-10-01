"use client";

import Loginbutton from "./LoginButton";
import { useSession } from "next-auth/react";
import UserAvatar from "./UserAvatar";
import SearchIcon from "./ui/icons/SearchIcon";
import { usePathname } from "next/navigation";
import HomeIcon from "./ui/icons/HomeIcon";
import AddIcon from "./ui/icons/AddIcon";
import Link from "next/link";

export default function Header() {
  const { data } = useSession();
  const pathName = usePathname();

  return (
    <header className="sticky top-0 flex justify-between items-center py-4 px-8 border-b shadow-sm bg-neutral-50 z-10">
      <Link href="/">
        <h1 className="text-4xl font-semibold">Instantgram</h1>
      </Link>
      <nav className="flex gap-4 items-center text-3xl">
        <HomeIcon pathName={pathName} />
        <SearchIcon pathName={pathName} />
        <AddIcon pathName={pathName} />
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
