import Link from "next/link";

interface UserImage {
  image: string;
  size: string;
  highlighter: boolean;
  username: string;
}

interface avatarSize {
  [key: string]: string;
  small: string;
  medium: string;
  large: string;
}

const avatarSize: avatarSize = {
  small: "w-14 h-14",
  medium: "w-20 h-20",
  large: "w-24 h-24",
};

export default function UserAvatar({
  image,
  size,
  highlighter,
  username,
}: UserImage) {
  const linkImageSize = avatarSize[size];

  return (
    <Link href={`/user/${username}`}>
      <div
        className={`${linkImageSize} ${
          highlighter &&
          `bg-gradient-to-tr from-yellow from-20 via-pink via-50 to-purple to-90 rounded-full`
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image ?? undefined}
          alt="user-avatar"
          className={`rounded-full ${linkImageSize} p-0.5`}
          referrerPolicy="no-referrer"
        />
      </div>
    </Link>
  );
}
