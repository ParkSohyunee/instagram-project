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
  /**
   * api/users/${username}/posts
   * api/users/${username}/liked
   * api/users/${username}/bookmarks
   * 데이터, 액션, 계산 분리하기
   */

  const [tab, setTeb] = useState("posts");

  const handleChangeTab = (e: MouseEvent<HTMLLIElement>) => {
    setTeb(e.currentTarget.id);
  };

  return (
    <section className="flex flex-col gap-4">
      <ul className="flex items-center gap-2">
        {tabs.map(({ type, icon }) => (
          <li
            key={type}
            id={type}
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleChangeTab}
          >
            <span>{icon}</span>
            <span>{type}</span>
          </li>
        ))}
      </ul>
      <PostGrid username={username} tab={tab} />
    </section>
  );
}
