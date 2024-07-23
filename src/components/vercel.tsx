"use client";

import { motion } from "framer-motion";

export function Vercel() {
  return (
    <motion.div className="transition-transform duration-500 hover:rotate-90">
      <svg
        className="w-22 h-22"
        width="88"
        height="88"
        viewBox="0 0 88 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M44 0L88 88H0L44 0Z" fill="black" />
      </svg>
    </motion.div>
  );
}
