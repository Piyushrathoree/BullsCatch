import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Import the default styles
import Header from "./components/header";
import TextBox from "./components/section1";
import Textbox from "./components/textAfterTest";
import Service from "./components/service";
import Testimonials from "./components/Testimonials";
import Video from "./public/line-waves.webm";
import AnimatedComponent from "./components/animation"; 

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
    <div ref={scrollRef} className="scroll-container">
      <div className="h-[500rem] w-full bg-[#010101] overflow-hidden relative">
        <div className="overlay bg-black h-full w-full opacity-85 absolute">
          {/* Animated Header */}
          <AnimatedComponent>
            <Header />
          </AnimatedComponent>

          <div className="h-[1px] bg-gradient-to-r from-black via-white to-black w-full z-10 px-64 "></div>

          <div className="h-screen w-screen ">
            {/* Animated TextBox */}
            <AnimatedComponent>
              <TextBox />
            </AnimatedComponent>

            <video
              src={Video}
              loop
              muted
              autoPlay
              playsInline
              className="w-full z"
            ></video>
          </div>

          {/* Animated Testimonials */}
          <AnimatedComponent>
            <Testimonials />
          </AnimatedComponent>

          {/* Animated Textbox */}
          <AnimatedComponent>
            <Textbox />
          </AnimatedComponent>

          <br />

          {/* Animated Service */}
          <AnimatedComponent>
            <Service />
          </AnimatedComponent>
        </div>
      </div>
    </div>
  );
}

export default App;
