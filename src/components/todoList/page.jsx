import RemoveBtn from "../removeBtn/page";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

async function getTasks() {
  try {
    const res = await fetch("http://localhost:3000/api/tasks", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch tasks");
    }
    return res.json();
  } catch (error) {
    console.error("error loading topics", error);
  }
}

export default async function TodoList() {
  const { tasks } = await getTasks();
  return (
    <>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="p-4 my-2 flex justify-between items-start gap-5 h-full w-full bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-none"
        >
          <div>
            <h1 className="font-bold text-2xl text-white py-5">{task.title}</h1>
            <div className="p-4 bg-gray-400 text-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-none">
              {task.description}
            </div>
          </div>
          <div className="flex gap-4">
            <RemoveBtn id={task.id} />
            <Link href={`/editTask/${task.id}`}>
              <HiPencilAlt
                className="text-cyan-500 hover:bg-cyan-400 hover:text-cyan-700"
                size={24}
              />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
