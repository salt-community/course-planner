export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  console.log(await req.json());

  return Response.json({});
}
