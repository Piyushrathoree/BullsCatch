import React from "react";

function Welcome() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center pb-15 pt-12 lg:pt-28 lg:pb-20">
      <img
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="/assets/img/workforce/bg-mob_1.png"
        alt="Background"
      />
      <div className="max-w-72 md:max-w-none">
        <section
          className="text-center text-balance 2xl:text-[3.625rem] mx-auto z-50"
          style={{ fontSize: "42px" }}
        >
          <h2 className="mb-6 leading-snug">
            <span
              className="inline-block"
              style={{ fontFamily: "Inter", opacity: 1, transform: "none" }}
            >
              Prove&nbsp;
            </span>
            <span
              className="inline-block"
              style={{ fontFamily: "Inter", opacity: 1, transform: "none" }}
            >
              your&nbsp;
            </span>
            <br className="md:hidden" />
            <span
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F0C78E] to-[#E98F81] mr-2.5 xl:mr-3"
              style={{ fontFamily: "Inter", opacity: 1, transform: "none" }}
            >
              Trading
            </span>
            <span
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F0C78E] to-[#E98F81] mr-2.5 xl:mr-3"
              style={{ fontFamily: "Inter", opacity: 1, transform: "none" }}
            >
              Expertise
            </span>
          </h2>
          <p
            className="text-[#54565B] 2xl:text-[#fff] font-light text-lg max-w-[444px] mb-5 mx-auto"
            style={{ fontFamily: "DM Sans", opacity: 1, transform: "none" }}
          >
            Pass the test to unlock access to a professional trading environment
            and receive capital to trade—risk-free.
          </p>
          <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 bg-gradient-to-t from-white/10 to-black/0 transition-all duration-1000">
            {/*bs yhi tk hai ye section neeche endind div tak */}
          </div>
        </section>
      </div>


      {/* button code h yha se*/}
<div>
      <div className="flex justify-center items-center mt-[-310px] h-screen">
        <button className="text-sm relative border-2 rounded-full border-gray-700 bg-black text-white font-medium flex items-center transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.6)] py-1.5 px-4 hover:shadow-glow hover:border-gray-400 group">
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
      </div></div>
    </div>
  );
}

export default Welcome;
