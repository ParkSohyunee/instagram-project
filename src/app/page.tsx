import Link from "next/link";

const gradientColor =
  "bg-gradient-to-tr from-yellow-500 from-20% via-pink-500 via-50% to-purple-500 to-90%";

export default function Home() {
  return (
    <section className="flex items-center justify-center">
      <Link
        href="/"
        className={`text-xl p-1 rounded-md mt-32 ${gradientColor}`}
      >
        <div className="bg-white py-4 px-8 rounded-sm">Sign In With Google</div>
      </Link>
    </section>
  );
}
