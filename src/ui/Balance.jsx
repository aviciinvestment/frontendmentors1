import Button from "./Button";

const Balance = ({ balance, setBalance }) => {
  return (
    <div>
      <div className="flex flex-col gap-10">
        <div
          className={`bg-blue-100 rounded-md shadow-inner shadow-black ${
            balance === 0 ? "text-red-600" : "text-green-600"
          } p-4 text-center text-2xl`}
        >
          <h1>NGN {balance}</h1>
        </div>
        <h1 className="font-bold text-3xl text-center uppercase text-fuchsia-900">
          Balance
        </h1>

        <button
          onClick={() => {
            setBalance(balance + 1000);
          }}
          className=" w-[70%] hover:ring-offset-2 m-auto transition-all outline-none text-white bg-blue-400 border-none  rounded-[10px] hover:ring-4 ring-fuchsia-300 p-3"
        >
          ADD MONEY
        </button>
      </div>
    </div>
  );
};

export default Balance;
