import { searchUser } from "@/service/sanity";
import { NextResponse } from "next/server";

interface Context {
  params: { keyword: string };
}

export async function GET(_: Request, context: Context) {
  return searchUser(context.params.keyword).then((data) =>
    NextResponse.json(data)
  );
}
