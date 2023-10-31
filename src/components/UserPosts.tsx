"use client";

import { ProfileUser } from "@/model/user";
import { useState } from "react";
import useSWR from "swr";

interface Props {
  user: ProfileUser;
}

export default function UserPosts({ user: { username } }: Props) {
  /**
   * api/users/${username}/posts
   * api/users/${username}/liked
   * api/users/${username}/bookmarks
   */

  const [tab, setTeb] = useState("posts");
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR(`/api/users/${username}/${tab}`);

  console.log(posts);

  return <article></article>;
}
