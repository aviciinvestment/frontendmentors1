import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="gap-5">
      <div>
        <span className=" shadow-sm rounded-full shadow-gray-700 text-black p-1">
          WELCOME
        </span>{" "}
        ; to Clouds...
      </div>
      <div>Perform All your online trade with the best of experiences</div>
      <div>
        <span>motto:</span>You can bank on us
      </div>
      <div className="mt-4">
        <span className=" cursor-pointer bg-fuchsia-600 shadow-sm hover:shadow-inner rounded-full shadow-gray-700 text-white p-3">
          <Link to="about">GET STARTED</Link>
        </span>
      </div>
    </div>
  );
};

export default Landing;
