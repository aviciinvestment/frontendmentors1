import React from "react";
import { Link } from "react-router-dom";

const Aboutitem = ({ image, text, link }) => {
  return (
    <div>
      <Link to={link}>
        <div>
          <img
            className="w-full border-b-4 border-fuchsia-600"
            src={image}
            alt="ai"
          />
          <div className="text-2xl p-7 font-bold">{text}</div>
        </div>
      </Link>
    </div>
  );
};

export default Aboutitem;
