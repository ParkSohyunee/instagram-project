"use client";

import UserAvatar from "./UserAvatar";

interface Userdata {
  data: {
    name: string;
    username: string;
    image?: string;
  };
}

export default function Sidebar({ data: { name, username, image } }: Userdata) {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center gap-8">
        <UserAvatar
          image={image ? image : ""}
          size="large"
          highlighter={false}
          username={username}
        />
        <div>
          <p className="font-bold text-xl">{username}</p>
          <p className="text-xl">{name}</p>
        </div>
      </div>
      <div className="text-slate-500 text-lg">
        <p>About﹒Help﹒Press﹒API﹒Jobs,</p>
        <p>Privacy﹒Terms﹒Location﹒</p>
        <p>Language</p>
      </div>
      <div className="text-slate-600 font-semibold text-lg">
        <p>@Copyright INSTANTGRAM</p>
        <p>from METAL</p>
      </div>
    </section>
  );
}
