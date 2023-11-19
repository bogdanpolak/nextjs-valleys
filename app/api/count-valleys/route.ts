import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const path = req.nextUrl.searchParams.get('path') as string;

  let level = 0;
  let valleys = 0;
  for (let step of path)
  {
      if (step == 'D' && level == 0)
      {
          valleys++;
      }

      level += step == 'U' ? 1 : -1;
  }
  await new Promise(r => setTimeout(r, 400));
  if (level !== 0)
    return NextResponse.json({ error: `Invalid path. Should finish at level 0, but finished at ${level}` }, { status: 400 });
  return NextResponse.json({ path: path, valleys: valleys });
}
  