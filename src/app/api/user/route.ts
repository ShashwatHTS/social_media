import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function GET() {
  return Response.json({
    username: "shashwat",
  });
}
export async function POST(req: NextRequest) {
  const body = await req.json();
  const user = await client.user.create({ data: body });
  console.log("---------body----------", body);
  return Response.json({
    data: user,
    message: "user successfully registered",
  });
}
