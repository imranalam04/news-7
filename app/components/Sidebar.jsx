import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col items-center px-3 py-2 gap-5 mt-5  text-white '>
    <Link className='' href="/">Today</Link>
    <Link className='' href="/">Crime</Link>
    <Link className='' href="/">Entertainment</Link>
    <Link className='' href="/">Sports</Link>
    <Link className='' href="/">Adventure</Link>
    <Link className='' href="/">Nature</Link>
    <Link className='' href="/">Politics</Link>
    <Link className='' href="/">Other</Link>

    </div>
  )
}

export default Sidebar