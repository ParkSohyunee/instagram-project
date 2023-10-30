import FollowButton from "@/components/FollowButton";
import UserAvatar from "@/components/UserAvatar";
import { getUserForProfile } from "@/service/sanity";

interface Props {
  params: {
    username: string;
  };
}

export default async function UserPage({ params: { username } }: Props) {
  // 상단 - 사용자의 프로필 이미지와 정보(username, name, 숫자)
  const profile = await getUserForProfile(username);

  const {
    image,
    username: profileName,
    posts: postsCount,
    followers: followersCount,
    following: followingCount,
    name,
  } = profile;

  // 하단 - 3개의 탭(posts, liked, bookmarks)

  return (
    <section className="flex flex-col items-center">
      <article className="flex gap-8 items-center">
        <div>
          <UserAvatar
            image={image}
            size="large"
            highlighter={true}
            username={profileName}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="flex gap-8 items-center">
            <span className="text-lg">{profileName}</span>
            <FollowButton profileName={profileName} />
          </p>
          <p className="flex gap-4">
            <span className="whitespace-nowrap">{postsCount} posts</span>
            <span className="whitespace-nowrap">
              {followersCount} followers
            </span>
            <span className="whitespace-nowrap">
              {followingCount} following
            </span>
          </p>
          <p className="text-xl font-semibold">{name}</p>
        </div>
      </article>
    </section>
  );
}
