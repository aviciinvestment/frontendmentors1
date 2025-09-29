import React from "react";
import {
  RiDeleteBin6Line,
  RiProhibitedLine,
  RiRefreshLine,
} from "react-icons/ri";

const LandingError = () => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <div>
        <RiProhibitedLine className="text-gray-300 size-12" />
      </div>
      <div className="text-5xl font-Bricolage_Grotesque text-white ">
        Something Went Wrong
      </div>
      <div className="font-DMSans text-xl text-center font-medium text-gray-300">
        <p>
          We couldn't connect to the server (API Error). Please try <br />
          again in a few minute.{" "}
        </p>
      </div>
      <div className="cursor-pointer text-white font-light px-4 py-3 gap-3 rounded-lg bg-gray-600 flex items-center ">
        <RiRefreshLine className="size-4 " />
        <div>Retry</div>
      </div>
    </div>
  );
};

export default LandingError;
