import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import image from "../assets/Cloud Airplane Logo.jpg";
import Footer from "../ui/Footer";
import Landing from "./Landing";

const Homepage = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div
      className="w-full px-10 h-lvh flex flex-col bg-blue-50"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundBlendMode: "darken",
      }}
    >
      <div className="flex items-center justify-between">
        <div>
          <Link className="flex items-center" to="/">
            <img className="mix-blend-darken w-[20%]" src={image} alt="" />
            <div className="font-bold text-xl">Clouds services</div>
          </Link>
        </div>
        <div>
          <span className="cursor-pointer text-xs bg-fuchsia-300 shadow-sm hover:shadow-inner rounded-full shadow-gray-700 text-white p-3">
            <Link to="/login">Login/Signup</Link>
          </span>
        </div>
      </div>
      {location.pathname === "/about" ? (
        <Outlet />
      ) : (
        <div className="basis-[70%] text-fuchsia-950 flex self-center flex-col justify-center text-2xl font-bold items-center ">
          <Landing />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Homepage;
