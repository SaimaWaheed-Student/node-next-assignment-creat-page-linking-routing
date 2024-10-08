import Link from 'next/link'
import React from 'react'

export default function Home ()  {
  return (
    <div>
      <ul className='flex gap-3 mr-4 cursor-pointer'>
      <Link className='hover:text-blue-700 flex gap-2'href='/'>HOME</Link>
      <Link className='hover:text-blue-700'href='/about'><a>ABOUT</a></Link>
      <Link className='hover:text-blue-700'href='/app/'>SERVICE</Link>
      <Link className='hover:text-blue-700'href='/'>CONTECT US</Link>
</ul>
      
    </div>
  )
}




