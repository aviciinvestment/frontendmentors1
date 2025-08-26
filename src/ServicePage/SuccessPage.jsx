import React from "react";
import { Link } from "react-router-dom";
import { FaUniversalAccess } from "react-icons/fa6";

const SuccessPage = () => {
  return (
    <div className="flex h-screen flex-col justify-center">
      <div className="animate-pulse absolute sm:top-[200px] top-[150px] w-full h-36 m-auto flex items-center justify-center rounded-full">
        <FaUniversalAccess className="bg-blue-300 w-36 h-36 p-2  rounded-full text-3xl" />
      </div>
      <div className="border-blue-300 border-2 rounded-lg w-3/4 h-64 m-auto">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="font-semibold text-blue-950 text-4xl">DONE!</h1>
          <p className="font-semibold text-blue-950">You Are Ready To Start</p>
          <Link to="/random">
            <button className="bg-blue-400  text-white contrast-20 rounded-lg mt-3 p-1 pr-14 pl-14 font-bold  border-[1px] border-gray-300 shadow-sm shadow-gray-30">
              OPEN
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
