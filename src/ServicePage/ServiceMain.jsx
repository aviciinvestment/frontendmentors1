import React from "react";

const ServiceMain = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-blue-950 text-3xl font-extrabold">
        Insert your One Time{" "}
      </h1>
      <div className="bg-gray-200 contrast-20 rounded-lg p-3 font-bold m-3">
        Debit Card Details
      </div>
      <div className=" bg-gray-200 contrast-20 p-6">
        <div>
          <label htmlFor="">Debit Card Number</label>
          <br />
          <input type="text" />
        </div>
        <div className="flex justify-center">
          <div>
            <label htmlFor="">Expiration Date</label>
            <br />
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Security Code</label>
            <br />
            <input type="text" />
          </div>
        </div>

        <div>
          <label htmlFor="">CardHolder's Name</label>
          <br />
          <input type="text" />
        </div>
      </div>
      <div>and dont worry about subscriptions forever</div>
    </div>
  );
};

export default ServiceMain;
