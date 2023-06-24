import React from 'react'
import Sidebar from './components/Sidebar'
import NewsCard from './components/NewsCard'

const page = async() => {
  let callingNews = await fetch("http://127.0.0.1:3000/api/post",{cache:"no-store"});
  callingNews = await callingNews.json();
  return (
    <div className='flex'>
    <div className='w-2/12 bg-indigo-600 h-[93vh] mt-3 mx-2 rounded-md'>
    <Sidebar />
    </div>
    <div className='w-10/12'>
    {callingNews.data.map((value,key) => (<NewsCard value={value} key={key} read={true}/>))}
    </div>
    </div>
  )
}

export default page