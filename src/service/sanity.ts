import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: "2023-09-04", // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.NEXT_PUBLIC_SANITY_SECRET_TOKEN, // Only if you want to update content with the client
});

export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  image?: string;
}

// prettier-ignore
export default async function createUser({id, name, email, image}: User) {
  return await client.createIfNotExists({
    _type: "user",
    _id: id,
    username: email.split("@")[0],
    name,
    email,
    image,
  });
}
