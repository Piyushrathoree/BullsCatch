import React from "react";
import "../index.css";

const header = () => {
  return (
    <>
      <div className="w-full px-64 z-10 ">
        <div className="main-text  h-2/4 relative flex flex-col  pt-36 ">
          <div className="hero-text  text-[5rem]  bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent absolute left-[20%]">
            BullsCatch Trading Floor
          </div>{" "}
          <div className="text-white text-2xl  mt-10 absolute left-[30%] pt-20 ">
            learning And earning without risk to personal capital
          </div>
          <div className="button text-zinc-400 border-zinc-400 border px-5 py-2 bg-transparent text-xl absolute left-[44%] top-[23rem] rounded-full ">
            Get Started
          </div>
        </div>
      </div>
    </>
  );
};

export default header;
