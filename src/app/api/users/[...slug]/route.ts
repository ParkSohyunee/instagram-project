import { getLikedPostsOf, getPostOf, getSavedPostsOf } from "@/service/sanity";
import { NextRequest, NextResponse } from "next/server";

interface Context {
  params: {
    slug: string[] /** 중첩은 배열 형태 slug/slug/slug => { slug: ['a', 'b', 'c'] } */;
  };
}

export async function GET(_: NextRequest, context: Context) {
  const { slug } = context.params;

  if (!slug || !Array.isArray(slug) || slug.length < 2) {
    return new NextResponse("Bad Request", { status: 400 });
  }

  const [username, query] = slug;
  /** query가 무엇인지에 따라 api 요청(posts, liked, bookmarks */

  let request = getPostOf;
  if (query === "saved") {
    request = getSavedPostsOf;
  } else if (query === "liked") {
    request = getLikedPostsOf;
  }

  return request(username).then((data) => NextResponse.json(data));
}
