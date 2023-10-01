import Link from "next/link";
import { BiSearch, BiSolidSearch } from "react-icons/bi";

interface Props {
  pathName: string;
}

export default function SearchIcon({ pathName }: Props) {
  const isActive = pathName === "/search";
  return (
    <Link href="/search">
      <div className="cursor-pointer">
        {isActive ? <BiSolidSearch /> : <BiSearch />}
      </div>
    </Link>
  );
}
