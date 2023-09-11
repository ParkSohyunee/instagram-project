import { SimplePost } from "@/service/sanity";
import useSWR from "swr";

export default function PostList() {
  const { data } = useSWR<SimplePost[]>("/api/posts");
  console.log(data);

  return (
    <section>
      {data &&
        data.map((post: any) => (
          <div key={post.id}>
            <div>{post.text}</div>
            <div>{post.likes.length}</div>
            <div>{post.username}</div>
            <div>{post.createdAt}</div>
          </div>
        ))}
    </section>
  );
}
