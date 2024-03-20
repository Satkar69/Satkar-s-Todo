-- CreateTable
CREATE TABLE "Activities" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT,
    "description" VARCHAR,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Activities_pkey" PRIMARY KEY ("id")
);
