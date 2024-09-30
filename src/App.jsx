import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Import the default styles
import Header from "./components/header";
import TextBox from "./components/section1";
import Textbox from "./components/textAfterTest";
import Service from "./components/service";
import Testimonials from "./components/Testimonials";
import Video from "./public/line-waves.webm";

import BuildAI from "./components/welcome";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Footer from "./components/footer";


//animation components
import AnimatedComponent from "./components/animation";
import Animation2 from "./components/heroAnimation";
function App() {
  // Create a reference for the scroll container
  const scrollRef = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
    });

    // Cleanup on component unmount
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} className="scroll-container ">
      <div className="h-[330rem] w-full bg-[#010101] overflow-hidden relative">
        <div className="overlay bg-black h-full w-full opacity-85 absolute">
          {/* Animated Header */}
          <AnimatedComponent>
            <Header />
          </AnimatedComponent>

          <div className="h-[1px] bg-gradient-to-r from-black via-white to-black w-full z-10 px-64 "></div>

          <div className="h-screen w-screen ">
            {/* Animated TextBox */}
            <Animation2>
              <TextBox />
            </Animation2>

            <video
              src={Video}
              loop
              muted
              autoPlay
              playsInline
              className="w-full -mt-[20rem] "
            ></video>
          </div>

          {/* Animated Testimonials */}
          <Animation2>
            <Testimonials />
          </Animation2>

          {/* Animated Textbox */}
          <AnimatedComponent>
            <Textbox />
          </AnimatedComponent>

          <br />

          {/* Animated Service */}
          
            <Service />
          

         <BuildAI />

          <Section2 />
          <Section3 />
          <div className="h-[1px] mt-32  bg-gradient-to-r from-black via-white to-black w-full z-10 px-64 "></div>
<AnimatedComponent ><Footer /></AnimatedComponent>
          
        </div>
      </div>
    </div>
  );
}

export default App;
