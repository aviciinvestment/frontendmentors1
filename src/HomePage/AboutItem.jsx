import React from "react";

const AboutItem = ({ key, logo, children, title }) => {
  return (
    <div
      key={`${key}`}
      className="py-[50px] text-center flex flex-col items-center"
    >
      <div className="bg-blue-800 p-2 rounded-full w-[60px] flex">{logo}</div>
      <h1 className="text-white text-2xl">{title}</h1>
      <p className="text-gray-400">{children}</p>
    </div>
  );
};

export default AboutItem;
