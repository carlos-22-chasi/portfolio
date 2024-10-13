"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "Project 1 description",
    image: "/images/OIP.jpg",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Project 2 description",
    image: "/images/OIP.jpg",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Project 3 description",
    image: "/images/OIP.jpg", 
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Project 4 description",
    image: "/images/OIP.jpg",
    tag: ["All", "School"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Project 5 description",
    image: "/images/OIP.jpg",
    tag: ["All", "School"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Project 6",
    description: "Project 6 description",
    image: "/images/OIP.jpg",
    tag: ["All", "School"],
    gitUrl: "/",
    previewUrl: "/",
  },
];
const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  
  return (
    <>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-6'>My Projects</h2>
      <div className='text-white flex flex-row justify-center items-center gap-5 py-6'>
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag==="All"}/>
        <ProjectTag onClick={handleTagChange} name="Personal" isSelected={tag==="Personal"}/>
        <ProjectTag onClick={handleTagChange} name="School" isSelected={tag==="School"}/>
      </div>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project) => (
        <ProjectCard 
          key={project.id} 
          title={project.title} 
          description={project.description} 
          imageURL={project.image}
          gitUrl={project.gitUrl}
          previewURL={project.previewUrl}
        />
      ))}
      </div>
    </>
  )
}

export default ProjectSection