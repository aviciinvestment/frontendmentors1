import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  return (
    <div className="w-[30rem] m-auto">
      <div className="flex flex-col text-white bg-gray-950 p-4 rounded-lg">
        <form>
          <fieldset className="flex flex-col">
            <label className="text-center text-2xl uppercase font-bold my-4">
              Login
            </label>
            <input
              placeholder="gmail Address"
              className="rounded-sm m-4 p-2 bg-gray-600 hover:ring-[0.5px] focus:ring-[0.5px] ring-offset-1 ring-white outline-none border-none"
              type="text"
            />
          </fieldset>
        </form>
        <div className="self-center">
          <ul className="flex gap-2">
            <li>
              <FaGoogle className="size-8" />
            </li>
            <li>
              <FaFacebook className="size-8" />
            </li>
            <li>
              <FaLinkedin className="size-8" />
            </li>
          </ul>
        </div>
      </div>
      <div className="text-white flex justify-between p-4">
        <h1 className="cursor-pointer">Forgot password</h1>
        <h1 className="cursor-pointer">Create Account</h1>
      </div>
    </div>
  );
};

export default Login;
