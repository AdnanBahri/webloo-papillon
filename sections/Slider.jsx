"use client";

import { Card } from "@/components";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { delay, motion } from "framer-motion";
import { fadeIn, slideIn } from "@/utils/motion";

const Slider = ({ label, description, data, gradient, ...rest }) => {
  const ref = useRef(null);

  const scrollAmount = 400;

  const scrollLeft = () => {
    if (ref.current) {
      ref.current.scrollLeft -= scrollAmount;
    }
  };

  const scrollRight = () => {
    if (ref.current) {
      ref.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <section className="w-full flex flex-col items-start py-10 sm:py-20 lg:py-30 px-4 sm:px-6 lg:px-8 bg-test relative">
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        initial="hidden"
        whileInView={"show"}
        className="flex flex-col sm:flex-row items-center px-10 sm:space-x-40"
      >
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          {label}
        </h1>
        <div className="max-w-md">
          <p className="text-sm text-gray-300 text-center sm:text-start">
            {description}
          </p>
        </div>
      </motion.div>
      <div className={`${gradient} -z-10`} />
      <div className="w-full flex flex-col">
        {/* Slider */}
        <motion.div
          ref={ref}
          className="scroller flex mt-8 overflow-x-auto scroll-smooth py-6"
        >
          {data.map((card, index) => (
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  translateX: 150,
                },
                show: {
                  opacity: 1,
                  translateX: 0,
                  transition: {
                    duration: 1,
                    delay: index * 0.1,
                  },
                },
              }}
              initial="hidden"
              whileInView={"show"}
              key={card.id}
            >
              <Card title={card.title} url={card.imageUrl} />
            </motion.div>
          ))}
        </motion.div>

        {/* Sliding Controllers */}
        <motion.div
          variants={fadeIn("up", "tween", 0.15, 0.3)}
          initial="hidden"
          whileInView={"show"}
          className="flex space-x-4 transition-all duration-200 self-end"
        >
          <FaArrowLeft
            onClick={scrollLeft}
            className="h-4 w-4 text-gray-400 hover:text-white cursor-pointer"
          />
          <FaArrowRight
            onClick={scrollRight}
            className="h-4 w-4 text-gray-400 hover:text-white cursor-pointer"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Slider;
