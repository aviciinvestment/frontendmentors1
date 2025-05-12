import React from "react";

const Button = ({ children, submit, datauser }) => {
  return (
    <button
      className=" w-[70%] hover:ring-offset-2 transition-all outline-none text-white bg-blue-500 border-none  rounded-full hover:ring-4 ring-fuchsia-700 p-3"
      data-user={datauser}
      type="submit"
      onClick={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
