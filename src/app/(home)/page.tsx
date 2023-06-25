'use client'
import { useState } from "react"
import axios from "axios"
import {useQuery} from '@tanstack/react-query'

interface task{
  post:string
}

export  default  function Home() {

  async function del(id:any,post:any) {
     await axios({
      method: 'post',
      url: '/api/delete',
      data: {id,post}
     }).then(res=>{console.log(res)})
     .catch(err=>{console.log(err)});
    }

  const {data,}=useQuery({
    queryKey: ['get'],
    queryFn: async ()=>{
      const {data}=await axios.get('/api/get')
      return data
    } ,
  })

  async function post(e:any){
    e.preventDefault( );
    await axios({
      method: 'post',
      url: '/api/post',
      data: task
    }
    ).then(res=>{console.log(res)})
    .catch(err=>{console.log(err)});
    
  }
  const[task,settask]=useState<task>({post:''})

  return (
  <div className="flex flex-row">
    <div className="ml-10 mt-10 ">
      <form>
        <input type="text" placeholder="Task" className="p-2 rounded" value={task.post} onChange={(e)=>settask({post:e.target.value})}/>
      </form>
      <button type="submit" className="bg-blue-500 text-white p-1 rounded mt-10" onClick={post}>Add</button>
    </div>
    <div className="ml-2  0 mt-10 p-1">
      {data?.map((item:any)=>
      <div className="flex flex-row justify-between" key={item.id}>
      <li className="text-2xl font-bold">{item.post}</li>
      <button type="submit" className="p-1 ml-10 " onClick={()=>del(item.id,item.post,)}  >delete</button>
      </div>
      )}
      
    </div>
  </div>
  )
}
