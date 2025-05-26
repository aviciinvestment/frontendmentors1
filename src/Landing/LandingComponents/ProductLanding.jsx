import React from "react";
import Buttons from "../../ui/Buttons";
import placeholder from "../../Assets/placeholder.jpg";
const ProductLanding = () => {
  return (
    <div className="flex justify-between bg-white w-full p-3 shadow-sm border-[1px] border-gray-100 shadow-gray-300 items-center">
      <div className="">
        <div className="flex items-center flex-wrap gap-1 py-5">
          <img className="w-5 h-5 rounded-full" src={placeholder} alt="" />
          <h1 className="text-xs text-gray-600">
            Just <span className="font-bold">purchased..</span>
          </h1>
          <Buttons> Buy Now </Buttons>
        </div>
        <h1 className="text-xs leading-loose font-semibold p-1">
          Any transaction from as low as
        </h1>
        <h1 className="text-blue-600 leading-tight font-bold text-[20px]">
          200 NGN
        </h1>
      </div>
      <img className="w-[30%] md:h-72 opacity-15" src={placeholder} alt="" />
    </div>
  );
};

export default ProductLanding;
