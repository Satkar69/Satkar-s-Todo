import RemoveBtn from "../removeBtn/page";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

export default function TodoList() {
  return (
    <>
      <div className="p-4 my-2 flex justify-between gap-5 h-full w-full bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-none">
        <div>
          <h1 className="font-bold text-2xl text-white py-5">Activity Title</h1>
          <div className="p-4 bg-gray-400 text-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-none">
            Activity Description sdfsdfsdfsdfsdfsdfsdfds
          </div>
        </div>
        <div>
          <Link className="mr-4" href={"/removeTopic"}>
            <RemoveBtn />
          </Link>
          <Link href={"/editTopic"}>
            <button className="text-cyan-500">
              <HiPencilAlt size={24} />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
