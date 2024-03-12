import client from "../../../../db";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
  return Response.json({
    username: "shashwat",
  });
}
