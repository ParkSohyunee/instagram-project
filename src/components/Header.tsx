import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsPlusSquare } from "react-icons/bs";

const gradientColor =
  "bg-gradient-to-tr from-yellow-500 from-20% via-pink-500 via-50% to-purple-500 to-90%";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8 border-b shadow-sm">
      <h1 className="text-4xl font-semibold">Instantgram</h1>
      <nav className="flex gap-4 items-center text-3xl">
        <AiOutlineHome />
        <BiSearch />
        <BsPlusSquare className="text-2xl" />
        <Link href="/" className={`text-xl p-0.5 rounded-md ${gradientColor}`}>
          <div className="bg-white px-2 py-1 rounded-sm">Sign in</div>
        </Link>
      </nav>
    </header>
  );
}
