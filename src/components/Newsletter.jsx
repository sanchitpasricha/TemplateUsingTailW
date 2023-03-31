import React from "react";

function Newsletter() {
  return (
    <div className="w-full bg-[#2699fb] p-6">
      <div className="max-w-[1240px] md:flex py-[50px] justify-around">
        <div className=" flex flex-col justify-center py-4">
          <h1 className="text-white font-bold text-[30px] md:text-[40px]">
            Want to learn latest IT skills ?
          </h1>
          <span className="text-white">
            Sign up to our newsletter and stay up to date.
          </span>
        </div>
        <div className="">
          <input
            type="text"
            className="p-3 mr-3 text-[gray] rounded"
            placeholder="Email"
          />
          <button className="bg-black rounded p-3 text-white">
            Get started
          </button>
          <p className="text-white my-2">
            We care about protection of your data. Read our <br />
            <a href="home" className="text-black">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
