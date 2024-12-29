import React from "react";
import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <HashLoader size={100} color="#ff4062" />
    </div>
  );
};

export default Loader;
