import Image from "next/image";
import React, { FC } from "react";

const Hero: FC = () => {
  return (
    <div
      className="
    w-full 
    h-[95vh] 
    grid 
    grid-cols-1 
    lg:grid-cols-2 
    gap-10 
    bg-opacity-0
    bg-gradient-to-r
    from-transparent
    via-yellow-50
    to-pink-50"
    >
      <div className="flex bg-[url('/brand/bg-dots.svg')] bg-cover bg-no-repeat">
        <div className="m-auto">
          <Image src="/brand/logo.svg" width={350} height={350} />
        </div>
      </div>
      <div
        className="
        justify-center 
        items-center 
        flex 
        w-auto 
        flex-col 
        text-gray-600 
        gap-3 
        "
      >
        <h2 className="text-4xl font-bold">JudiciaryDao</h2>
        <p>The Appeal Court of Ethereum</p>
        <p>For Trust Minimized Settlements</p>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Join
        </button>
      </div>
    </div>
  );
};

export default Hero;
