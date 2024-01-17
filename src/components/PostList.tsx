import { SimplePost } from "@/model/post";
import useSWR from "swr";
import PostCard from "./PostCard";

export default function PostList() {
  const { data } = useSWR<SimplePost[]>("/api/posts");

  return (
    <section>
      {data &&
        data.map((post) => (
          <article
            key={post.id}
            className="rounded-md overflow-hidden shadow-lg bg-neutral-50 mb-4"
          >
            <PostCard post={post} />
          </article>
        ))}
    </section>
  );
}
