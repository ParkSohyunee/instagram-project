import { AiOutlineHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsPlusSquare } from "react-icons/bs";
import Loginbutton from "./LoginButton";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8 border-b shadow-sm">
      <h1 className="text-4xl font-semibold">Instantgram</h1>
      <nav className="flex gap-4 items-center text-3xl">
        <AiOutlineHome />
        <BiSearch />
        <BsPlusSquare className="text-2xl" />
        <Loginbutton />
      </nav>
    </header>
  );
}
