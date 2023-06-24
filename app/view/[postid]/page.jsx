import React from 'react'
import NewsCard from '@/app/components/NewsCard'
import Sidebar from '@/app/components/Sidebar';

const page = async({params}) => {
    let {postid} = params;
    let data = await fetch(`http://127.0.0.1:3000/api/post/${postid}`)
    data = await data.json()
  return (
    <div className='flex p-5  gap-5 '>
    <div className='w-2/12 bg-cyan-800 rounded-md h-[93vh]'>
    <Sidebar />
    </div>
    <div className='w-10/12'>
    <NewsCard value={data.data}/>
    </div>
    </div>
  )
}

export default page