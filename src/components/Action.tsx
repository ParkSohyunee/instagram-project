import { useState } from "react";
import { useSession } from "next-auth/react";

import BookmarkIcon from "./ui/icons/BookmarkIcon";
import LikesHeartIcon from "./ui/icons/LikesHeartIcon";
import ToggleButton from "./ui/ToggleButton";
import LikesHeartFillIcon from "./ui/icons/LikesHeartFillIcon";
import BookmarkFillIcon from "./ui/icons/BookmarkFillIcon";

import { getTimeagoPostCreate } from "@/service/utiles";
import usePosts from "@/hooks/posts";
import { SimplePost } from "@/model/post";

interface ActionProps {
  post: SimplePost;
}

export default function Action({ post }: ActionProps) {
  const { id, likes, username, text, createdAt } = post;
  const [bookmarked, setBookMarked] = useState(false);

  // 로그인한 사용자가 좋아요를 했는지 여부 확인
  const { data: session } = useSession();
  const user = session?.user;
  const liked = user ? likes?.includes(user.username) : false;

  const { setLike } = usePosts(); // posts가 필요한 곳에서는 커스텀 훅을 호출하면 됨

  const handleLikePost = (like: boolean) => {
    if (user) {
      setLike(post, user.username, like);
    }
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
