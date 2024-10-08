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
    title: "Travis Rice : Attorney at law logo",
    image: "/images/project5.jpg",
    link: "https://www.behance.net/gallery/101104229/Travis-Rice-Attorney-at-law-logo",
  },
  {
    id: 5,
    title: "Al-matai for external recrutement services",
    image: "/images/project4.jpg",
    link: "https://www.behance.net/gallery/87167825/AL-Matai-FOR-EXTERNAL-RECRUTEMENT-SERVICES",
  },
  {
    id: 6,
    title: "Acadewix logo",
    image: "/images/project6.jpg",
    link: "https://www.behance.net/gallery/101104487/acadewix-logo",
  },
  // Add more projects as needed
];

export default function Works() {
  const [visibleProjects, setVisibleProjects] = useState(3); // Display the first 3 projects

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3); // Load 3 more projects on each click
  };

  const collapseProjects = () => {
    setVisibleProjects(3); // Reset to show only the first 3 projects
  };

  return (
    <section id="works" className="bg-gray-100 pt-24 sm:mt-96  sm:w-screen sm:h-screen flex sm:flex sm:flex-col sm:justify-center">
      <div className=" mx-auto text-center px-5 3xl:w-[80%]  sm:w-96">
        <h2 className="text-4xl font-bold text-black relative flex justify-center ">
          <span className="z-30 uppercase sm:w-96">My Work</span>
          <div className="mt-6 absolute bottom-20 opacity-10 h-3">
            <Image src="/images/dots.svg" alt="Decorative dots pattern" width={300} height={200} className="text-red-500" />
          </div>
        </h2>

        <div className="flex flex-wrap justify-center gap-10 mt-28 ">
          {projects.slice(0, visibleProjects).map((project) => (
            <Link key={project.id} href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="relative group flex-shrink-0" style={{ flexBasis: "calc(33.333% - 1.5rem)" }}>
                <Image src={project.image} alt={`Preview of ${project.title}`} width={300} height={200} className="w-full h-auto object-cover transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center text-center bg-primary bg-opacity-0 group-hover:bg-opacity-30 group-hover:backdrop-blur-sm transition-all duration-1000">
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
