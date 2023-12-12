import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { disLikePost, likePost } from "@/service/sanity";

export async function PUT(req: NextRequest) {
  // 요청을 보내는 로그인한 사용자가 누구인지
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  // 사용자가 요청한 body 부분 읽기 (PUT요청을 할 때 id와 boolean type의 like를 전달해줘야 함)
  const { id, like } = await req.json();

  if (!id || like === undefined) {
    return new Response("Bad Request", { status: 400 });
  }

  // 행위에 따라서 호출하기
  const request = like ? likePost : disLikePost;

  return request(id, user.id)
    .then((data) => NextResponse.json(data))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
}
