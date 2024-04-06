import React from "react";
import Typed from "react-typed";
function Banner() {
  return (
    <div className="w-full bg-[#2699fb]  text-center py-[150px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-3xl">Learn with us</div>
        <h2 className="md:text-[80px] text-[60px] font-bold text-white">Grow with us</h2>
        <div className="text-white p-2 text-[30px]">Learn
        <Typed
          className="pl-2"
          strings={["Computing", "Programming", "Data science"]}
          typeSpeed={100}
          backSpeed={50}
          loop
        ></Typed>
        </div>
        <button className='bg-black p-3 mt-3 px-[50px] text-white rounded'>Get Started</button>
      </div>
    </div>
  );
}

export default Banner;
