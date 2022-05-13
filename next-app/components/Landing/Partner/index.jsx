import Image from "next/image";
import React from "react";
var Partners = function () {
    return (<section className="
        flex items-center flex-col min-h-[40vh]
        w-full py-20 bg-gradient-to-r
        from-transparent via-yellow-50 to-pink-50">
      <h1 className="text-3xl text-gray-600 font-bold mb-10">Powered By</h1>
      <div className="flex flex-wrap justify-center gap-20">
        <Image src="/partners/chainlink.svg" width="100" height="100"/>
        <Image src="/partners/ethereum.svg" width="100" height="100"/>
        <Image src="/partners/filecoin.svg" width="100" height="100"/>
        <Image src="/partners/polygon.svg" width="100" height="100"/>
        <Image src="/partners/moralis.svg" width="100" height="100"/>
        <Image src="/partners/alchemy.svg" width="100" height="100"/>
      </div>
    </section>);
};
export default Partners;
