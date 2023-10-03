"use client";

import { useState } from "react";
import useSWR from "swr";

export default function Usersearch() {
  const [keyword, setKeyword] = useState("");
  const { data, isLoading } = useSWR(`/api/search/${keyword}`);
  //   console.log(data);

  return (
    <>
      {data?.map((el: any) => (
        <div key={el.id}>
          <div>name : {el.username}</div>
          <div>following : {el.following || 0}</div>
          <div>followers : {el.followers || 0}</div>
        </div>
      ))}
    </>
  );
}
