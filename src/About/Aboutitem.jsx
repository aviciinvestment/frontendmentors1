import React from "react";
import { Link } from "react-router-dom";

const Aboutitem = ({ image, text, link }) => {
  return (
    <div className="p-3 text-white">
      <Link to={link}>
        <div>
          <img
            className="w-full border-b-4 border-fuchsia-600"
            src={image}
            alt="ai"
          />
          <div className="text-xl p-7 font-bold">{text}</div>
        </div>
      </Link>
    </div>
  );
};

export default Aboutitem;
