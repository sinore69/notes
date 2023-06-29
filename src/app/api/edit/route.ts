import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
export async function PUT(request:NextRequest){
        const {searchParams}=new URL(request.url)
        const id=searchParams.get('id') 
        const task=searchParams.get('task') 
        if(id!==null && task !==null){
    await prisma.post.update({
        where:{
            id:parseInt(id)
        },
        data:{
            post:task
        }
    })
}else{
    return NextResponse.json({status:'error'})

}
return NextResponse.json({status:200})
}