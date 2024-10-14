"use client"
import React, { useRef, useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion"

const projectsData = [
  {
    id: 1,
    title: "Drone Simulation",
    description: `This project is a real time simulation of a drone delivery service where the user can 
      schedule a package to be picked up by a drone and delivered at any point on a given map. Once the delivery has 
      been scheduled, the user can then watch a 3D visualization of the package being delivered by the drone.`,
    image: "/images/drone.png",
    tag: ["All", "School"],
    gitUrl: "https://hub.docker.com/r/carloscm22/drone_sim_project4",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Sorting-Algorithm Visualizer",
    description: `This project is a React-based visualizer for various sorting algorithms. It helps in 
      understanding how different sorting algorithms work by displaying animations of the sorting process in real-time.r`,
    image: "/images/sorting-alg.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/carlos-22-chasi/Sorting-Algorithm-Visualizer/tree/main",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Spotify-Playlist-Recommender",
    description: `This project consists of a Flask backend and a React frontend for creating and managing 
      Spotify playlists. This project integrates with the Spotify, OpenAI, and YouTube APIs to create a suggested 
      playlist based on the user's top 5 listened songs. It provides detailed descriptions from ChatGPT for each 
      song and includes a YouTube video associated with it. Follow the instructions below to set up and run the 
      application.`,
    image: "/images/spotify.png", 
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "A World of Drawings",
    description: `In this project, inspired by the classic children's book Harold and the Purple 
      Crayon, I implemented key features from the research paper Harold: A World Made of Drawings.
      The assignment involved creating a graphics application that allows users to draw in a virtual 
      3D environment, using strokes to manipulate the scene. I focused on developing functionalities 
      such as drawing strokes in the sky, creating billboards anchored to the ground, and modifying the 
      ground to form hills and valleys. Additionally, I implemented a camera system that adjusts its 
      height based on the ground elevation. This project provided hands-on experience in 3D mesh editing 
      and user input handling.`,
    image: "/images/drawings.png",
    tag: ["All", "School"],
    gitUrl: "/",
    previewUrl: "https://csci-4611-spring-2024.github.io/assignment-6-carlos-22-chasi/",
  },
  {
    id: 5,
    title: "Artistic Rendering",
    description: `In my Cartoon Shading project, I implemented GLSL shaders to create stylized 3D models 
      that embody a cartoon aesthetic. This involved developing a shader for flat cartoon shading, which 
      emphasized shadows and highlights, and integrating silhouette outlines to enhance the visual appeal 
      of the models. I also utilized normal mapping techniques to add surface details without increasing polygon 
      count, resulting in an engaging appearance. This project not only improved my technical skills in shader 
      programming`,
    image: "/images/art-rendering.png",
    tag: ["All", "School"],
    gitUrl: "/",
    previewUrl: "https://csci-4611-spring-2024.github.io/assignment-5-carlos-22-chasi/",
  },
  {
    id: 6,
    title: "Earthquake Visualization",
    description: `In this project, I developed a visualization application that displays global earthquake 
      data from NASA and the USGS on a 3D textured globe. The application allows users to smoothly transition 
      between a 2D map view and a 3D globe view, showcasing the locations of earthquakes that occurred between 
      1905 and 2007. My responsibilities included creating the mesh for both the flat map and the globe, applying 
      textures to enhance the visual representation, and implementing algorithms to calculate the appropriate positions 
      and normals for lighting effects. I also animated the earthquake markers, varying their size and color based on magnitude. 
      This project reinforced my skills in computer graphics, data visualization, and the use of geospatial data.`,
    image: "/images/globe.png",
    tag: ["All", "School"],
    gitUrl: "/",
    previewUrl: "https://csci-4611-spring-2024.github.io/assignment-3-carlos-22-chasi",
  },
];
const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once:true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y:50, opacity: 0 },
    animate: { y:0, opacity: 1 }
  }
  
  return (
    <section>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-6'>My Projects</h2>
      {/* Project Tags */}
      <div className='text-white flex flex-row justify-center items-center gap-5 py-6'>
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag==="All"}/>
        <ProjectTag onClick={handleTagChange} name="Personal" isSelected={tag==="Personal"}/>
        <ProjectTag onClick={handleTagChange} name="School" isSelected={tag==="School"}/>
      </div>
      {/* Project Cards */}
      <ul  ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => (
          <motion.li 
            key={index}
            variants={cardVariants} 
            initial="initial" 
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard 
              key={project.id} 
              title={project.title} 
              description={project.description} 
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