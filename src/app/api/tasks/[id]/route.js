import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request, { params }) {
  try {
    const id = params.id;
    const task = await prisma.activities.findUnique({
      where: {
        id: id,
      },
    });
    if (task) {
      return NextResponse.json({
        message: "Task fetched",
        task,
      });
    } else {
      return NextResponse.json({
        message: "Task not found",
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "error",
      error,
    });
  }
}

export async function PUT(request, { params }) {
  try {
    const id = params.id;
    const task = await prisma.activities.findUnique({
      where: {
        id: id,
      },
    });

    if (task) {
      const data = await request.json();
      const { title, description } = data;
      await prisma.activities.update({
        where: {
          id: id,
        },
        data: {
          title,
          description,
        },
      });
      return NextResponse.json({
        message: "Task updated",
      });
    } else {
      return NextResponse.json({
        message: "Task not found",
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "error",
      error,
    });
  }
}

export async function DELETE(request, { params }) {
  const id = params.id;
  await prisma.activities.delete({
    where: {
      id: id,
    },
  });
  return NextResponse.json({
    message: "Task Deleted",
  });
}
