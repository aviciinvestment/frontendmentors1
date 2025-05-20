import { Link } from "react-router-dom";
import Login from "../ui/Login";

const Landing = () => {
  return (
    <div className="h-full">
      <div className="gap-5 text-white text-center my-36">
        <h1 className="text-2xl font-bold text-gray-600">
          <span className="text-yellow-300">FAST </span>&
          <span className="text-blue-500"> STABLE</span>
        </h1>
        <h3 className="font-extrabold text-[2.5rem] text-gray-400">VTU</h3>
      </div>
      <Login />
    </div>
  );
};

export default Landing;
