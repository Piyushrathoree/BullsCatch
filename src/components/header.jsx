import React from "react";
import "../index.css";
import companyLogo from '../public/logo.png';
const header = () => {
  return (
    <div className="bg-transparent h-28 w-full px-64 " >
    <div className="header bg-black w-full h-28  py-3">
      <div className="flex justify-between w-full h-28 items-center">
        <div className="brandName-Logo ">
          <div className="logo  w-20 "><img src={companyLogo}/></div>
        </div>
<div className="input">
    <div className="gradient-button">Get Started</div>
</div>
      </div>
    </div>
  
   
    </div>
  );
};

export default header;
