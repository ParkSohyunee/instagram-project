import useSWR from "swr";

export default function FollowingBar() {
  const { data, isLoading } = useSWR("/api/user");
  console.log(data);
  console.log(isLoading);

  return <section>Following</section>;
}
