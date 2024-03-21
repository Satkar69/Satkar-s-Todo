import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="h-full w-full bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-none shadow-blue-300 shadow-md mb-4">
        <nav className="flex rounded-xl justify-between items-center px-8 py-4">
          <Link className="text-white font-bold" href={"/"}>
            Todos
          </Link>
          <Link
            className="bg-gray-600 p-2 rounded-lg bg-opacity-40 backdrop-blur-sm text-white hover:bg-slate-600"
            href={"/addTopic"}
          >
            Add Task
          </Link>
        </nav>
      </div>
    </>
  );
}
