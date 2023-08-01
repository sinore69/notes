'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import axios from 'axios';

function page({params}:any) {
const router=useRouter();
  const [task,settask]=useState('')
  const {id}=params
async function edittask(id:any,task:string){
  console.log(id,task)
  await axios({
    method:'put',
    url:`http://localhost:3000/api/actions`,
    params:{
      id:id,
      task:task
    }
  }
  ).then(res=>{
    console.log(res)
  }).catch(err=>{
    console.log(err)})
router.push('/')
  }


  return (
    <div className='flex justify-center mt-10'>
        <input placeholder='Enter...' className='text-2xl' value={task} onChange={(e)=>settask(e.target.value)}></input>
        <div className='flex flex-col'>
          <button className='' onClick={()=>{edittask(id,task)}}>save</button>
          <button className='' onClick={()=>{router.push('/')}}>cancel</button>
        </div>
        <div>
        </div>
    </div>
  )
}

export default page