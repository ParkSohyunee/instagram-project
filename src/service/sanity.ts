import { SimplePost } from "@/model/post";
import { User } from "@/model/user";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: "2023-09-04", // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.NEXT_PUBLIC_SANITY_SECRET_TOKEN, // Only if you want to update content with the client
});

// prettier-ignore
export async function createUser({id, name, email, image, }: User) {
  return await client.createIfNotExists({
    _type: "user",
    _id: id,
    username: email.split("@")[0],
    name,
    email,
    image,
    followers: [],
    following: [],
    comments: []
  });
}

export async function getUser(username: string) {
  return await client.fetch(
    `*[_type == "user" && username == "${username}"][0]{
      ...,
      "id":_id,
      following[]->{username,image},
      followers[]->{username,image},
      "bookmarks":bookmarks[]->_id
    }`
  );
}

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source).width(800).url();
}

const simplePostProjection = `
  ...,
  "username": author->username,
  "userImage": author -> image,
  "image": photo,
  "likes": likes[]->username,
  "text": comments[0].comment,
  "comments": comments,
  "id": _id,
  "createdAt": _createdAt
`;

export async function getPosts(username: string) {
  return await client
    .fetch(
      `
    *[_type == "post" && author->username == "${username}" 
      || author._ref in *[_type == "user" && username == "${username}"].following[]._ref]
      | order(_createdAt desc){${simplePostProjection}}
    `
    )
    .then((posts) =>
      posts.map((post: SimplePost) => ({ ...post, image: urlFor(post.image) }))
    );
}

export async function searchUser(keyword?: string) {
  const query = keyword
    ? `&& username match "${keyword}" || name match "${keyword}"`
    : ``;

  return await client.fetch(
    `*[_type == "user" ${query}]{
      ...,
      "id":_id,
      "following": count(following),
      "followers": count(followers),
    }`
  );
}
