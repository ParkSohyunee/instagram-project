"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

import Loginbutton from "./LoginButton";
import UserAvatar from "./UserAvatar";
import {
  HomeIcon,
  HomeFilledIcon,
  SearchIcon,
  SearchFilledIcon,
  AddIcon,
  AddFilledIcon,
} from "./ui/icons";

export default function Header() {
  const { data } = useSession();
  const pathName = usePathname();

  const menus = [
    {
      href: "/",
      icon: <HomeIcon />,
      selected: <HomeFilledIcon />,
    },
    {
      href: "/search",
      icon: <SearchIcon />,
      selected: <SearchFilledIcon />,
    },
    {
      href: "/new",
      icon: <AddIcon />,
      selected: <AddFilledIcon />,
    },
  ];

  return (
    <div className="flex justify-between items-center px-6">
      <Link href="/">
        <h1 className="text-3xl font-bold">Instantgram</h1>
      </Link>
      <nav>
        <ul className="flex gap-4 items-center p-4">
          {menus.map(({ href, icon, selected }) => (
            <li key={href}>
              <Link href={href}>{pathName === href ? selected : icon}</Link>
            </li>
          ))}
          {data && (
            <UserAvatar
              image={data.user.image || ""}
              size="small"
              highlighter={true}
              username={data.user.username}
            />
          )}
          <Loginbutton size="small" type={false} />
        </ul>
      </nav>
    </div>
  );
}
