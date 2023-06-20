"use client";

import Link from "next/link";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";

const Navbar = () => {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView={"show"}
      className="w-full py-8 relative"
    >
      <div className="absolute w-[50%] inset-0 gradient-01 -z-10" />
      <div
        className={
          "w-full max-w-7xl mx-auto flex justify-between sm:px-16 px-6"
        }
      >
        <div className="text-2xl font-extrabold uppercase cursor-pointer">
          <Link href={"/"}>Levitate</Link>
        </div>
        <ul className="flex items-center gap-4">
          <li className="py-1 px-3 text-lg border-white border-[3px] rounded-full inline-flex items-center justify-center hover:bg-white hover:text-primary-black focus:bg-white focus:text-primary-black">
            <Link href={"/contact"}>Get Started</Link>
          </li>
          <li className="cursor-pointer">
            <FaTwitter className="h-6 w-6" />
          </li>
          <li className="cursor-pointer">
            <FaLinkedinIn className="h-6 w-6" />
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
