// Import required libraries
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Reusable animation component
const AnimatedComponent = ({ children }) => {
  // Intersection observer hook
  const { ref, inView } = useInView({
    triggerOnce: false, // You can set this to true if you want to animate only once
    threshold: 0.2, // Percentage of component visibility before triggering the animation
  });

  // Define the animation for up-to-down movement
  const variants = {
    hidden: { opacity: 0, y: -50 }, // Start above the view
    visible: { opacity: 1, y: 0 }, // Move into place
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent
