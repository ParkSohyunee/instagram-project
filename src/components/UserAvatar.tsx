import Image from "next/image";
import Link from "next/link";

interface UserImage {
  image: string;
  size: string;
  highlighter: boolean;
  username: string;
}

export default function UserAvatar({
  image,
  size,
  highlighter,
  username,
}: UserImage) {
  const imageSize = size === "small" ? 40 : 50;

  return (
    <Link
      href={`/user/${username}`}
      className={`w-[${imageSize}px] h-[${imageSize}px] ${
        highlighter &&
        `bg-gradient-to-tr from-yellow from-20 via-pink via-50 to-purple to-90 rounded-full p-0.5`
      }`}
    >
      <Image
        src={image}
        width={imageSize}
        height={imageSize}
        alt="user-avatar"
        className="rounded-full"
      />
    </Link>
  );
}
