"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  // what I understood: In the destructuring array of the useState the first index is variable whose behavoir can be controlled by second index a setter for the variable
  // We can provide an initial default value to the useState

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and discription are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      if (!res.ok) {
        throw new Error("Failed to create the task");
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
          {/* with the 'e' parameter we can get the data from the input field */}
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="p-2 bg-gray-400 text-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-none"
            type="text"
            placeholder="Task title"
          />
          <h1 className="my-1 text-white text-xl font-bold">
            Task Description
          </h1>
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="p-2 bg-gray-400 text-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-none"
            type="text"
            placeholder="Task Description"
          />
          <button
            type="submit"
            className="mt-3 text-white font-semibold rounded-lg bg-green-500 py-3 px-6 border-none backdrop-filter backdrop-blur-sm bg-opacity-40 hover:bg-green-600"
          >
            Add Task
          </button>
        </form>
      </div>
    </>
  );
}
