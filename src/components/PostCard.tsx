import { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

import UserAvatar from "./UserAvatar";
import ModalDialog from "./ModalDialog";
import InputForm from "./InputForm";

import Action from "./Action";
import ModalPortal from "./ModalPortal";

interface PostCardProps {
  id: string;
  userImage: string;
  username: string;
  text: string;
  createdAt: string;
  likes: string[];
  image: string;
}

export default function PostCard({
  id,
  userImage,
  username,
  text,
  createdAt,
  likes,
  image,
}: PostCardProps) {
  const [showModal, setShowModal] = useState(false);
  const [postId, setPostId] = useState("");

  const onClickPostDetail = (e: any) => {
    setPostId(e.currentTarget.id);
    setShowModal(true);
  };

  document.body.style.overflow = showModal ? "hidden" : "auto";

  return (
    <>
      {showModal && (
        <ModalPortal>
          <ModalDialog onClose={() => setShowModal(false)} post={postId} />
        </ModalPortal>
      )}
      <div className="flex items-center gap-4 p-2">
        <UserAvatar
          image={userImage}
          size="small"
          highlighter={true}
          username={username}
        />
        <h1 className="font-semibold">{username}</h1>
      </div>
      <Image
        id={id}
        onClick={onClickPostDetail}
        className="w-[550px] h-[600px] cursor-pointer"
        src={image}
        width={500}
        height={400}
        alt="게시글 이미지"
      />
      <Action
        username={username}
        text={text}
        createdAt={createdAt}
        likes={likes}
      />
      <InputForm />
    </>
  );
}
