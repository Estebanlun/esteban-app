"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { motion } from "framer-motion";

const link =
  "https://drive.google.com/file/d/1-DBdVNic66sM5fZFig7n-jax4fkDwi9X/view?usp=sharing";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400 ">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Esteban Luna",
                2000,
                "Full-Stack",
                2000,
                "Web Developer",
                2000,
                "Front-end Developer",
                2000,
                "Back-end Developer",
                2000,
                "Coach",
                2000,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7DB] text-base sm:text-sm sm:w-60 lg:w-auto mb-6 lg:text-xl">
            I enjoy writing code, playing sports, playing video games, spending
            time with my loved ones and I drink a lot of mate 🧉🇦🇷.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-orange-500 to-blue-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href={link}
              target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-orange-500 to-blue-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="Hero-Image"
              width={500}
              height={500}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
