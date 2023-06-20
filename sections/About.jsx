"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import letterV from "../public/letter-v.jpg";
import { fadeIn } from "@/utils/motion";

const About = () => {
  return (
    <div className="w-full max-w-[800px] mx-auto flex flex-col sm:flex-row items-center gap-8 relative">
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView={"show"}
        className="w-full sm:max-w-md sm:min-w-[240px]"
      >
        <Image src={letterV} width={1000} height={667} alt="letter-v" />
      </motion.div>

      <div className="absolute w-full h-[300px] gradient-02 rounded-tl-[140px] -z-10 -top-[30px]" />
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView={"show"}
        className="w-full flex flex-col items-center sm:items-start justify-center"
      >
        <p className="text-xl sm:text-3xl font-medium">we lift your</p>
        <p className="text-3xl sm:text-5xl font-extrabold leading-8">
          perspective
        </p>
        <p className="text-sm sm:text-lg mt-6 font-light">
          a transformation group for{" "}
          <span className="font-bold">
            brand, <br />
            digital, and media.
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default About;
