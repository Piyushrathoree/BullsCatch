import React from "react";
import "../index.css";
import companyLogo from "../public/logo.png";
const header = () => {
  return (
    <div className="bg-transparent h-28 w-full px-64 ">
      <div className="header bg-black w-full h-28  py-3">
        <div className="flex justify-between w-full h-28 items-center">
          <div className="brandName-Logo ">
            <div className="logo  w-20 ">
              <img src={companyLogo} />
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center  h-screen">
              <button
                className="text-sm relative  border-2 rounded-full border-gray-700 bg-black text-white font-medium flex items-center transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.6)] py-3 px-5 hover:shadow-glow hover:border-gray-400 group"
              >
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
      </div>
    </div>
  );
};

export default header;
