"use client";

import { ProfileUser } from "@/model/user";
import { MouseEvent, useState } from "react";

import PostIcon from "./ui/icons/PostIcon";
import LikesHeartIcon from "./ui/icons/LikesHeartIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import PostGrid from "./PostGrid";

interface Props {
  user: ProfileUser;
}

const tabs = [
  { type: "posts", icon: <PostIcon /> },
  { type: "liked", icon: <LikesHeartIcon /> },
  { type: "saved", icon: <BookmarkIcon /> },
];

export default function UserPosts({ user: { username } }: Props) {
  const [tab, setTeb] = useState("posts");

  const handleChangeTab = (e: MouseEvent<HTMLLIElement>) => {
    setTeb(e.currentTarget.id);
  };

  return (
    <section>
      <ul className="flex justify-center uppercase gap-2">
        {tabs.map(({ type, icon }) => (
          <li
            key={type}
            id={type}
            className="mx-12 p-4 cursor-pointe border-black"
            onClick={handleChangeTab}
          >
            <button className="scale-150 md:scale-100">{icon}</button>
            <span className="hidden md:inline">{type}</span>
          </li>
        ))}
      </ul>
      <PostGrid username={username} tab={tab} />
    </section>
  );
}
