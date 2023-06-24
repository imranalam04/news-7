"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const NewsCard = ({value,read}) => {

  const router = useRouter()

const handleDelete = async(id) =>{
  let data = await fetch(`/api/post/${id}`,{
    method: "DELETE",
    headers : {
      "Content-Type":"application/json"
    }
  })
  data = await data.json()
  alert(data.msg)
  router.push("/")
}

  return (
    <div className='flex flex-1 flex-col px-5 py-4 rounded bg-indigo-300 mx-3 mt-4'>
    <h1 className='font-bold'>{value.title}</h1>
    <br/> 
    <p>Author: {value.author} | Date : {value.createdAt}</p>
    <br/>
    <p className='font-serif'>{value.content}</p>
    <div className='flex justify-end'>
   {read &&<Link href={`/view/${value._id}`} className='bg-teal-600 text-white px-3 py-2 rounded'>Read More</Link>}
   {!read && <button onClick={() => handleDelete(value._id)} className='bg-red-500 text-white hover:bg-red-800 px-3 py-2 rounded'>Delete</button>} 
   {!read &&<Link href={`/update/${value._id}`} className='bg-teal-600 text-white px-3 py-2 rounded mx-4'>Edit</Link>}

   </div>
    </div>
  )
}

export default NewsCard

