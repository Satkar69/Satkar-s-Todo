"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTaskForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title: newTitle, description: newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update the task");
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="p-4 my-2 border bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-none">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <h1 className="my-1 text-white text-xl font-bold">Task Title</h1>
          <input
            onChange={(e) => setNewTitle(e.target.value)}
            value={newTitle}
            className="p-2 bg-gray-400 text-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-none"
            type="text"
            placeholder="Task title"
          />
          <h1 className="my-1 text-white text-xl font-bold">
            Task Description
          </h1>
          <input
            onChange={(e) => setNewDescription(e.target.value)}
            value={newDescription}
            className="p-2 bg-gray-400 text-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-none"
            type="text"
            placeholder="Task Description"
          />
          <button
            type="submit"
            className="mt-3 text-white font-semibold rounded-lg bg-green-500 py-3 px-6 border-none backdrop-filter backdrop-blur-sm bg-opacity-40 hover:bg-green-600"
          >
            Update Task
          </button>
        </form>
      </div>
    </>
  );
}
