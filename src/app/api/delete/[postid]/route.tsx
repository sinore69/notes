import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request:NextRequest,{params}:any) {
  const {postid}=params;
  await prisma.post.deleteMany({
    where:{
    post: postid
    }
}).then(res=>console.log(res))
return NextResponse.json({status:200})
    
  }