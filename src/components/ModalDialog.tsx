import { SimplePost } from "@/model/post";
import useSWR from "swr";
import UserAvatar from "./UserAvatar";
import Image from "next/image";
import Action from "./Action";
import InputForm from "./InputForm";

interface ModalDialog {
  onClick: () => void;
  post: string;
}

export default function ModalDialog({ post, onClick }: ModalDialog) {
  const { data } = useSWR<SimplePost[]>("/api/posts");
  if (!data) return;
  const postDetail = data.find((el) => el.id === post);

  return (
    <section className="absolute w-full h-full flex justify-center items-center z-[1000] bg-black/60">
      <div className="bg-white flex  ">
        <Image
          className="w-[550px] h-[600px] cursor-pointer"
          src={postDetail?.image || ""}
          width={500}
          height={400}
          alt="게시글 이미지"
        />
        <div className="w-[450px]">
          <div className="flex items-center gap-4 p-2">
            <UserAvatar
              image={postDetail?.userImage || ""}
              size="small"
              highlighter={true}
              username={postDetail?.username || ""}
            />
            <h1 className="font-semibold">{postDetail?.username}</h1>
          </div>
          <Action
            username={postDetail?.username || ""}
            text={postDetail?.text || ""}
            createdAt={postDetail?.createdAt || ""}
            likes={postDetail?.likes}
          />
          <InputForm />
        </div>
      </div>
      <button
        onClick={() => onClick()}
        className="relative left-8 bottom-60 text-white"
      >
        닫기
      </button>
    </section>
  );
}
