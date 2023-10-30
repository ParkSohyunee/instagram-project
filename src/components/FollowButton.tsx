"use client";

import useSWR from "swr";

interface FollowingList {
  username: string;
  image?: string;
}

export default function FollowButton({ profileName }: any) {
  const { data } = useSWR("/api/user");

  // 로그인 되어있고, 로그인한 본인이 아니라면 버튼 보이기
  const visibleButton = data && data.username !== profileName;

  // 로그인 되어있고, 사용자의 following 목록에 포함 여부
  const isFollowing =
    data &&
    data.following.some((list: FollowingList) => list.username === profileName);

  const text = isFollowing ? "Unfollow" : "Follow";

  return (
    <>
      {visibleButton && (
        <button className="font-semibold text-white bg-red-600 rounded-md px-6 py-1">
          {text}
        </button>
      )}
    </>
  );
}
