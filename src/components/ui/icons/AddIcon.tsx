import Link from "next/link";
import { BsPlusSquare, BsPlusSquareFill } from "react-icons/bs";

interface Props {
  pathName: string;
}

export default function AddIcon({ pathName }: Props) {
  const isActive = pathName === "/new";
  return (
    <Link href="/new">
      <div className="cursor-pointer text-2xl">
        {isActive ? <BsPlusSquareFill /> : <BsPlusSquare />}
      </div>
    </Link>
  );
}
