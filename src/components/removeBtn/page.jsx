"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  async function removeTask() {
    const confirmed = confirm("are you sure you want to delete the task?");
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  }
  return (
    <>
      <button
        onClick={removeTask}
        className="text-red-700 hover:bg-red-300 hover:text-red-800"
      >
        <HiOutlineTrash size={24} />
      </button>
    </>
  );
}
