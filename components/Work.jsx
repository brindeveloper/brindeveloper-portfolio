"use client";

import Link from "next/link";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";

//components
import ProjectCard  from "@/components/ProjectCard";

const projectData = [
  {
    Image : "/work/1.png",
    category: "react js",
    name: "React website",
    description:
      "Fully functional landing page design, templates and components.",
    link: "/",
    github: "/",
  },
  {
    Image: "/work/2.png",
    category: "react js",
    name: "React website",
    description:
      "Fully functional landing page design, templates and components.",
    link: "/",
    github: "/",
  },
  {
    Image: "/work/3.png",
    category: "next js",
    name: "Nextjs website",
    description:
      "Fully functional landing page design, templates and components.",
    link: "/",
    github: "/",
  },
  {
    Image: "/work/4.png",
    category: "next js",
    name: "Landing pages",
    description:
      "Fully functional landing page design, templates and components.",
    link: "/",
    github: "/",
  },
  {
    Image: "/work/2.png",
    category: "full stack",
    name: "Landing Page",
    description:
      "Fully functional landing page design, templates and components.",
    link: "/",
    github: "/",
  },
  {
    Image: "/work/3.png",
    category: "full stack",
    name: "Full stack website",
    description:
      "Fully functional landing page design, templates and components.",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[350px] mx-auto xl:mx-0 px-10 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
          Some of the high quality page designs, templates and components 
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/*slider*/}
        <div className="xl:max-w-[900px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/*show the first 4 projects */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
