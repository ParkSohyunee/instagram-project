import { SimplePost } from "@/model/post";
import useSWR from "swr";
import UserAvatar from "./UserAvatar";
import Image from "next/image";
import Action from "./Action";
import InputForm from "./InputForm";
import { MouseEvent } from "react";

interface ModalDialog {
  onClose: () => void;
  post: string;
}

export default function ModalDialog({ post, onClose }: ModalDialog) {
  const { data } = useSWR<SimplePost[]>("/api/posts");
  if (!data) return;
  const postDetail = data.find((el) => el.id === post);

  const handleOutSideClick = (e: MouseEvent<HTMLSelectElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <section
      onClick={handleOutSideClick}
      className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center z-[1000] bg-black/60 p-8"
    >
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
        onClick={() => onClose()}
        className="fixed top-0 right-0 text-white p-8 text-2xl"
      >
        닫기
      </button>
    </section>
  );
}
