import React, { useState } from "react";

const HomeHeader = ({ handleScroll, scrollTopRef }) => {
  const [openNav, setOpenNav] = useState(true);
  return (
    <>
      <div
        ref={scrollTopRef}
        className="bg-blue-950 flex justify-between sm:justify-around text-white items-center"
      >
        <div className="p-4   gap-2 flex">
          <div className="w-5 border-4 border-white skew-x-12 bg-blue-950 h-5"></div>
          <div className=" border-[1px] border-white skew-x-12 bg-blue-950 h-5"></div>
          <div className="self-center text-gray-400 text-sm uppercase">
            Paya
          </div>
        </div>
        <ul className="sm:flex uppercase hidden sm:visible text-2xl gap-10 ">
          <li className="cursor-pointer rounded-lg transition-all hover:text-3xl hover:bg-blue-900 hover:p-3 hover:m-3">
            Home
          </li>
          <li className="cursor-pointer rounded-lg hover:text-3xl transition-all hover:bg-blue-900 hover:p-3 hover:m-3">
            Blog
          </li>
          <li className="cursor-pointer rounded-lg hover:text-3xl transition-all hover:bg-blue-900 hover:p-3 hover:m-3">
            News
          </li>
        </ul>
        <div
          onClick={handleScroll}
          className="cursor-pointer hover:bg-blue-100 text-sm bg-white text-green-950 p-2 mr-2 rounded-md font-bold"
        >
          Get Started
        </div>
      </div>
      <hr />
      <div className=" sm:bg-blue-950 bg-blue-950 flex flex-col justify-between sm:grid">
        <div
          onClick={() => {
            setOpenNav(!openNav);
          }}
          className={`sm:hidden relative ${
            openNav ? "justify-self-start" : "justify-end"
          } transition-all flex ml-5 mt-5`}
        >
          <div
            className={`${
              openNav ? "visible" : "hidden"
            } flex gap-2 flex-col mb-4 w-16`}
          >
            <div className="bg-white h-[3px] w-[50%]"></div>
            <div className="bg-white h-[3px] w-[50%]"></div>
            <div className="bg-white h-[3px] w-[50%]"></div>
          </div>
          <div
            className={`${
              openNav ? "hidden" : "visible"
            } w-16 z-50 flex flex-col`}
          >
            <div className="bg-white rotate-45 h-1 w-[50%]"></div>
            <div className="bg-white -rotate-45  h-1 w-[50%]"></div>
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden ${
          openNav ? "hidden" : "h-lvh"
        }  flex justify-center relative opacity-95 z-40 uppercase transition-all py-14  text-white text-center text-2xl gap-10 bg-blue-950`}
      >
        <ul className={`z-50 sm:hidden ${openNav ? "hidden" : "visible"}`}>
          <li className="cursor-pointer rounded-lg transition-all hover:text-3xl hover:bg-blue-900 hover:p-3 hover:m-3">
            Home
          </li>
          <li className="cursor-pointer rounded-lg hover:text-3xl transition-all hover:bg-blue-900 hover:p-3 hover:m-3">
            Blog
          </li>
          <li className="cursor-pointer rounded-lg hover:text-3xl transition-all hover:bg-blue-900 hover:p-3 hover:m-3">
            News
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomeHeader;
