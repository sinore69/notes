import { NextRequest,NextResponse } from "next/server";
import { prisma } from "@/lib/db";
export async function POST(request:NextRequest) {
    const {post}=await request.json();
    await prisma.post.create({data:{
        post:post,
    }}).then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    });
    return  NextResponse.json('success');
}
