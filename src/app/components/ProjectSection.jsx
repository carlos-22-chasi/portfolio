"use client"
import React, { useRef, useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion"

const projectsData = [
  {
    id: 1,
    title: "Drone Delivery Simulation",
    description: `A real-time simulation of a drone delivery service where users can schedule deliveries and watch a 3D 
    visualization of the drone transporting the package.`,
    tools: "C++, CSS",
    image: "/images/drone.png",
    tag: ["All", "School"],
    gitUrl: "https://hub.docker.com/r/carloscm22/drone_sim_project4",
    previewUrl: "/NotAvailable",
  },
  {
    id: 2,
    title: "Sorting-Algorithm Visualizer",
    description: `This project is a React-based visualizer for various sorting algorithms. It helps in 
      understanding how different sorting algorithms work by displaying animations of the sorting process in real-time.r`,
    tools: "React, CSS",
    image: "/images/sorting-alg.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/carlos-22-chasi/Sorting-Algorithm-Visualizer/tree/main",
    previewUrl: "/NotAvaialble",
  },
  {
    id: 3,
    title: "Spotify-Playlist-Recommender",
    description: `A web app with a Flask backend and React frontend that creates and manages Spotify playlists. 
    It uses Spotify, OpenAI, and YouTube APIs to suggest playlists, add song descriptions, and link YouTube videos.`,
    tools: "Flask, JS, Python",
    image: "/images/spotify.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/carlos-22-chasi/Spotify-Playlist-Recommender",
    previewUrl: "/NotAvailable",
  },
  {
    id: 4,
    title: "A World of Drawings",
    description: `Graphics application that allows users to draw in a virtual 3D environment. Key features 
    include drawing strokes in the sky, creating ground-anchored billboards, modifying terrain to form hills 
    and valleys, and a camera system that adjusts to ground elevation. The project focused on 3D mesh editing 
    and user input handling.`,
    tools: "TypeScript",
    image: "/images/drawings.png",
    tag: ["All", "School"],
    gitUrl: "https://github.com/CSCI-4611-Spring-2024/Assignments/blob/main/Assignment-6/README.md",
    previewUrl: "https://csci-4611-spring-2024.github.io/assignment-6-carlos-22-chasi/",
  },
  {
    id: 5,
    title: "Pacman Game",
    description: `Simplified version of the game Pacman`,
    tools: "JS, CSS, HTML",
    image: "/images/pacman.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/carlos-22-chasi/pacman-game",
    previewUrl: "https://pacman-game-one.vercel.app/",
  },
  {
    id: 6,
    title: "Earthquake Visualization",
    description: `A visualization application showcasing global earthquake data (1905–2007) on a 3D textured 
    globe with transitions to a 2D map view, featuring animated markers that vary by magnitude.`,
    tools: "TypeScript",
    image: "/images/globe.png",
    tag: ["All", "School"],
    gitUrl: "https://github.com/CSCI-4611-Spring-2024/Assignments/blob/main/Assignment-3/README.md",
    previewUrl: "https://csci-4611-spring-2024.github.io/assignment-3-carlos-22-chasi",
  },
  {
    id: 7,
    title: "Trip Mates",
    description: `Full-Stack Travel Itinerary Planner that uses Google Gemini AI to provide a itnirary`,
    tools: "React, Firebase, TailwindCSS",
    image: "/images/tripmates.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/carlos-22-chasi/TripMates",
    previewUrl: "https://trip-mates.vercel.app/",
  },
];
const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  }

  return (
    <section id='projects'>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-6'>My Projects</h2>
      {/* Project Tags */}
      <div className='text-white flex flex-row justify-center items-center gap-5 py-6'>
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Personal" isSelected={tag === "Personal"} />
        <ProjectTag onClick={handleTagChange} name="School" isSelected={tag === "School"} />
      </div>
      {/* Project Cards */}
      <ul ref={ref} className="grid sm:grid-cols-2 md:grid-cols-3 gap-28 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            className="h-96 md:h-full"
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tools={project.tools}
              imageURL={project.image}
              gitUrl={project.gitUrl}
              previewURL={project.previewUrl}
            />
    </motion.li>
  ))}
</ul>

    </section>
  )
}

export default ProjectSection