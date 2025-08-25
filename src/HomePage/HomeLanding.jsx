import React, { useState } from "react";
import ambassador from "../Assets/ambassador.jpeg";
import ambassador2 from "../Assets/ambassador2.jpeg";

const HomeLanding = () => {
  const [welcomeMessage, SetWelcomeMessage] = useState(true);
  return (
    <div>
      <div>
        <img
          className="mix-blend-multiply w-full opacity-20 contrast-50 sm:hidden"
          src={ambassador}
          alt=""
        />
        <img
          className="opacity-20 mix-blend-multiply w-full contrast-50 sm:static absolute invisible sm:visible "
          src={ambassador2}
          alt=""
        />
      </div>

      <div className="sm:my-[150px] my-[150px] text-white text-center absolute top-0 w-full">
        <h1 className="text-gray-700 text-2xl font-bold">
          All-in-one-online subscriptions
        </h1>
        <div className=" font-normal m-auto">
          <h1 className="sm:text-[40px] md:text-[60px] lg:text-[100px] font-extrabold text-red-950 text-[40px]">
            Smart And Simple
            <div
              onClick={() => {
                SetWelcomeMessage(!welcomeMessage);
              }}
              className={`border-2 ${
                welcomeMessage
                  ? "border-l-[20px]"
                  : "border-r-[20px] rounded-md bg-blue-100 border-l-2"
              } cursor-pointer transition-all border-red-950  mx-9 flex flex-col items-center`}
            >
              <div className="text-[20px]">
                {welcomeMessage ? "Welcome To Paya" : "Online service"}
              </div>
            </div>
          </h1>
          <p className="text-gray-800 text-xl font-bold mx-9 my-4">
            with our secured online space, you can manage all your online
            subscrition all in one place without exposing your pin at every
            instance
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeLanding;
