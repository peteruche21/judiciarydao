import Image from "next/image";
import React, { FC } from "react";

const Ace: FC = () => {
  const data = [
    "JudiciaryDao's Governace Token",
    "Token Holders can be able to mint a base class nft",
    "Token Holders can stake ACE to be eligible to vote",
    "Will be used to fund Community Projects.",
    "Jusrist will receive renumerations in ACE Token",
  ];
  const renderList = (): JSX.Element[] => {
    return data.map((el, index) => {
      return (
        <li key={index} className="text-lg">
          {el}
        </li>
      );
    });
  };
  return (
    <section
      id="ace-section"
      className="
      flex items-center flex-col 
      w-full py-20 text-gray-600 
      px-[2rem] bg-gradient-to-r
      from-transparent via-yellow-50 to-pink-50
      min-h-[60vh]"
    >
      <h1 className="text-3xl font-bold mb-10">ACE Token</h1>
      <div
        className="
        grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5
        gap-20 md:gap-12 
        w-full max-w-3xl lg:max-w-6xl 
        "
      >
        <div className="lg:col-start-2 md:col-start-1">
          <Image src="/brand/ace.svg" width={200} height={200} />
        </div>

        <div className="md:col-span-2 space-y-5">
          <h3 className="text-center text-xl">
            Appeal Court Of Ethereum Token
          </h3>
          <ul className="list-disc">{renderList()}</ul>
        </div>
      </div>
    </section>
  );
};

export default Ace;
