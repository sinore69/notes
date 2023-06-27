import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request:NextRequest,{params}:any) {
  const {id}=params;
  await prisma.post.deleteMany({
    where:{
    id: parseInt(id)
    }
}).then(res=>console.log(res))
return NextResponse.json({status:200})
    
  }