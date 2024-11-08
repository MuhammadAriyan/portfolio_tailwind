import React from 'react'

const page = () => {
  return (
    <div className=' h-screen bg-black'>
      <h1 className=' text-white font-sans font-bold text-xl md:text-5xl lg:text-6xl xl:text-7xl m-3 sm:text-3xl tracking-wide drop-shadow-xl mb-5'>ABOUT ME</h1>
      <div className="  m-2 text-white tracking-wide">
        <p className=' rounded-md hover:shadow-white/10 bg-white/10 hover:shadow-md p-2 m-2 drop-shadow-lg text-base font-bold font-mono sm:text-lg lg:text-xl'>Hey there! I’m
          <span className=' text-green-500 '> Muhammmad Aryan</span>
          , a 16-year-old developer and UI/UX enthusiast from Pakistan with a deep love for coding and design. I’m currently shaping my skills in front-end development, with a focus on turning creative ideas into smooth, user-friendly web experiences.
          <br /><br />
          I’m passionate about UI/UX design and bringing a bit of an anime vibe into my creations, inspired by one of my favorite films, Your Name. I also enjoy experimenting with new tech, and I’m all about deploying projects and sharing them online, with <span className=' font-bold text-green-500'>Vercel</span> as my go-to platform.
          <br /><br />
          Besides coding, I’m into exploring the concept of building worlds through visuals and interactions, aiming to create a bit of magic in every project I take on. You could say I live by “Code, Design, and Dream” (…with some sleep in between!).
          <br /><br />
          If you’re looking for someone who blends technical skill with an eye for design, let’s connect and create something unique together!</p>
      </div>
    </div>
  )
}

export default page