import { prismaClient } from "@/infrastructure";

export const dynamic = "force-dynamic";

export async function POST(req: Request, res: Response) {
  try {
    const { id } = await prismaClient.courseRow.create({
      data: {
        program: "jsfs",
        startDate: new Date("2024-05-01"),
      },
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
}
