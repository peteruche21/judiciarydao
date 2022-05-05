import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-800">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a
          href="https://localhost:8080"
          className="flex items-center mb-4 sm:mb-0"
        >
          <img src="/brand/logo.svg" className="mr-3 h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            JudiciaryDao
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              ACE Token
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://localhost:3000" className="hover:underline">
          JudiciaryDao
        </a>
        . Powered by Chainlink.
      </span>
    </footer>
  );
};

export default Footer;
