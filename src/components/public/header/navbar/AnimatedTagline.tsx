"use client";

import { motion } from "motion/react";

const AnimatedTagline = () => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
      className="flex w-full flex-wrap items-center justify-center gap-1 text-center text-sm"
    >
      <span className="font-normal">Drop your files. </span>
      <span className="font-medium underline decoration-primary">
        {"We've got them."}
      </span>
    </motion.h2>
  );
};

export default AnimatedTagline;
