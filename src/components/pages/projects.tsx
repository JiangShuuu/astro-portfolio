import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "FullStack",
    title: "pdf ai chat",
    description: [
      "Next App Router (TS)",
      "DB Prisma + MySQL + tRPC",
      "UI TailwindCss + Shadcn/UI",
      "Payment Stripe",
      "Deploy Oracle + GithubAction + Docker",
    ],
    stack: [
      { name: "Next 14" },
      { name: "OpenAI" },
      { name: "Stripe" },
      { name: "tRPC" },
    ],
    image: "/assets/projects/pdf.png",
    live: "https://pdfaisaas.jiangshuuu.com/",
    github: "https://github.com/JiangShuuu/next-pdf-ai",
    createAt: "2023/11",
  },
  {
    num: "02",
    category: "Freelance",
    title: "DIJIE STORE CASE",
    description: [
      "Nuxt3 (TS)",
      "DB Prisma + MySQL",
      "UI TailwindCss + Nuxt/UI",
      "Payment 綠界ECPay",
      "Deploy Oracle + Vercel",
    ],
    stack: [{ name: "Nuxt3" }, { name: "綠界ECPay" }, { name: "Vercel" }],
    image: "/assets/projects/case-store.png",
    live: "",
    github: "",
    createAt: "2023/10",
  },
  {
    num: "03",
    category: "FullStack",
    title: "Socket Video Chat Room",
    description: [
      "React 18",
      "DB MongoDB",
      "UI Styled-component",
      "Socket.io Peer.js",
      "Deploy Oracle + GithubAction + Docker",
    ],
    stack: [{ name: "Socket.js" }, { name: "MongoDB" }, { name: "WebRTC" }],
    image: "/assets/projects/chat.png",
    live: "https://profile1.jiangshuuu.com/",
    github: "https://github.com/JiangShuuu/socket-chat",
    createAt: "2022/11",
  },
  {
    num: "04",
    category: "FullStack",
    title: "E-commerce",
    description: [
      "Vue3",
      "UI TailwindCss + Element Plus",
      "Express + MySQL",
      "Socket.io Peer.js",
      "Deploy Oracle + GithubAction + Docker + Rendertron",
    ],
    stack: [{ name: "Express" }, { name: "Sequelize" }, { name: "Rendertron" }],
    image: "/assets/projects/full-store.png",
    live: "https://profile.jiangshuuu.com/",
    github: "https://github.com/JiangShuuu/vue3-clothingStore-ts",
    createAt: "2022/09",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center xl:px-0 py-10"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[10px] h-[50%] xl:-mt-14">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline mb-10">
                {project.num}
              </div>
              {/* project category */}
              <div>
                <h2 className="text-[42px] my-0 font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.title}
                </h2>
                <p className="text-xl text-gray-200 mt-2">
                  {project.category} project
                </p>
              </div>
              {/* project description */}
              <ul className="mb-4 mt-0">
                {project.description.map((item, index) => {
                  return (
                    <li key={index} className="text-white/60 my-0">
                      {item}
                    </li>
                  );
                })}
              </ul>
              {/* stack */}
              <div className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="text-xl text-accent my-0 list-none list-inside"
                    >
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </p>
                  );
                })}
              </div>
              {/* border */}
              <div className="border relative border-white/20 my-6">
                <p className="absolute top-0 right-0 text-white">
                  Create At: {project.createAt}
                </p>
              </div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {project.live && (
                  <a href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] cursor-pointer h-[70px]  rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </a>
                )}
                {/* github project button */}
                {project.github && (
                  <a href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] cursor-pointer h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <img
                          src={project.image}
                          alt=""
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="xl:bg-accent bg-white/30 xl:rounded-full cursor-pointer hover:bg-accent-hover text-gray-600 xl:text-primary text-[22px] w-[30px] xl:w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
