import { PrismaClient } from "@prisma/client";
import { prismaClient } from "@/infrastructure";

type Db = Pick<PrismaClient, "courseRow">;

type Course = { program: string; startDate: Date };

export const coursesKitFactory = (db: Db) => {
  return {
    service: {
      async createCourse(course: Course) {
        try {
          const { id } = await db.courseRow.create({
            data: course,
          });

          return Response.json({ ok: true, data: { id } });
        } catch (error) {
          console.error(error);

          return Response.json({
            ok: false,
            error: {
              code: 500,
              message: "Thoughts and prayers.",
            },
          });
        }
      },
      async getAllCourses(): Promise<Course[]> {
        return db.courseRow.findMany();
      },
    },
  };
};

export const coursesKit = coursesKitFactory(prismaClient);
