import { SimplePost } from "@/model/post";
import useSWR from "swr";

interface ModalDialog {
  onClick: () => void;
  post: string;
}

export default function ModalDialog({ post, onClick }: ModalDialog) {
  const { data } = useSWR<SimplePost[]>("/api/posts");
  if (!data) return;
  const postDetail = data.filter((el) => el.id === post);

  return (
    <section className="absolute bg-slate-100">
      <div>{post}</div>
      <button onClick={() => onClick()}>닫기</button>
    </section>
  );
}
