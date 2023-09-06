import { NextResponse } from "next/server";
export async function GET(req: Request) {
  // 해야할 작업 => Sanity에 저장된 Following data 불러오기

  return NextResponse.json("hello");
}
