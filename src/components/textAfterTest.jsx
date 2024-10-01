import React from "react";
import "../index.css";


const text=()=>{
return(
    <div className="w-full h-[30rem] px-64 z-10 -m-12">
        <div className="main-text  h-2/4 relative flex flex-col align-center  ">
          <div className="hero-text  text-[3rem]  text-white absolute left-[18%]">
            Start your Trading Journey with <span className="text-[#ECA586]">Zero Capital</span>
          </div>{" "}
          <div className="text-zinc-400 text-lg  w-2/5 mt-5  absolute left-[32%] pt-20 text-center">
          React engages in facilitating beginners and traders to access stock market professional trading desk and to explore different stock markets of the world. At React mainly professionals explores Indian stock market, US and European equity markets.
          </div>
          
        </div>
      </div>
      )
}
export default text;
