import Image from "next/image";
import { FullPost } from "@/model/post";

interface PostGridCardProps {
  post: FullPost;
}

export default function PostGridCard({ post }: PostGridCardProps) {
  const { image, username } = post;
  return (
    <div>
      <Image
        src={image}
        alt={`photo by ${username}`}
        sizes="650px"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
