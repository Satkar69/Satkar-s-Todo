import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const data = await request.json();
    const { title, description } = data;
    await prisma.activities.create({
      data: {
        title,
        description,
      },
    });
    return NextResponse.json(
      {
        message: "Task Created",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Failed to create task", error);
    return NextResponse.json({
      message: "Failed to create task",
      error,
    });
  }
}

export async function GET() {
  try {
    const tasks = await prisma.activities.findMany();
    return NextResponse.json({
      message: "Tasks fetched successfully",
      tasks,
    });
  } catch (error) {
    console.error("Failed to fetch tasks", error);
    return NextResponse.json({
      message: "Failed to fetch tasks",
      error,
    });
  }
}
