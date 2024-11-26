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
          <h1 className='text-white mb-1 text-4xl sm:text-5xl lg:text-6xl '>
            <div className="inline-block h-[200px] ">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Hello, I'm Carlos Chasi-Mejia 👨🏻",
                  2000, // wait 1s before replacing "Mice" with "Hamsters"
                  "I'm an aspiring Software Engineer 💻",
                  2000,
                  "I'm passionate about coding and solving real-world problems 💡",
                  2000, 
                  "Looking to grow as a software engineer and make a difference 🌍", 
                  2000,
                  "Looking for exciting software engineering opportunities 🌟",
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </h1>
          <p className='text-[#80FFFF] text-base  sm:text-lg lg:text-xl mb-6 mx-2 sm:mx-0'>
            Graduated from the University of Minessota - Twin Cities with a B.S. in Computer Science. 
          </p>
          <div className="flex justify-center sm:justify-start">
            <a 
              className='block bg-primary-500 rounded-full px-2 py-2 w-fit'
              href='/resume.pdf'
              target="_blank" /* Opens resume in a new tab */
              rel="noopener noreferrer"  /* improves security by preventing the new tab from having access to the original page */
            >
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
              View Resume
              </span>
            </a>
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