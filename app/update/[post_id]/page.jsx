import UpdateForm from '@/app/components/UpdateForm'
import React from 'react'

const Page = async({params}) => {
let {post_id} = params;
let callingDataForUpdate = await fetch(`http://127.0.0.1:3000/api/post/${post_id}`)
callingDataForUpdate = await callingDataForUpdate.json()

  return (
    <div className='flex justify-center h-[-96vh]'>
    <div className='w-5/12'>
    <UpdateForm value={callingDataForUpdate.data}/>    
    </div>
    </div>
  )
}

export default Page