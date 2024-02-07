-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "startDate" TIMESTAMP(6) NOT NULL,
    "program" VARCHAR(255) NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);
