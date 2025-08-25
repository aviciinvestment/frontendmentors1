import React from "react";
import AboutItem from "./AboutItem";
import Tab from "./Tab";

import { FaMoneyCheck } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaFileInvoice } from "react-icons/fa6";
import { FaSubscript } from "react-icons/fa6";
const project = "swift";
const HomeAbout = ({ scrollRef }) => {
  const TabsDetails = [
    {
      details: `in ${project} you can create an account and fund it, while we help with automated 
      subscriptions and give you feedback via notifications about activities going on `,
      title: `Funding Your Account`,
      logo: <FaMoneyCheck />,
    },

    {
      details: `${project} helps you control irrelevant debits from online services as they have direct access to your credit
      card,By giving you unique card pin at every subscription instance, and makes any deduction from your permission `,
      title: `Finance Control`,
      logo: <FaFileInvoice />,
    },

    {
      details: `${project} gives you proper breakdown of all your activities; subscriptions specifically, helps you breakdown
      your data and airtime subscriptions to fit best your budget and useability`,
      title: `Automating subscriptions of all kinds`,
      logo: <FaSubscript />,
    },
  ];
  const aboutItemsDetails = [
    {
      details: `update your profile and tell us more about yourself`,
      title: `Update Profile`,
      logo: (
        <FaUser className="size-12 bg-blue-700 p-1 self-center rounded-full" />
      ),
    },

    {
      details: `know who we are and how we can help you `,
      title: `About Us`,
      logo: (
        <FaPeopleGroup className="size-12 bg-blue-700 p-1 self-center rounded-full" />
      ),
    },

    {
      details: `upload card details and get unique card number
        for each subscription or payment which 
        changes after every hour 
        to ensure your security 
        also you can automate 
        payment and notification is sent to 
        user before subscrition is confirmed `,
      title: `upload card details and get started`,
      logo: (
        <FaMoneyCheck className="size-12 bg-blue-700 p-1 self-center rounded-full" />
      ),
    },
  ];
  return (
    <div className="bg-blue-950 contrast-200 rounded-t-3xl text-blue-300 text-center font-bold pt-[30px] ">
      <div>
        <h1 className=" ">why swift?</h1>
        <div className="text-[20px] text-white">
          The Only FinTech App <br />
          you ever Know
        </div>
        <p className="text-gray-300 font-normal">
          our online platform is user friendly and easy to navigate
        </p>
      </div>
      <div className="sm:flex justify-around">
        {aboutItemsDetails.map((elem, i) => {
          console.log(i);

          return (
            <AboutItem
              key={i}
              logo={elem.logo}
              title={elem.title}
              children={elem.details}
              scrollRef={scrollRef}
            />
          );
        })}
      </div>
      <div className="bg-white text-left p-3 sm:grid grid-cols-2">
        <div className="">
          <div>
            <h1 className="text-[30px] text-blue-950 leading-[35px]">
              Super convenient online Subscription And Purchase Management
              Center
            </h1>
            <p className="text-black">
              You can credit your account in swift,view transaction history and
              statements. also enable direct subscriptions from your bank and
              even set up custom alerts to help you stay on top of your
              finances.
            </p>
          </div>
          <div>
            {TabsDetails.map((elem, i) => {
              return (
                <Tab
                  key={i}
                  logo={elem.logo}
                  title={elem.title}
                  children={elem.details}
                />
              );
            })}
          </div>
        </div>
        <div className="text-black">
          <div className=" bg-gray-200 p-3">
            <div className="bg-white shadow-sm shadow-gray-200 border-[1px] border-gray-200 rounded-lg p-2 flex flex-col gap-4">
              <div className="flex justify-around">
                <div className="flex items-center gap-2">
                  <FaUser className="size-11 bg-gray-100 rounded-full" />
                  <h1>Alex Turner</h1>
                  <p>Designer</p>
                </div>
                <p className="text-white text-xs self-center bg-blue-950 p-2 rounded-full">
                  completed
                </p>
              </div>
              <div className="flex justify-around text-xs px-11">
                <div>
                  <p className="font-normal">company patronized</p>
                  <h1>jumia</h1>
                </div>
                <div>
                  <p className="font-normal">service purchased</p>
                  <h1>head phone</h1>
                </div>
                <div>
                  <p className="font-normal">Amount</p>
                  <h1>001</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-gradient-to-b from-blue-950 contrast-200 to-blue-900 p-4 text-white text-center">
            <h1>charges</h1>
            <button className="bg-white text-blue-900 p-2 px-3 rounded-full shadow-sm shadow-gray-600">
              $2000.00
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
