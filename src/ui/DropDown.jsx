const DropDown = ({ children }) => {
  return (
    <div className="flex ">
      <div className="flex rounded-l-md items-center bg-gray-500 contrast-75 brightness-75 "></div>
      <select
        className="bg-gray-500 contrast-75  brightness-110
         text-white py-2 px-2 rounded-md outline-none border-none
          hover:ring-1 ring-white text-base"
        name=""
        id=""
      >
        {children}
      </select>
    </div>
  );
};

export default DropDown;
