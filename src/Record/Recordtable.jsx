import React from "react";

const Recordtable = ({ purchased, status }) => {
  if (purchased.length === 0) return;
  return (
    <div className="my-12 w-[80%] m-auto">
      <table className="w-full text-xs font-sans text-center shadow-sm shadow-gray-500">
        <thead>
          <tr className="border-b-[1px] border-fuchsia-400">
            <th className="p-4">Amount</th>
            <th>Plan</th>
            <th>Number</th>
            <th>Service</th>
            <th>Date</th>
            <th>state</th>
          </tr>
        </thead>
        <tbody>
          <tr className="divide-x-[1px] divide-fuchsia-300">
            <td className="p-5">{purchased?.plan[0]}</td>
            <td>{purchased?.plan[1]}</td>
            <td>{purchased?.number}</td>
            <td>{purchased?.service_choosed}</td>
            <td>12/12/12</td>
            <td
              className={`${
                status ? "bg-green-600" : "bg-red-600"
              } text-white font-bold`}
            >
              {status ? "successful" : "failed"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Recordtable;
