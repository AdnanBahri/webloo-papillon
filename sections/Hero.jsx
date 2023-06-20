"use client";
import { slideIn } from "@/utils/motion";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full h-[60vh] sm:h-[40vh] flex flex-col items-center justify-center">
      <motion.p
        variants={slideIn("right", "tween", 0.2, 1)}
        initial={"hidden"}
        whileInView={"show"}
        className="bg-gradient-to-r from-[#e9f0ec] via-[#83aac3] to-[#0f0985] inline-block text-transparent bg-clip-text text-4xl sm:text-6xl lg:text-7xl font-semibold py-2"
      >
        future proof
      </motion.p>
      <motion.p
        variants={slideIn("left", "tween", 0.2, 1)}
        initial={"hidden"}
        whileInView={"show"}
        className="bg-gradient-to-r from-[#e9f0ec] via-[#83aac3] to-[#0f0985] inline-block text-transparent bg-clip-text text-4xl sm:text-6xl lg:text-7xl font-semibold py-2"
      >
        your <span className="font-semibold">technology</span>
      </motion.p>
    </section>
  );
};

export default Hero;
