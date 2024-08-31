import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxtdotjs,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiGraphql,
  SiReactquery,
  SiTrpc,
  SiShadcnui,
  SiTypescript,
  SiAstro,
  SiRedux,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about data
const about = {
  title: "About me",
  description:
    "If you are looking for a proactive and responsible Front-End Developer, feel free to contact me. I look forward to the opportunity for an interview to get to know each other. Thank you!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "John Lu",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+886) 912-697-801",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Line",
      fieldValue: "globelex",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Taiwan Taipei",
    },
    {
      fieldName: "Email",
      fieldValue: "globelex65@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Chinese, English",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Specializing in React and Vue.js framework development, I excel at creating high-performance and user-friendly web applications. With extensive front-end development experience covering everything from infrastructure to CI/CD deployment, I am also adept at communicating with stakeholders to precisely clarify requirements, thanks to my background in sales.",
  items: [
    {
      company: "創星物聯科技",
      position: "Mid Front-End Developer",
      duration: "2024 - Present",
    },
    {
      company: "104 人力銀行",
      position: "Front-End Developer",
      duration: "2023 - 2024",
    },
    {
      company: "精鏡傳媒",
      position: "Junior Front-End Developer",
      duration: "2022 - 2023",
    },
    {
      company: "集客數據行銷",
      position: "Account Manager",
      duration: "2021",
    },
    {
      company: "紅門互動",
      position: "Account Executive",
      duration: "2017 - 2019",
    },
    {
      company: "Sales Journey",
      position: "Sales",
      duration: "2015 - 2017",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Codecademy",
      degree: "Front-end Track",
      duration: "2022",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2020 - 2021",
    },
    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2019",
    },
    {
      institution: "Design School",
      degree: "Diploma in Graphic Design",
      duration: "2016 - 2018",
    },
    {
      institution: "Community College",
      degree: "Associate Degree in Computer Science",
      duration: "2014 - 2016",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "I am proficient in React and Vue, with extensive experience in their associated SSR frameworks. I excel in utilizing React Query or Apollo for optimized data caching. Additionally, I have foundational experience in developing full-stack applications using Express, PostgreSQL, and tRPC.",
  skillList: [
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiVuedotjs />,
      name: "Vue.js",
    },
    {
      icon: <SiNuxtdotjs />,
      name: "Nuxt.js",
    },
    {
      icon: <SiRedux />,
      name: "redux",
    },
    {
      icon: <SiGraphql />,
      name: "graphql",
    },
    {
      icon: <SiReactquery />,
      name: "react-query",
    },
    {
      icon: <SiTrpc />,
      name: "trpc",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <SiExpress />,
      name: "express.js",
    },
    {
      icon: <SiPostgresql />,
      name: "postgresql",
    },
    {
      icon: <SiMysql />,
      name: "mysql",
    },
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },

    {
      icon: <SiShadcnui />,
      name: "shadcn/ui",
    },
    {
      icon: <SiAstro />,
      name: "astro",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

export default function Resume() {
  const [activeTab, setActiveTab] = useState("experience");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get("tab");
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex  justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex mt-10 flex-col w-full max-w-[380px]  mx-auto xl:mx-0 gap-6 h-full">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            {/* <TabsTrigger value="education">Education</TabsTrigger> */}
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold mb-0">{experience.title}</h3>
                <p className=" text-white/60 mx-auto xl:mx-0 lg:text-justify">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] px-0">
                    {experience.items.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="bg-[#232329] h-[140px] rounded-xl flex flex-col justify-center items-center lg:items-start lg:px-10 gap-1"
                        >
                          <span className="text-accent my-0">
                            {item.duration}
                          </span>
                          <h3 className="w-[350px] lg:text-start">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 my-0">{item.company}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold mb-0">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold mb-0">{skills.title}</h3>
                  <p className="text-justify text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] px-0">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index} className="list-none">
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] cursor-pointer bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300 text-white">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left h-full"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold mb-0">{about.title}</h3>
                <p className="text-justify text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 list-none">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
