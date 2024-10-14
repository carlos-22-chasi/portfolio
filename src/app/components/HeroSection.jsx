"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* left side of hero sectoin */}
        <motion.div initial={{ opacity: 0, scale:0.5 }} animate={{ opacity:1, scale:1 }}  transition={{ duration:1 }} className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-900">
              Hello, I&#39;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Carlos',
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                'Curious',
                2000,
              ]}
              wrapper="span"
              speed={50}
              // style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
            dummy text
          </p>
          <div>
            <button className='px-1 py-1 rounded-full w-full sm:w-fit  bg-gradient-to-br from-primary-300 via-primary-500 to-primary-700 hover:bg-slate-800 text-white mt-3'>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
              View Resume
              </span>
            </button>
          </div>
        </motion.div>
        {/* right side of hero section */}
        <div className="col-span-5 place-self-center mt-4 lg:mg-0">
          <motion.div 
          initial={{ opacity: 0, scale:0.5 }} 
          animate={{ opacity:1, scale:1 }}  
          transition={{ duration:1 }} 
          className="rounded-full bg-[#181818] w-[250px] h-[250px] relative"
          >
            <Image
              src="/images/hero_pic.png"
              alt='hero image'
              className='rounded-full object-cover absolute top-0 left-0 w-full h-full'
              style={{ objectPosition: '60% center'  }}
              width={300}
              height={300}
              />
          </motion.div>
        </div>
      </div>
    </section>  
  )
}

export default HeroSection