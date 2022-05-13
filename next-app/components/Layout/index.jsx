import React from "react";
import { ConnectButton } from "web3uikit";
var Layout = function (_a) {
    var children = _a.children;
    var renderHeader = function () {
        return (<nav className="
        px-2 sm:px-4 py-2.5 
        bg-gradient-to-r 
        from-transparent via-yellow-50 to-pink-50">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://localhost:3000/app" className="flex items-center">
            <img src="/brand/logo.svg" className="mr-3 h-6 sm:h-9" alt="jdao Logo"/>
            <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-600">
              JudiciaryDao
            </span>
          </a>
          <div className="flex md:order-2">
            <div>
              <ConnectButton moralisAuth={false}/>
            </div>
          </div>
        </div>
      </nav>);
    };
    return (<>
      {renderHeader()}
      {children}
    </>);
};
export default Layout;
