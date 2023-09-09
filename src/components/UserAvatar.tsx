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
  const linkImageSize = size === "small" ? "w-14 h-14" : "w-20 h-20";

  return (
    <Link href={`/user/${username}`}>
      <div
        className={`${linkImageSize} ${
          highlighter &&
          `bg-gradient-to-tr from-yellow from-20 via-pink via-50 to-purple to-90 rounded-full`
        }`}
      >
        <img
          src={image}
          alt="user-avatar"
          className={`rounded-full ${linkImageSize} p-0.5`}
        />
      </div>
    </Link>
  );
}
