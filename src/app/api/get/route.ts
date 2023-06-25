import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db";
export  async function GET(request:NextRequest) {
   const task= await prisma.post.findMany();
return  NextResponse.json(task.map((item)=>item));
}