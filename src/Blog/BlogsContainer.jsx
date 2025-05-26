import React from "react";
import { IoMdCash } from "react-icons/io";
const BlogsContainer = () => {
  return (
    <div className="my-3 bg-white sm:min-w-52 sm:min-h-44  border-[1px] border-gray-200 rounded-lg shadow-sm shadow-gray-300">
      <IoMdCash className="size-[50%] m-auto py-2" />
      <h1 className="text-center text-xl font-bold">Wallet</h1>
      <h1 className="text-center py-2 text-blue-700 text-xs font-semibold">
        Secured and safe
      </h1>
    </div>
  );
};

export default BlogsContainer;
