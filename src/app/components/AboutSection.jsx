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
        <li>Java</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>HTML/CSS</li>
        <li>SQL</li>
        <li>C</li>
        <li>C++</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-none pl-2 text-left text-red-800'>
        <p className='text-white text-2xl font-bold'>University of Minnesota - Twin Cities (Graduated 2024)</p>
        <p className='mt-4 text-white text-2xl font-bold'>2021-2024 CS Courses by Year</p>
        <li className='mt-1'>
          Fall 2021
          <ul className="list-disc pl-6">
            <li className="text-class-500">Intro to Programming Concepts</li>
          </ul>
        </li>

        <li className='mt-4'>
          Spring 2022
          <ul className="list-disc pl-6">
            <li className="text-class-500">Intro Algs &amp; Data Str.</li>
          </ul>
        </li>

        <li className='mt-4'>
          Fall 2022
          <ul className="list-disc pl-6">
            <li className="text-class-500">Discrete Structures</li>
            <li className="text-class-500">Machine Architecture and Organization</li>
            <li className="text-class-500">Elementary Computational Linear Algebra</li>
            <li className="text-class-500">Intro to Prob &amp; Stat</li>
          </ul>
        </li>

        <li className='mt-4'>
          Spring 2023
          <ul className="list-disc pl-6">
            <li className="text-class-500">Advanced Programming Principles</li>
            <li className="text-class-500">Algorithms and Data Structures</li>
          </ul>
        </li>

        <li className='mt-4'>
          Fall 2023
          <ul className="list-disc pl-6">
            <li className="text-class-500">Program Design &amp; Development</li>
            <li className="text-class-500">Formal Languages and Automata</li>
            <li className="text-class-500">Intro to Operating Systems</li>
            <li className="text-class-500">Practice of Database Systems</li>
            <li className="text-class-500">Software Engineering I</li>
          </ul>
        </li>

        <li className='mt-4'>
          Spring 2024
          <ul className="list-disc pl-6">
            <li className="text-class-500">Internet Programming</li>
            <li className="text-class-500">Intro to Computer Networks</li>
            <li className="text-class-500">Intro: Artificial Intelligence</li>
            <li className="text-class-500">Programming Graphics and Games</li>
          </ul>
        </li>
      </ul>
    )
  }, 
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className='list-disc pl-2 text-left'>
        <li><span>2020-2021</span><br/>Cashier at Hy-Vee</li>
        <li className='mt-4'><span>2021-2024</span><br/>Guest Service Advoate at Target</li>
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
      <div className='grid md:grid-cols-2 gap-8 text-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        {/* left side of about me */}
        <div>
          <Image src='/images/anime.png' alt='umn mascot' width={400} height={400} />
          {/* Conditionally render the second image directly under the first image */}
          {tab === "education" && (
            <Image src='/images/graduation_pic.jpg' alt='graduation photo' width={400} height={400} className='md:mt-40 mt-2' />
          )}
        </div>
        {/* right side of about me*/}
        <div className='mt-4 md:mt-0  flex flex-col h-full text-center sm:text-left'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base md:text-lg font-serif text-primary-600'>
          Hi, I'm Carlos Chasi-Mejia! I'm an enthusiastic software developer with a solid foundation in computer science 
          and web development. I recently graduated from the University of Minnesota - Twin Cities with a degree in 
          Computer Science, where I gained hands-on experience in programming. During my studies, I developed a strong 
          interest in problem-solving and software engineering, and I enjoy working on projects that allow me to apply these 
          skills in innovative ways. When I'm not coding, you can find me exploring new technologies, playing video games,
           or enjoying outdoor activities. I'm always eager to learn, grow, and take on new challenges in the tech world!
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