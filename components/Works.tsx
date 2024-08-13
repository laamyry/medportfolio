"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Social media DADIJ",
    image: "/images/project2.jpg",
    link: "https://www.behance.net/gallery/204300007/Social-media-DADIJ",
  },
  {
    id: 2,
    title: "Honey Jar label design",
    image: "/images/project3.jpg",
    link: "https://www.behance.net/gallery/204979129/Honey-Jar-label-design",
  },
  {
    id: 3,
    title: "Social media MARVIDA",
    image: "/images/project1.jpg",
    link: "https://www.behance.net/gallery/204461085/Social-media-MARVIDA",
  },
  {
    id: 4,
    title: "Social media MARVIDA",
    image: "/images/project1.jpg",
    link: "https://www.behance.net/gallery/204461085/Social-media-MARVIDA",
  },
  {
    id: 5,
    title: "Social media MARVIDA",
    image: "/images/project1.jpg",
    link: "https://www.behance.net/gallery/204461085/Social-media-MARVIDA",
  },
  {
    id: 6,
    title: "Social media MARVIDA",
    image: "/images/project1.jpg",
    link: "https://www.behance.net/gallery/204461085/Social-media-MARVIDA",
  },
  {
    id: 7,
    title: "Social media MARVIDA",
    image: "/images/project1.jpg",
    link: "https://www.behance.net/gallery/204461085/Social-media-MARVIDA",
  },
  {
    id: 8,
    title: "Social media MARVIDA",
    image: "/images/project1.jpg",
    link: "https://www.behance.net/gallery/204461085/Social-media-MARVIDA",
  },
  {
    id: 9,
    title: "Social media MARVIDA",
    image: "/images/project1.jpg",
    link: "https://www.behance.net/gallery/204461085/Social-media-MARVIDA",
  },
  {
    id: 10,
    title: "Social media MARVIDA",
    image: "/images/project1.jpg",
    link: "https://www.behance.net/gallery/204461085/Social-media-MARVIDA",
  },
  {
    id: 11,
    title: "Social media MARVIDA",
    image: "/images/project1.jpg",
    link: "https://www.behance.net/gallery/204461085/Social-media-MARVIDA",
  },
  {
    id: 12,
    title: "Social media MARVIDA",
    image: "/images/project1.jpg",
    link: "https://www.behance.net/gallery/204461085/Social-media-MARVIDA",
  },
  // Add more projects as needed
];

export default function Works() {
  const [visibleProjects, setVisibleProjects] = useState(6); // Display the first 6 projects (2 rows with 3 columns each)

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 6); // Load 6 more projects on each click
  };

  const collapseProjects = () => {
    setVisibleProjects(6); // Reset to show only the first 6 projects
  };

  return (
    <section id="works" className="bg-gray-100 pt-24">
      <div className="container mx-auto text-center px-5">
        <h2 className="text-4xl font-bold text-black relative flex justify-center">
          <span className="z-30 uppercase">My Work</span>
          <div className="mt-6 absolute bottom-20 opacity-10 h-3">
            <Image src="/images/dots.svg" alt="Decorative dots pattern" width={300} height={200} className="text-red-500" />
          </div>
        </h2>

        <div className="grid grid-cols-3 gap-6 mt-20">
          {projects.slice(0, visibleProjects).map((project) => (
            <Link key={project.id} href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="relative group">
                <Image src={project.image} alt={`Preview of ${project.title}`} width={300} height={300} className="w-full h-full object-cover transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center text-center bg-primary  bg-opacity-0 group-hover:bg-opacity-30 group-hover:backdrop-blur-sm transition-all duration-1000">
                  <span className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.title}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {visibleProjects < projects.length ? (
          <button className="rounded-full my-10 px-8 py-4 bg-primary text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition ease-in-out duration-500" onClick={loadMoreProjects}>
            Load More
          </button>
        ) : (
          <button className="rounded-full my-10 px-8 py-4 bg-primary text-white font-semibold hover:bg-gray-900 hover:text-white transition ease-in-out duration-500" onClick={collapseProjects}>
            Collapse
          </button>
        )}
      </div>
    </section>
  );
}
