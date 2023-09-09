"use client";

import useSWR from "swr";
import UserAvatar from "./UserAvatar";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PropagateLoader } from "react-spinners";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

export default function FollowingBar() {
  const { data, isLoading } = useSWR("/api/user");

  return (
    <section className="w-[800px] shadow-md py-4 px-10 h-40 bg-neutral-50 rounded-lg">
      {isLoading ? (
        <div className="relative top-1/2 left-1/2">
          <PropagateLoader color="#FF607F" />
        </div>
      ) : (
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          className="w-full h-full"
        >
          {data?.following.map((user: any) => (
            <div key={user.username} className="flex flex-col items-center">
              <UserAvatar
                image={user.image}
                size="large"
                highlighter={true}
                username={user.username}
              />
              <div>{user.username}</div>
            </div>
          ))}
        </Carousel>
      )}
    </section>
  );
}
