import Link from 'next/link'
import React from 'react'

export default function page ()  {
  
  return (
    <div className='text-white h-screen bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 flex justify-center items-center overflow-hidden'>
      <div className=' text-center items-center'>
      <h1 className=' font-sans font-bold text-xl md:text-6xl lg:text-7xl xl:text-8xl m-3 sm:text-4xl tracking-wide drop-shadow-xl' >MUHAMMAD ARYAN</h1>
      <h3 className=' animate-pulse transition-all  opacity-65 font-mono font-bold text-center'>CODE , DESIGN & SLEEP</h3>
      <h3 className=' p-1 text-xs font-mono text-slate-900 bg-white transform transition-transform hover:scale-125 rounded-md inline-block m-3 pr-3 pl-3 md:text-lg '><Link href={'/about'}>ABOUT ME</Link></h3>
      <h3 className=' p-1 text-xs font-mono text-slate-900 bg-white transform transition-transform hover:scale-125 rounded-md inline-block m-1 pr-3 pl-3 md:text-lg '><Link href={'/contact'}> CONNECT WITH ME</Link> </h3>
      </div>
    </div>
  )
}
