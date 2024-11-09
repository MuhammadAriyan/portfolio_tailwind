import { GithubIcon, Instagram, LinkedinIcon, YoutubeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className=' flex flex-col h-screen items-center'>
      <h1 className=' font-sans font-bold text-left text-lg md:text-5xl lg:text-6xl xl:text-7xl m-3 sm:text-4xl tracking-wide drop-shadow-xl mb-10'>CONNECT WITH ME</h1>
      <div className='  h-3/4 w-4/5  shadow-lg flex justify-center rounded-lg border-4 border-black '>
      <div className=' drop-shadow-lg leading-snug m-5 font-semibold h-full w-11/12 flex items-center text-3xl md:text-5xl lg:text-6xl xl:text-7xl sm:text-4xl  tracking-wide'><h3>GET ALL OF MY SOCIAL LINKS</h3></div>
        <div className=' border-l-4 border-black'>
      <ul className=' text-lg text-black p-1 h-full flex flex-col justify-center  gap-10 rounded-md bg-white'>
        <li className=''><Link href={'https://github.com/MuhammadAriyan/'} target='_blank' className=' flex stroke-current hover:scale-110'><GithubIcon className='m-3'/></Link></li>
        <li className=''><Link href={'https://www.youtube.com/@Aryannn_%C3%B1._.6'} target='_blank' className=' flex stroke-current hover:scale-110'><YoutubeIcon className='m-3'/></Link></li>
        <li className=''><Link href={'https://www.linkedin.com/in/muhammad-aryan'} target='_blank' className=' flex stroke-current hover:scale-110'><LinkedinIcon className='m-3'/></Link></li>
        <li className=''><Link href={'https://www.instagram.com/maryanrar/'} target='_blank' className=' flex stroke-current hover:scale-110'><Instagram className='m-3'/></Link></li>
      </ul>
      </div>
      </div>
      
    </div>
  )
}

export default page