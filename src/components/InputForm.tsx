import { BsEmojiSmile } from "react-icons/bs";

export default function InputForm() {
  return (
    <div className="flex gap-4 justify-between items-center bg-white p-4">
      <BsEmojiSmile className="text-xl" />
      <input placeholder="Add a comment..." className="w-full outline-none" />
      <button className="font-semibold text-cyan-500">Post</button>
    </div>
  );
}
