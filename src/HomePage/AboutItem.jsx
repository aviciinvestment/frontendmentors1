import React from "react";
import { Link } from "react-router-dom";

const AboutItem = ({ key, logo, children, title, scrollRef }) => {
  const logoPressed = title === "upload card details and get started";

  return (
    <div
      key={`${key}`}
      ref={scrollRef}
      className="py-[50px] cursor-pointer basis-[33.3%] text-center flex flex-col items-center"
    >
      <div className=" animate-pulse bg-blue-800 p-2 rounded-full flex">
        {logoPressed ? <Link to="/service">{logo}</Link> : logo}
      </div>
      <h1 className="text-white text-2xl">{title}</h1>
      <p className="text-gray-300">{children}</p>
    </div>
  );
};

export default AboutItem;
