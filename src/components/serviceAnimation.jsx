import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Reusable animation component
const Animation3 = ({ children, popDirection }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  // Define the animation for pop effects
  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.5, // Start scaled down (for pop effect)
      y: popDirection === "up" ? 50 : 0, // Move from below or not
      x: popDirection === "left" ? -50 : 50, // Move from left or right
    },
    visible: {
      opacity: 1,
      scale: 1, // Scale to original size
      y: 0, // Move to original position
      x: 0, // Move to original position
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 1, delay: 0.3 }} // Adjust the delay as needed
    >
      {children}
    </motion.div>
  );
};

export default Animation3;
