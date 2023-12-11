import useSWR from "swr";
import { FullPost } from "@/model/post";
import { GridLoader } from "react-spinners";
import PostGridCard from "./PostGridCard";

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

  return (
    <div className="w-full text-center">
      {isLoading && <GridLoader color="#FF607F" margin={2} size={20} />}
      <ul className="grid grid-cols-3 gap-4 py-4 px-8">
        {posts?.map((post: FullPost) => (
          <li
            key={post.id}
            className="w-[350px] h-[350px] relative cursor-pointer"
          >
            <PostGridCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
