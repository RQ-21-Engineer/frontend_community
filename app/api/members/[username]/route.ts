import { members, slugify } from "@/data/members";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(
  request: NextRequest,
  context: { params: { username: string } }
) {
  const member = members.find(
    (m) => slugify(m.name) === context.params.username
  );

  if (!member) {
    return new NextResponse("Member not found", { status: 404 });
  }

  return NextResponse.json(member);
}
