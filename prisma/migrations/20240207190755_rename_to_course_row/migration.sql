/*
  Warnings:

  - You are about to drop the `Course` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Course";

-- CreateTable
CREATE TABLE "CourseRow" (
    "id" SERIAL NOT NULL,
    "startDate" TIMESTAMP(6) NOT NULL,
    "program" VARCHAR(255) NOT NULL,

    CONSTRAINT "CourseRow_pkey" PRIMARY KEY ("id")
);
