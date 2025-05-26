import React from "react";
import BlogsContainer from "./BlogsContainer";

const Blogs = () => {
  return (
    <div className="w-[70%] m-auto py-24">
      <hr />
      <div className="relative text-center bg-red-50 w-[40%] m-auto -top-5 font-bold text-gray-500 text-3xl">
        See our offers
      </div>
      <div className="sm:flex w-[100%] shadow-sm shadow-gray-300 sm:overflow-x-auto sm:space-x-4 sm:p-4 snap-x snap-mandatory scrollbar-hide justify-between ">
        <BlogsContainer />
        <BlogsContainer />
        <BlogsContainer />
        <BlogsContainer />
        <BlogsContainer />
        <BlogsContainer />
        <BlogsContainer />
        <BlogsContainer />
      </div>
    </div>
  );
};

export default Blogs;
