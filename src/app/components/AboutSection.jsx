"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul
        className="list-disc pl-2 flex flex-col gap-2 wrap sm:flex-row sm:gap-10
       "
      >
        <section>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>NextJS</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Tailwind Css</li>
        </section>
        <section>
          <li>Sass Css</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Sequelize</li>
          <li>Firebase</li>
          <li>PostgreSQL</li>
          <li>Git</li>
        </section>
        <section>
          <li>GitHub</li>
          <h3 className="flex text-slate-400 justify-normal text-bold">
            Comming Soon
          </h3>
          <li>Typescript</li>
          <li>Python</li>
          <li>Solid</li>
        </section>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Economic Science 2020</li>
        <li>Fullstack Web Developer - Henry 2021</li>
        <li>Professional Ontological Coach - Trascender 2020</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Argentina Programa 4.0 </li>
        <li>Leadership Coaching and group management</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="w-auto text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-24 items-center py-8 px-0 xl:gap-30 xl:left-0 sm:py-16 xl:px-1">
        <Image
          src="/images/about-image.jpg"
          alt="About-Image"
          width={500}
          height={500}
          className="rounded-md sm:w-500 sm:h-500"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience in
            javascript, working in groups and collaborating in a team..
            I&apos;am a quick learner and always looking to expand my knowledge
            and skill set. I&apos;m a good partner, excited to work with others
            to create amazing apps.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
