import React, { FC } from "react";

const Features: FC = () => {
  const data = [
    {
      image: "/brand/feature-decentralized.svg",
      title: "test",
      description: "test",
    },
    { image: "/brand/feature-secure.svg", title: "test", description: "test" },
    { image: "/brand/feature-trust.svg", title: "test", description: "test" },
  ];
  const renderList = (): JSX.Element[] => {
    return data.map((el, index) => {
      return (
        <li
          key={index}
          className="relative bg-white transition transform hover:-translate-y-4 p-4 rounded-xl shadow-lg max-w-lg m-auto"
        >
          <div className="img-cont relative transform -translate-y-10 w-full">
            <img src={el.image} />
          </div>
          <header>
            <h3 className="font-header font-bold text-2xl"> {el.title} </h3>
            <p> {el.description} </p>
          </header>
        </li>
      );
    });
  };
  return (
    <section id="ft-section" className="relative p-4 my-20">
      <div className="wrapper w-full max-w-6xl m-auto">
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-12 w-full max-w-4xl lg:max-w-6xl m-auto">
          {renderList()}
        </ul>
      </div>
    </section>
  );
};

export default Features;
