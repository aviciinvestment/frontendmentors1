import React from "react";

const Button = ({ children, submit, datauser }) => {
  return (
    <button
      className=" w-[70%] hover:ring-offset-[1px] transition-all outline-none py-6 my-8 text-white bg-blue-700 border-none  rounded-full hover:ring-[1px] ring-fuchsia-700 p-3"
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
