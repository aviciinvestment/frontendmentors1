const DropDown = ({ children, iconunit }) => {
  return (
    <div className="flex ">
      <div className="flex rounded-l-md items-center bg-gray-500 contrast-75 brightness-75 ">
        <img className="size-5 m-2" src={iconunit} alt="" />
      </div>
      <select
        className="bg-gray-500 contrast-75 brightness-75
         text-white p-1 rounded-md rounded-l-none outline-none border-none
          hover:ring-1 ring-white"
        name=""
        id=""
      >
        {children}
      </select>
    </div>
  );
};

export default DropDown;
