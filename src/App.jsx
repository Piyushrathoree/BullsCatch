import React from "react";
import "./index.css";

//components
import Header from "./components/header";
import TextBox from "./components/section1";
import Textbox from "./components/textAfterTest"
import Service from "./components/service";


//assets
import Video from "./public/line-waves.webm";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <div className="h-[500rem] w-full bg-[#010101] overflow-hidden relative">
        <div className="overlay bg-black h-full w-full opacity-85 absolute">
        <Header />
        <div className="h-[1px] bg-gradient-to-r from-black via-white to-black w-full z-10 px-64 "></div>
        <div className="h-screen w-screen ">
          <TextBox />
          <video
            src={Video}
            loop
            muted
            autoPlay
            playsInline
            className="w-full z"
          ></video>
        </div>
        <Testimonials/>
        <Textbox />
        <br />
        <Service />
      </div></div>
    </>
  );
}

export default App;
