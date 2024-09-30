import React from 'react';
import '../index.css'; // Assuming you're using this file for custom styles
import circle from '../public/circle.png'; // asset
import Animation3 from '../components/serviceAnimation'; // Import the Animation3 component

const Service = () => {
  return (
    <div className="flex justify-center -mt-32 items-center h-[50rem] w-full">
      {/* Main container */}
      <div className="flex h-[50rem] px-64 rounded-lg shadow-lg gap-[6rem]">

        {/* Left section with pop-up animation */}
        <Animation3 popDirection="up">
          <div className="flex justify-center items-center">
            {/* Red box with background */}
            <div
              className="
                relative max-w-154 flex items-center justify-center overflow-hidden rounded-[20px] md:rounded-[30px]
                border border-transparent
                before:bg-gradient-to-b before:from-[#09090B]/70 before:to-[#482A16]/80
                before:border-inherit before:border before:rounded-[20px] before:md:rounded-[30px]
                before:absolute before:inset-0 before:z-10 before:bg-origin-border before:[mask-composite:exclude]
                gradient
              "
              style={{ opacity: 1, transform: 'none' }}
            >
              <div>
                <div
                  className="mouse-follow-light_MouseFollowLight__qwiuP"
                  style={{ transform: 'translate(230.5px, 374.826px)' }}
                ></div>
              </div>
              <img
                src={circle}
                alt="Background"
               
                className="w-full h-full object-cover z-10 "
              /> 
              <img src="https://img.freepik.com/premium-photo/image-stock-market-graph-black-background-generative-ai_97167-5619.jpg"  className='w-[90%] rounded-3xl h-[90%] absolute opacity-100 z-20' alt="" />
            </div>
          </div>
        </Animation3>

        {/* Right section with pop-up animation */}
        <Animation3 popDirection="right">
          <div className="w-[25rem] text-white space-y-8 flex flex-col gap-8 justify-center">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl text-white">
                <span className="font-thin text-xl">✨</span> Expertise and Experience

              </h3>
              <p className="text-gray-400 w-[22rem]">
              Experienced traders and financial experts drive our success in navigating complex markets.

              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl text-white">
                <span className="font-thin text-xl">✨</span> Innovative Technology

              </h3>
              <p className="text-gray-400 w-[22rem]">
              We use advanced trading tools for fast, informed decisions.


              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl text-white">
                <span className="font-thin text-xl">✨</span> Collaborative Culture

              </h3>
              <p className="text-gray-400 w-[22rem]">
              Our team thrives in a collaborative, learning-focused environment.


              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl text-white">
                <span className="font-thin text-xl">✨</span> Commitment to Growth

              </h3>
              <p className="text-gray-400 w-[22rem]">
              Innovation and continuous development keep us ahead in the industry.
              </p>
            </div>
          </div>
        </Animation3>
      </div>
    </div>
  );
};

export default Service;
