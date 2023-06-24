import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex bg-purple-600 py-3 px-5 justify-between text-white'>
    <h1>News7.com</h1>
    <div className='flex gap-4'>
    <Link href="/" >Home</Link>
    <Link href="/insert" className=''>Insert Post</Link>
    <Link href="/register" >Register</Link>
    <Link href="/login" >Login</Link>
    </div>
    </div>
  )
}

export default Header