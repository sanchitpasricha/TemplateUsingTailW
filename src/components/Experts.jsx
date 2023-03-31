import React from "react";

function Experts() {
  return (
    <div className="max-w-[1024px] mx-auto my-10 p-2 md:grid grid-cols-2">
      <div className="col-span-1 md:w-[80%] text-center">
        <img
          src="https://fanaticallydigital.com/wp-content/uploads/2022/09/PPC-HERO-01-2-1024x900.png"
          alt=""
        />
      </div>
      <div className="col-span-1 flex flex-col justify-center">
        <h1 className="text-[#41cd41] font-bold my-[10px]">
          LEARN FROM EXPERTS
        </h1>
        <p className="font-medium my-[10px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
}

export default Experts;
