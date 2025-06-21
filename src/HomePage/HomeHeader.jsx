import React from "react";

const HomeHeader = () => {
  return (
    <>
      <div className=" flex justify-between text-white items-center">
        <div className="p-4  gap-2 flex">
          <div className="w-3 skew-x-12 bg-green-400 h-6"></div>
          <div className="self-center text-gray-400">Swift</div>
        </div>
        <div>
          <ul className="flex invisible sm:visible gap-6 ">
            <li>Home</li>
            <li>Blog</li>
            <li>News</li>
          </ul>
        </div>
        <div className="bg-white text-green-950 p-2 mr-2 rounded-md font-bold">
          Get Started
        </div>
      </div>
      <hr />
    </>
  );
};

export default HomeHeader;
