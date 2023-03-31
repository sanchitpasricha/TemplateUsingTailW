import React from "react";
import Typed from "react-typed";

function Banner() {
  return (
    <div className="bg-[#2699fb] w-full py-[150px]">
      <div className="max-w-[1240px] my-[100px] mx-auto text-center font-bold">
        <div className="text-3xl py-[20px]">Learn with us</div>
        <h2 className="text-white py-[20px] text-4xl md:text-5xl">
          Grow with us.
        </h2>
        <div className="text-4xl md:text-[50px] text-white">
          Learn{" "}
          <Typed
            strings={[
              "Web Development",
              "Digital Marketing",
              "DevOps Engineering",
            ]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
