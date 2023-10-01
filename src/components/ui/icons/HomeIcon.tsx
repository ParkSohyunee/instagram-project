import Link from "next/link";
import { AiOutlineHome, AiTwotoneHome } from "react-icons/ai";

interface Props {
  pathName: string;
}

export default function HomeIcon({ pathName }: Props) {
  const isActive = pathName === "/";
  return (
    <Link href="/">
      <div className="cursor-pointer">
        {isActive ? <AiTwotoneHome /> : <AiOutlineHome />}
      </div>
    </Link>
  );
}
