import { useContext } from "react";
import Button from "./Button";
import { MyContext } from "../Context/CustomContext";

const Balance = () => {
  const { balance, setBalance } = useContext(MyContext);
  return (
    <div>
      <div className="flex justify-between gap-5 w-[75%] m-auto sm:w-[70%] py-5">
        <div className="flex flex-col justify-left gap-5 w-28 py-5">
          <h1 className="text-xl font-extrabold self-center">Balance</h1>
          <div
            className={`${
              balance === 0 ? "text-red-600" : "text-green-600"
            } text-xs bg-gray-200 text-center p-2`}
          >
            <h1>NGN: {balance}</h1>
          </div>
        </div>

        <button
          onClick={() => {
            setBalance(balance + 1000);
          }}
          className="bg-blue-800 p-2 self-center rounded-[2px] shadow-sm text-white shadow-gray-400"
        >
          Add money
        </button>
      </div>
    </div>
  );
};

export default Balance;
