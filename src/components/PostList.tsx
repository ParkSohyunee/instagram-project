import { SimplePost } from "@/model/post";
import Image from "next/image";
import useSWR from "swr";
import UserAvatar from "./UserAvatar";
import { AiOutlineHeart } from "react-icons/ai";
import { PiBookmarkSimple } from "react-icons/pi";
import { BsEmojiSmile } from "react-icons/bs";
import { getTimeagoPostCreate } from "@/service/utiles";
import ModalDialog from "./ModalDialog";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function PostList() {
  const [showModal, setShowModal] = useState(false);
  const [postId, setPostId] = useState("");
  const { data } = useSWR<SimplePost[]>("/api/posts");

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  const onClickPostDetail = (e: any) => {
    setPostId(e.currentTarget.id);
    handleModal();
  };

  return (
    <section>
      {showModal &&
        createPortal(
          <ModalDialog onClick={handleModal} post={postId} />,
          document.body
        )}
      {data &&
        data.map((post) => (
          <article
            key={post.id}
            className="rounded-md overflow-hidden shadow-lg bg-neutral-50 mb-4"
          >
            <div className="flex items-center gap-4 p-2">
              <UserAvatar
                image={post.userImage}
                size="small"
                highlighter={true}
                username={post.username}
              />
              <h1 className="font-semibold">{post.username}</h1>
            </div>
            <Image
              id={post.id}
              onClick={onClickPostDetail}
              className="w-[550px] h-[600px]"
              src={post.image}
              width={500}
              height={400}
              alt="게시글 이미지"
            />
            <div className="flex flex-col gap-2 p-4">
              <div className="flex justify-between items-center text-2xl">
                <AiOutlineHeart className="cursor-pointer" />
                <PiBookmarkSimple className="cursor-pointer" />
              </div>
              <p className="font-semibold">
                {`${
                  post.likes && post.likes.length
                    ? `${post.likes.length} likes`
                    : "0 like"
                }`}
              </p>
              <div className="flex gap-2">
                <span className="font-semibold">{post.username}</span>
                <span className="text-slate-800">{post.text}</span>
              </div>
              <p className="text-gray-600 text-sm">
                {getTimeagoPostCreate(post.createdAt)}
              </p>
            </div>
            <div className="flex gap-4 justify-between items-center bg-white p-4">
              <BsEmojiSmile className="text-xl" />
              <input
                placeholder="Add a comment..."
                className="w-full outline-none"
              />
              <button className="font-semibold text-cyan-500">Post</button>
            </div>
          </article>
        ))}
    </section>
  );
}
