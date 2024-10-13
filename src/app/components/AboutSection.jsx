"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2 sm:text-left text-left'>
        <li>Python</li>
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2 text-left'>
        <li>UMN</li>
      </ul>
    )
  }, {
    title: "Experience",
    id: "experience",
    content: (
      <ul className='list-disc pl-2 text-left'>
        <li>Target</li>
      </ul>
    )
  }
]

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white' id='about'>
      <div className='grid md:grid-cols-2 gap-8 items-center text-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src='/images/image_page.png' alt='umn mascot' width={500} height={500}/>
        <div className='mt-4 md:mt-0  flex flex-col h-full text-center sm:text-left'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base md:text-lg'>
            f;lkjda;lfkjda;ldf this is dummy text for now 
          </p>
          <div className='flex flex-row just mt-8 justify-center sm:justify-start'>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
            <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>Experience</TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection