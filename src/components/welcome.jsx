import React from "react";
import welcome from "../public/welcome.png";

function Welcome() {
  return (
    <div className="mt-10 mb-20">
    

      {/* Text Section */}
      <div className="relative w-full  flex flex-col items-center justify-center pt-12 pb-20 ">
        {/* Background Image */}
        <img
          className="absolute inset-0 w-full h-[50vh] -top-20 object-cover -z-10"
          src={welcome}
          alt="Background"
        />

        {/* Main Content */}
        <div className=" ">
          {/* Heading */}
          <div className="text-white text-5xl mb-10">
            Prove Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F0C78E] to-[#E98F81]">Trading Expertise</span>
          </div>

          {/* Subheading */}
          <p className="text-white font-light text-xl max-w-[500px] mx-auto text-center">
            Pass the test to unlock access to a professional trading
            environment and receive capital to trade—risk-free.
          </p>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex justify-center items-center mt-5 ">
        <button className="text-sm border-2 rounded-full py-3 px-5 border-gray-700 bg-black text-white font-medium flex items-center transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.6)] hover:shadow-glow hover:border-gray-400 group">
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
  );
}

export default Welcome;
