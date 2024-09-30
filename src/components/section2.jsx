import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import bull from '../public/bull.jpeg';
import block from '../public/block-bg.jpg';

const Section2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Change once to false to allow multiple checks

  // Define the animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      ref={ref}
      className="flex justify-center relative"
      initial="hidden" // Initial state
      animate={isInView ? "visible" : "hidden"} // Animate to visible when in view
      variants={containerVariants}
      transition={{ duration: 0.8 }} // Duration for the main container
    >
      <div className="container w-[80vw] h-[70vh] rounded-[3rem] flex justify-around items-center px-10 relative">
        {/* Main Section */}
        <motion.section
          className="text-center z-50 whitespace-wrap w-[35vw] text-6xl"
          variants={itemVariants}
          transition={{ duration: 1, delay: 0.5 }} // Delay for text
        >
          {/* Heading */}
          <h2 className="mb-6 text-white p-2">
            <span style={{ fontFamily: 'Inter' }}>Welcome&nbsp;</span>
            <span style={{ fontFamily: 'Inter' }}>Traders&nbsp;</span>
            <span style={{ fontFamily: 'Inter' }}>to&nbsp;</span><br />
            <span style={{ fontFamily: 'Inter' }}>the&nbsp;</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F0C78E] to-[#E98F81] mr-3 p-2">
              Era of trading&nbsp;
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-[#b6b9bf] font-light text-2xl max-w-[344px] mb-5 mx-auto" style={{ fontFamily: 'DM Sans' }}>
            We Believe in Nurturing Individual Potential
          </p>

          {/* Button */}
          <div className="flex justify-center items-center mt-10">
            <button className="text-sm relative border-2 rounded-full border-gray-700 bg-transparent text-white font-medium flex items-center transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.6)] py-3 px-5 hover:shadow-glow hover:border-gray-400 group">
              Learn More...
              <svg
                className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.section>

        {/* Bull Image */}
        <motion.section
          className="z-20"
          variants={itemVariants}
          transition={{ duration:1, delay: 0.5 }} // Delay for image
        >
          <img src={bull} className="w-[40vw] rounded-3xl relative" alt="Bull" />
        </motion.section>

        {/* Background Block Image */}
        <img
          src={block}
          className="w-[80vw] h-[70vh] absolute inset-0 rounded-[3rem] z-10"
          alt="Background"
        />
      </div>
    </motion.div>
  );
};

export default Section2;
