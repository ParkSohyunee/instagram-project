import useSWR, { mutate } from "swr";
import { SimplePost } from "@/model/post";

export default function usePosts() {
  const { data: posts, isLoading, error } = useSWR<SimplePost[]>("/api/posts");

  const setLike = (post: SimplePost, username: string, like: boolean) => {
    fetch("/api/likes", {
      method: "PUT",
      body: JSON.stringify({ id: post.id, like }),
    }).then(() => mutate("/api/posts")); // like 처리후에 posts 상태를 업데이트
  };

  return { posts, isLoading, error, setLike };
}
