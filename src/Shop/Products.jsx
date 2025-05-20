import React from "react";

const Products = ({ background, setService, service }) => {
  if (background > 1) return;
  return (
    <div>
      <div data-user="stick" className="w-full flex justify-around  p-2">
        <div
          data-user="stick"
          className={`w-[20%] h-24 ${
            service === "MTN" ? "bg-yellow-100" : "bg-yellow-300"
          } text-white flex flex-col cursor-pointer justify-center text-center text-xs shadow-lg rounded-xl`}
          onClick={() => {
            setService("MTN");
          }}
        >
          <div data-user="stick">MTN</div>
        </div>
        <div
          data-user="stick"
          className={`w-[20%] h-24 ${
            service === "AIRTEL" ? "bg-red-100" : "bg-red-500"
          } text-white flex cursor-pointer flex-col justify-center text-center shadow-lg text-xs rounded-xl`}
          onClick={() => {
            setService("AIRTEL");
          }}
        >
          <div data-user="stick"> AIRTEL</div>
        </div>
        <div
          data-user="stick"
          className={`w-[20%] ${
            service === "GLO" ? "bg-green-100" : "bg-green-600"
          } h-24  text-white cursor-pointer flex flex-col justify-center text-center shadow-lg text-xs rounded-xl`}
          onClick={() => {
            setService("GLO");
          }}
        >
          <div data-user="stick">GLO</div>
        </div>
        <div
          data-user="stick"
          className={`w-[20%] ${
            service === "9-MOBILE" ? "bg-green-200" : "bg-green-700"
          } h-24  text-black text-xs flex flex-col justify-center text-center shadow-lg rounded-xl`}
          onClick={() => {
            setService("9-MOBILE");
          }}
        >
          <div data-user="stick">9-MOBILE</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
