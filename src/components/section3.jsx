import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import circle from "../public/circle.png";
import block from "../public/block-bg.jpg";

const Section3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Change once to false

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
      className="flex justify-center relative mt-20"
      initial="hidden" // Initial state
      animate={isInView ? "visible" : "hidden"} // Animate to visible when in view
      variants={containerVariants}
      transition={{ duration: 0.8 }} // Duration for the main container
    >
      <div className="container w-[80vw] h-[70vh] rounded-[3rem] flex justify-around items-center px-10 relative">
        {/* Bull Image */}
        <motion.section
          className="z-20"
          variants={itemVariants}
          transition={{ duration: 1, delay: 0.5 }} // Delay for image
        >
          <img
            src={circle}
            className="w-[40vw] rounded-3xl z-10 relative"
            alt="Bull"
          />
          <img
            src="https://img.freepik.com/premium-photo/financial-chart-graph-with-yellow-line-background_832479-2283.jpg"
            className="absolute z-50 w-[90%] h-[90%] top-8 left-10 rounded-3xl"
            alt=""
          />
        </motion.section>

        <motion.section
          className="text-center z-50 whitespace-wrap w-[35vw] text-6xl"
          variants={itemVariants}
          transition={{ duration: 1, delay: 0.5 }} // Delay for text
        >
          {/* Heading */}
          <h2 className="mb-6 text-white p-2">
          Scale Your Trading with <span className="text-[#C98C72]">Expert Insights</span> 
          </h2>

          {/* Subheading */}
          <p
            className="text-[#b6b9bf] font-light text-2xl w-[80%] mb-5 mx-auto"
            style={{ fontFamily: "DM Sans" }}
          >
            
Access an advanced trading platform with real-time data and analytics designed to enhance your strategies. Utilize expert-level resources to maximize your trading potential and achieve greater results.
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
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

export default Section3;
