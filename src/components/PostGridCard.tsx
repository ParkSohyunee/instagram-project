import Image from "next/image";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";

import { FullPost } from "@/model/post";
import ModalPortal from "./ModalPortal";
import ModalDialog from "./ModalDialog";

interface PostGridCardProps {
  post: FullPost;
}

export default function PostGridCard({ post }: PostGridCardProps) {
  const { image, username, id } = post;
  const [showModal, setShowModal] = useState(false);
  const { data: session } = useSession();

  const onClickPostDetail = () => {
    if (!session?.user) {
      return signIn(); // 또는 router 사용
    }
    setShowModal(true);
  };

  return (
    <div className="relative w-full aspect-square">
      <Image
        src={image}
        alt={`photo by ${username}`}
        sizes="650px"
        fill
        className="object-cover"
        priority
        onClick={onClickPostDetail}
      />
      {showModal && (
        <ModalPortal>
          <ModalDialog onClose={() => setShowModal(false)} post={id} />
        </ModalPortal>
      )}
    </div>
  );
}
