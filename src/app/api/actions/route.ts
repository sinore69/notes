import { NextResponse,NextRequest } from "next/server";
import { prisma } from "@/lib/db";

//get all posts
export  async function GET(request:NextRequest) {
    const task= await prisma.post.findMany();
 return  NextResponse.json(task.map((item)=>item));
 }


 //add task to database
 export async function POST(request:NextRequest) {
    const {post}=await request.json();
    await prisma.post.create({data:{
        post:post,
    }}).then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    });
    return  NextResponse.json({status:200});
}

//edit task
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



