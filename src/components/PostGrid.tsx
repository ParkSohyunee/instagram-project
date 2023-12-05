import useSWR from "swr";
import Image from "next/image";
import { FullPost } from "@/model/post";

interface PostGridProps {
  username: string;
  tab: string;
}

export default function PostGrid({ username, tab }: PostGridProps) {
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR(`/api/users/${username}/${tab}`);

  //   console.log(posts);

  return (
    <div className="w-full relative">
      <ul className="w-full grid gap-4">
        {posts?.map((post: FullPost) => (
          <li
            key={post.id}
            className="w-[350px] h-[350px] relative cursor-pointer"
          >
            <Image
              src={post.image}
              fill
              alt="post"
              className="object-cover"
              priority
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
