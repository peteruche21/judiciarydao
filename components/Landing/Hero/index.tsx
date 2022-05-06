import Image from "next/image";
import React, { FC } from "react";

const Hero: FC = () => {
  return (
    <section
      className="
      w-full h-[95vh] 
      grid grid-cols-1 lg:grid-cols-2 
      gap-10 bg-gradient-to-r
      from-transparent via-yellow-50 to-pink-50"
    >
      <div className="flex bg-[url('/brand/bg-dots.svg')] bg-cover bg-no-repeat">
        <div className="m-auto">
          <Image src="/brand/logo.svg" width={350} height={350} />
        </div>
      </div>
      <div
        className="
        flex flex-col
        justify-center 
        items-center  
        w-auto"
      >
        <div className="text-center space-y-3 text-gray-600 ">
          <h2 className="text-6xl font-bold">JudiciaryDao</h2>
          {/* <p>The Appeal Court of Ethereum</p> */}
          <p className="max-w-[350px]">
            A community composed of jurists, together settling disputes in a
            trustless way with smart-contracts. Enabling gasless voting using
            decentralized storage.
          </p>
          <button
            className="text-white text-center text-sm
            bg-[#535476] hover:bg-[#2d4356] 
            focus:ring-4 focus:outline-none focus:ring-[#94e1e4] 
            font-medium rounded-md  
            px-5 py-2.5  mr-3 md:mr-0 w-1/2"
          >
            Join
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
