import Link from "next/link";
import React from "react";
var Features = function () {
    var data = [
        {
            image: "/brand/feature-decentralized.svg",
            title: "Decentralized",
            description: "test is avery long description test is avery long description test is avery long description test is avery long description",
        },
        {
            image: "/brand/feature-secure.svg",
            title: "Truth",
            description: "test is avery long description test is avery long description test is avery long description test is avery long description",
        },
        {
            image: "/brand/feature-trust.svg",
            title: "Justice",
            description: "test is avery long description test is avery long description test is avery long description test is avery long description",
        },
    ];
    var renderList = function () {
        return data.map(function (el, index) {
            return (<li key={index} className="
          relative 
          bg-white 
          transition 
          transform 
          hover:-translate-y-4 
          p-4 min-w-[300px]
          lg:min-w-[270px] rounded-xl 
          max-w-lg 
          m-auto border 
          border-gray-200
          ">
          <div className="
            img-cont 
            relative 
            transform 
            -translate-y-20 w-[8rem] 
            rounded-lg p-3 m-auto 
            bg-gradient-radial
            from-yellow-50
          via-pink-50
            to-transparent">
            <img src={el.image}/>
          </div>
          <header className="transform -translate-y-10 space-y-5">
            <h3 className="font-header font-bold text-2xl text-center">
              {el.title}
            </h3>
            <p> {el.description} </p>
          </header>
        </li>);
        });
    };
    return (<section id="features-section" className="relative p-4 pt-24 text-gray-600 min-h-[80vh] flex flex-col bg-gradient-to-r
      from-transparent via-yellow-50 to-pink-50 px-[2rem]">
      <div className="wrapper w-full max-w-6xl m-auto">
        <ul className="
          grid md:grid-cols-1 
          lg:grid-cols-3 
          gap-20 md:gap-12 
          w-full max-w-4xl 
          lg:max-w-6xl m-auto
          md:space-y-10 lg:space-y-0">
          {renderList()}
        </ul>
      </div>
      <div className="m-auto">
        <button className="text-white text-center text-sm
            bg-[#535476] hover:bg-[#2d4356] 
            focus:ring-4 focus:outline-none focus:ring-[#94e1e4] 
            font-medium rounded-md mt-10 lg:mt-0
            px-5 py-2.5  mr-3 md:mr-0 w-full">
          <Link href="/app">GET STARTED</Link>
        </button>
      </div>
    </section>);
};
export default Features;
