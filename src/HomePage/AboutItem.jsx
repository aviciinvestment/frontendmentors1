import React from "react";

const AboutItem = ({ key, logo, children, title, scrollRef }) => {
  return (
    <div
      key={`${key}`}
      ref={scrollRef}
      className="py-[50px] basis-[33.3%] text-center flex flex-col items-center"
    >
      <div className="bg-blue-800 p-2 rounded-full flex">{logo}</div>
      <h1 className="text-white text-2xl">{title}</h1>
      <p className="text-gray-300">{children}</p>
    </div>
  );
};

export default AboutItem;
