import React from "react";

import {
  FaArrowUp,
  FaBusinessTime,
  FaFacebook,
  FaHeadphones,
  FaInstagram,
  FaLinkedinIn,
  FaLocationArrow,
  FaLocationCrosshairs,
  FaLocationPin,
  FaMailchimp,
  FaTelegram,
  FaTwitter,
  FaUps,
  FaVoicemail,
} from "react-icons/fa6";
import ambassador2 from "../Assets/ambassador2.jpeg";

const HomeFooter = ({ handleTopScroll }) => {
  return (
    <div className="bg-white text-blue-950  h-52 px-2">
      {/*////////////////////////////////*/}
      <div className="flex p-2 text-white sm:flex-row flex-col items-center sm:justify-between bg-gradient-to-t from-blue-950 contrast-200 to-blue-900  px-1 flex-wrap">
        <div className="self-center">
          Fast Transactions and returns every 24 hours
        </div>
        <div className="flex sm:flex-row flex-col items-center sm:justify-between gap-8">
          <div className="flex items-center gap-2">
            <FaBusinessTime />
            08:00 am - 08:00pm
          </div>
          <div className="flex items-center gap-3">
            Visit Us
            <FaFacebook />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
      </div>
      {/*////////////////////////////////*/}
      <div className="text-blue-950">
        <div className=" sm:flex-row flex flex-col justify-center gap-6 sm:justify-between items-center px-2 py-2">
          <div className=" flex justify-between text-white items-center">
            <div className="p-4  gap-2 flex">
              <div className="w-6 skew-x-12 bg-blue-400 h-10"></div>
              <div className="self-center text-green-950 font-extrabold text-xl">
                Swift
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaLocationPin />
            <div>
              <p>Office Location</p>
              <h1>32 avenue unizik</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaMailchimp />
            <div>
              <p>Office Location</p>
              <h1>32 avenue unizik</h1>
            </div>
          </div>
          <div className="flex  items-center gap-2">
            <FaTelegram />
            <div>
              <p>Office Location</p>
              <h1>32 avenue unizik</h1>
            </div>
          </div>
          <div>
            <button className="bg-blue-950 text-white p-2 rounded-full">
              meet with us{" "}
            </button>
          </div>
        </div>
      </div>

      {/*////////////////////////////////*/}
      <div className="flex justify-center items-center bg-blue-900 text-white relative">
        <img className="mix-blend-multiply" src={ambassador2} alt="img" />
        <div className="absolute text-center ">
          <h1 className="font-extrabold text-2xl">Contact Us</h1>
          <p className="text-gray-300 text-xs cursor-pointer underline underline-offset-2">
            <a href="#">PAYA</a>
          </p>
        </div>
      </div>
      {/*////////////////////////////////*/}
      <div className="sm:grid grid-cols-2 px-7 sm:px-24 py-16">
        <div className="">
          <h1 className="text-xs font-extrabold">CONTACT US</h1>
          <p className="font-serif text-2xl font-black">Let's work together</p>
          <p className="text-xs">
            thank you for your interest in attach web agency we're excited to
            hear from you
          </p>
          <div className="flex items-center gap-4 py-9">
            <FaHeadphones className="bg-blue-200 w-9 h-9 p-1 rounded-full" />
            <div>
              <p>call us for enquiry</p>
              <h1>+234(657)7477488</h1>
            </div>
          </div>
          <div className="flex items-center gap-4 py-9">
            <FaVoicemail className="bg-blue-200 w-9 h-9 p-1 rounded-full" />
            <div>
              <p>call us for enquiry</p>
              <h1>+234(657)7477488</h1>
            </div>
          </div>
          <div className="flex items-center gap-4 py-9">
            <FaLocationCrosshairs className="bg-blue-200 w-9 h-9 p-1 rounded-full" />
            <div>
              <p>call us for enquiry</p>
              <h1>+234(657)7477488</h1>
            </div>
          </div>
        </div>
        <div>
          <form action="" className="flex flex-col">
            <div className="flex flex-col sm:flex-row justify-between">
              <input
                className="w-[95%] sm:w-[40%] outline-none hover:ring-2 ring-green-950 ring-offset-4 bg-gray-200 p-3 my-4 mx-2 rounded-full"
                placeholder="Your Name"
                type="text"
              />
              <input
                className="w-[95%] sm:w-[40%] outline-none hover:ring-2 ring-green-950 ring-offset-4 bg-gray-200 p-3 my-4 mx-2 rounded-full"
                placeholder="Email Address"
                type="text"
              />
            </div>
            <input
              className="outline-none hover:ring-2 ring-green-950 ring-offset-4 bg-gray-200 p-3 my-4 mx-2 rounded-full"
              placeholder="Phone Number"
              type="text"
            />
            <input
              className="outline-none hover:ring-2 ring-green-950 ring-offset-4 bg-gray-200 p-3 my-4 mx-2 rounded-full"
              placeholder="Select Service"
              type="text"
            />
            <textarea
              className="outline-none hover:ring-2 ring-green-950 ring-offset-4 bg-gray-200 p-3 my-4 mx-2 rounded-md"
              placeholder="type your message"
              name=""
              id=""
            ></textarea>
            <button className="bg-blue-950 text-white p-2 rounded-full">
              Send Us Message{" "}
            </button>
          </form>
        </div>
      </div>
      {/*////////////////////////////////*/}
      <div className="bg-gray-200 w-full h-56 flex justify-center items-center">
        <h1 className="text-[100px] text-white">MAP</h1>
      </div>
      {/*////////////////////////////////*/}
      <div className="bg-blue-950 text-white ">
        <div className="border-b-[1px] border-gray-700 text-white flex flex-col justify-center items-center text-center gap-3s">
          <div className="p-4  gap-2 flex">
            <div className="w-6 skew-x-12 bg-blue-400 h-10"></div>
            <div className="self-center font-extrabold text-xl">Swift</div>
          </div>
          <p className="text-xs">
            delton selcon melcon fieljdn hbsdyuy9jsk hshshbr udjihlwuie
            uihcuhwieui iuhsfu
          </p>
          <div className="flex py-3 gap-3">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>

        <div className=" border-b-[1px] border-gray-700 sm:grid grid-cols-4 px-8 py-7 text-center flex-col gap-8 flex">
          <div>
            <h1 className="font-bold font-serif">Company</h1>
            <ul className="text-xs flex flex-col gap-3">
              <li>Help Center</li>
              <li>Terms And Conditon</li>
              <li>Delivery pricing</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold font-serif">Company</h1>
            <ul className="text-xs flex flex-col gap-3">
              <li>Help Center</li>
              <li>Terms And Conditon</li>
              <li>Delivery pricing</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold font-serif">Company</h1>
            <ul className="text-xs flex flex-col gap-3">
              <li>Help Center</li>
              <li>Terms And Conditon</li>
              <li>Delivery pricing</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold font-serif">Subscribe News Letter</h1>
            <p>to subscribe to our newsleter you nedd to be subscribed to it</p>
            <div className="bg-blue-900 rounded-full flex">
              <input
                className="bg-blue-900 p-2 w-full rounded-l-full"
                placeholder="Your Email Address"
                type="text"
              />
              <button className="bg-blue-800 rounded-full w-full">
                SIGN UP
              </button>
            </div>
          </div>
        </div>
        <div className=" relative flex gap-3 text-center  py-2 text-xs sm:flex-row flex-col justify-between px-3">
          <h1>@2025 Swift. All Right Reserved.</h1>
          <h1 className="font-bold text-xl">wwww.swift.com</h1>
          <div className="flex justify-between ">
            <h1 className="p-1">Security</h1>
            <h1 className="border-l-[1px] border-gray-500 p-1">
              Privacy & Cookie Policy
            </h1>
            <h1 className="border-l-[1px] border-gray-500 p-1">
              Terms of Services
            </h1>
          </div>
        </div>
        <div
          onClick={handleTopScroll}
          className="animate-bounce relative w-8 left-64 bottom-4 bg-blue-800 p-2 rounded-full "
        >
          <FaArrowUp />
        </div>
      </div>
      {/*////////////////////////////////*/}
    </div>
  );
};

export default HomeFooter;
