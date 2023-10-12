import { getUserForProfile } from "@/service/sanity";

interface Props {
  params: {
    username: string;
  };
}

export default async function UserPage({ params: { username } }: Props) {
  // 상단 - 사용자의 프로필 이미지와 정보(username, name, 숫자)
  // 하단 - 3개의 탭(posts, liked, bookmarks)
  const user = await getUserForProfile(username);
  console.log(user);

  return <></>;
}
