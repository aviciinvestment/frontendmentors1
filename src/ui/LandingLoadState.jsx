import React from "react";
import { RiCircleFill } from "react-icons/ri";

const LandingLoadState = () => {
  return (
    <div>
      <div>
        {/*///////////////////////*/}
        <div className="px-6 py-20 flex items-center justify-center bg-gray-600 w-[800px] h-[286px] rounded-3xl">
          <div>
            <div className="flex items-center justify-center space-y-2 gap-2">
              <RiCircleFill className="text-xl animate-bounce" />
              <RiCircleFill className="text-xl animate-bounce delay-1000" />
              <RiCircleFill className="text-xl animate-bounce delay-500" />
            </div>
            <div className="font-light text-xl">Loading...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingLoadState;
