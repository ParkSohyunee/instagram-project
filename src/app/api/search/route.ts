import { searchUser } from "@/service/sanity";
import { NextResponse } from "next/server";

export async function GET(_: Request) {
  return searchUser().then((data) => NextResponse.json(data));
}
