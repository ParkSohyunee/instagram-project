"use client";

import { SearchUser } from "@/model/user";
import { useState } from "react";
import useSWR from "swr";
import SearchCard from "./SearchCard";
import { GridLoader } from "react-spinners";
import useDebounce from "./commons/hooks/useDebounce";

export default function Usersearch() {
  const [keyword, setKeyword] = useState("");
  const debouncedSearch = useDebounce(keyword, 500);
  const { data, isLoading } = useSWR(`/api/search/${debouncedSearch}`);

  const onKeyHandeler = (e: any) => {
    setKeyword(e.target.value);
  };

  return (
    <section className="my-8 mx-40">
      <div className="w-full p-4 border-solid border-1 border-neutral-400">
        <input
          onKeyUp={onKeyHandeler}
          placeholder="Search for a username or name"
          className="w-full text-2xl focus:outline-none"
        />
      </div>
      {isLoading ? (
        <div className="w-full p-4 text-center">
          <GridLoader color="#FF607F" margin={2} size={20} />
        </div>
      ) : (
        <div className="w-full p-4">
          {data?.map((user: SearchUser) => (
            <SearchCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </section>
  );
}
