import { savePost, unSavedPost } from "@/service/sanity";
import { useSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";

export async function POST(res: NextRequest) {
  const { data: session } = useSession();
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  // 사용자가 요청한 body 부분 읽기 (PUT요청을 할 때 id와 boolean type의 bookmark를 전달해줘야 함)
  const { id, bookmark } = await res.json();

  if (!id || bookmark === undefined) {
    return new Response("Bad Request", { status: 400 });
  }

  // 행위에 따라서 호출하기
  const request = bookmark ? savePost : unSavedPost;

  return request(id, user.id)
    .then((data) => NextResponse.json(data))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
}
