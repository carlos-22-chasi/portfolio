import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const ProjectCard = ({imageURL, title, description, tools, gitUrl, previewURL}) => {
  return (
    <div className='h-full flex flex-col border-white border-8 hover:scale-105 transition-all'>
      {/* Top Half */}
      <div 
        className='h-1/2 md:h-72 rounded-t-xl relative group'
        style={{background: `url(${imageURL})`, backgroundSize: '100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
      >
        <div className='overlay hidden items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
          <Link href={gitUrl} className='h-14 w-14 mr-10 border-2 relative rounded-full border-[#ADB7BE] hover:border-white'>
            <CodeBracketIcon className="h-10 w-15 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white"/>
          </Link>
          <Link href={previewURL} className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white'>
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white"/>
          </Link>
        </div>
      </div>
      {/* Bottom Half */}
      <div className='h-1/2  flex flex-col justify-between text-white mt-3 rounded-b-xl bg-[#181818] py-6 px-4'>
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#386789]'>{description}</p>
        <p className='text-gray-500'>Tools: {tools}</p>
      </div>

    </div>
  )
}

export default ProjectCard