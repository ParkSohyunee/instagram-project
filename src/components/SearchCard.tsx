import { SearchUser } from "@/model/user";
import UserAvatar from "./UserAvatar";
import Link from "next/link";

interface Props {
  user: SearchUser;
}

export default function SearchCard({
  user: { username, name, image, followers, following },
}: Props) {
  return (
    <div className="my-2 p-4 flex gap-4 rounded-sm border-1 border-neutral-300">
      <UserAvatar
        image={image}
        size="large"
        highlighter={false}
        username={username}
      />
      <Link href={`/user/${username}`} className="w-full">
        <div className="flex flex-col">
          <span className="text-xl font-semibold">{name}</span>
          <span className="text-neutral-500">{username}</span>
          <span className="text-neutral-500">
            {followers ?? 0} followers {following ?? 0} following
          </span>
        </div>
      </Link>
    </div>
  );
}
