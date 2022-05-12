import type { NextPage } from "next";
import React from "react";
import Layout from "../../components/Layout";

const Main: NextPage = () => {
  return (
    <Layout>
      <div className="p-[5rem]">
        <div className="grid-cols-5">
          <h1></h1>
          <div className="col-span-3"></div>
          <button>New Case</button>
        </div>
      </div>
    </Layout>
  );
};

export default Main;
