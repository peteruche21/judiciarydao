import React, { FC } from "react";

const About: FC = () => {
  return (
    <section
      id="about-section"
      className="text-gray-600 py-20 flex min-h-[60vh] bg-gradient-to-r
      from-transparent via-yellow-50 to-pink-50 text-xl px-[2rem]"
    >
      <div className="m-auto">
        <h1 className="text-3xl font-bold mb-10 text-center">About</h1>
        <p>thorough description goes here</p>
        <h1 className="text-3xl font-bold my-10 text-center">How it Works</h1>
        <p>
          thorough description also goes here but this one is a very long one.
          question is will it stretch? and yey it did.
        </p>
      </div>
    </section>
  );
};

export default About;
