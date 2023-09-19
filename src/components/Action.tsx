import { getTimeagoPostCreate } from "@/service/utiles";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import LikesHeartIcon from "./ui/icons/LikesHeartIcon";

interface ActionProps {
  username: string;
  text: string;
  createdAt: string;
  likes: string[];
}

export default function Action({
  username,
  text,
  createdAt,
  likes,
}: ActionProps) {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex justify-between items-center text-2xl">
        <LikesHeartIcon />
        <BookmarkIcon />
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
