import React from "react";
import Link from "next/link";
var Navbar = function () {
    return (<nav className="
      px-2 sm:px-4 py-2.5 
      bg-gradient-to-r 
      from-transparent via-yellow-50 to-pink-50">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://localhost:3000" className="flex items-center">
          <img src="/brand/logo.svg" className="mr-3 h-6 sm:h-9" alt="jdao Logo"/>
          <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-600">
            JudiciaryDao
          </span>
        </a>
        <div className="flex md:order-2">
          <button type="button" className="text-white text-center text-sm
            bg-[#535476] hover:bg-[#2d4356] 
            focus:ring-4 focus:outline-none focus:ring-[#94e1e4] 
            font-medium rounded-lg  
            px-5 py-2.5  mr-3 md:mr-0">
            <Link href="/app">Join</Link>
          </button>
        </div>
        <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-white text-lg bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="#features-section" className="block py-2 pr-4 pl-3 text-gray-400 text-lg border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                Features
              </a>
            </li>
            <li>
              <a href="#about-section" className="block py-2 pr-4 pl-3 text-gray-400 text-lg border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                About
              </a>
            </li>
            <li>
              <a href="#ace-section" className="block py-2 pr-4 pl-3 text-gray-400 text-lg border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                ACE Token
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>);
};
export default Navbar;
