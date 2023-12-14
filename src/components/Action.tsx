import { useState } from "react";
import { useSWRConfig } from "swr";
import { useSession } from "next-auth/react";

import { getTimeagoPostCreate } from "@/service/utiles";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import LikesHeartIcon from "./ui/icons/LikesHeartIcon";
import ToggleButton from "./ui/ToggleButton";
import LikesHeartFillIcon from "./ui/icons/LikesHeartFillIcon";
import BookmarkFillIcon from "./ui/icons/BookmarkFillIcon";

interface ActionProps {
  id: string;
  username: string;
  text: string;
  createdAt: string;
  likes?: string[];
}

export default function Action({
  id,
  username,
  text,
  createdAt,
  likes,
}: ActionProps) {
  const [bookmarked, setBookMarked] = useState(false);

  // 로그인한 사용자가 좋아요를 했는지 여부 확인
  const { data: session } = useSession();
  const user = session?.user;
  const liked = user ? likes?.includes(user.username) : false;

  const { mutate } = useSWRConfig(); // swr에게 상태가 변경됨을 알려줌

  const handleLikePost = (like: boolean) => {
    fetch("api/likes", {
      method: "PUT",
      body: JSON.stringify({ id, like }),
    }).then(() => mutate("/api/posts")); // like 처리후에 posts 상태를 업데이트
  };

  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex justify-between items-center text-2xl">
        <ToggleButton
          toggle={liked}
          onToggle={handleLikePost}
          onIcon={<LikesHeartFillIcon />}
          offIcon={<LikesHeartIcon />}
        />
        <ToggleButton
          toggle={bookmarked}
          onToggle={setBookMarked}
          onIcon={<BookmarkFillIcon />}
          offIcon={<BookmarkIcon />}
        />
      </div>
      <p className="font-semibold">
        {`${likes && likes.length ? `${likes.length} likes` : "0 like"}`}
      </p>
      <div className="flex gap-2">
        <span className="font-semibold">{username}</span>
        <span className="text-slate-800">{text}</span>
      </div>
      <p className="text-gray-600 text-sm">{getTimeagoPostCreate(createdAt)}</p>
    </div>
  );
}
