import React from "react";
import "../index.css";

const Header = () => {
  return (
    <div className="w-full px-64 z-10  ">
      <div className="main-text h-2/4 relative flex flex-col pt-36">
        {/* Hero text */}
        <div className="hero-text text-[5rem] bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent text-center">
          BullsCatch Trading Floor
        </div>

        {/* Subheading */}
        <div className="text-white text-2xl mt-10 text-center">
          Learning and earning without risk to personal capital
        </div>

        {/* Button */}
        <div className="flex justify-center items-center mt-[7rem]">
          <button className="text-sm  py-3 px-5 border-2 rounded-full border-gray-700 bg-transparent text-white font-medium flex items-center transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(255,255,255,1)] hover:border-gray-400 group">
            Get Started
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
      </div>
    </div>
  );
};

export default Header;
