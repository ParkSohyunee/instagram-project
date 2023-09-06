"use client";

import useSWR from "swr";

export default function Following() {
  const { data, isLoading } = useSWR("/api/following");
  console.log(data); // hello
  console.log(isLoading); // true => false

  return <section>Following</section>;
}
