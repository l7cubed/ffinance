import React from "react";

const HeroSection = () => {
  return (
    <section id="home" className="flex flex-col pt-72 px-10">
      <div className="flex-1 flex justify-center items-start flex-col xl:px-0 px-6">
        <div className="flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2"></div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-semibold text-[42px] text-white text-shadow-white leading-[75px]">
            Nth Root Money Market
          </h1>
        </div>
        <p className="font-bold text-white text-shadow-white text-[18px] max-w-[470px] mt-5">
          A decentralized lending and borrowing protocol.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
