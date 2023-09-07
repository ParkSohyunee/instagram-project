"use client";

import { ReactNode } from "react";
import { SWRConfig } from "swr";

export const SWRProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then((res) => res.json()), // // Promise {<pending>} => fulfilled
      }}
    >
      {children}
    </SWRConfig>
  );
};

// we need to specify the fetcher function to fetch the API.
// fetcher is an async function that accepts the url (also called the key) as a parameter.
// It is just a wrapper of the Fetch API,
