import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest,res:NextResponse) {
    const {id,post}=await request.json();
    await prisma.post.deleteMany({
        where:{
        post: post
        }
    }).then(res=>console.log(res))
    return NextResponse.json({status:200})
}
