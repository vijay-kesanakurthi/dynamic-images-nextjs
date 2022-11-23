import { NextRequest, NextResponse } from "next/server";

export const handle = (req: NextRequest) => {
  return NextResponse.json({
    name: `Hello, from ${req.url} I'm now an Edge Function!`,
  });
};
