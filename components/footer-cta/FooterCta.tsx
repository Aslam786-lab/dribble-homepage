import React from "react";

function FooterCta() {
  return (
    <div className="flex items-center justify-center py-24 h-4/5 text-[#0d0c22] mt-16 bg-[#ffda79]">
      <div className="text-center  max-w-[34rem]">
        <h1 className="text-[64px] opacity-90 font-semibold leading-tight  font-source mb-12">
          Find your next designer today
        </h1>
        <p className="text-lg mb-12">
          The world's leading brands use Dribbble to hire creative talent.
          Browse millions of top-rated portfolios to find your perfect creative
          match.
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <button className="bg-[#0d0c22] text-white text-sm font-bold py-2 px-4 rounded-full w-40 h-14 hover:bg-gray-800">
            Get started now
          </button>
          <button className="bg-white text-black text-sm font-semibold py-2 px-4 rounded-full  hover:text-gray-800">
            Learn about hiring
          </button>
        </div>
        <p className="text-lg">
          Are you a designer? <span className="underline">Join Dribbble</span>
        </p>
      </div>
    </div>
  );
}

export default FooterCta;
