import React from "react";
import { RiCircleFill } from "react-icons/ri";

const LandingLoadState = () => {
  return (
    <main className="text-left">
      <div className="container mx-auto my-4 ">
        <div className="flex flex-col md:flex-row justify-center  md:gap-12 gap-8">
          <div className="flex flex-col justify-start  md:gap-12 gap-8">
            <div className="flex flex-col  justify-center  md:gap-8 gap-4">
              {
                /////////////////////////////////.
              }
              <div className="px-6 py-20 flex items-center justify-center bg-gray-600 w-full h-[286px] rounded-3xl">
                <div>
                  <div className="flex items-center justify-center space-y-2 gap-2">
                    <RiCircleFill className="text-xl animate-bounce" />
                    <RiCircleFill className="text-xl animate-bounce delay-1000" />
                    <RiCircleFill className="text-xl animate-bounce delay-500" />
                  </div>
                  <div className="font-light text-xl">Loading...</div>
                </div>
              </div>
              {
                /////////////////////////////
              }
              <div className="grid sm:grid-cols-4 h-28 mt-8 mb-12 grid-cols-2 gap-[24px]">
                <div className="bg-gray-500 h-full contrast-100 brightness-75 text-left p-5 rounded-xl w-auto">
                  <p className="text-xl text-gray-300">Feels Like</p>
                  <h1 className="text-2xl ">_</h1>
                </div>
                <div className="bg-gray-500 contrast-100 brightness-75 text-left p-5 rounded-xl w-auto">
                  <p className="text-xl text-gray-300">Humidity</p>
                  <h1 className="text-2xl ">_</h1>
                </div>
                <div className="bg-gray-500 contrast-100 brightness-75 text-left p-5 rounded-xl w-auto">
                  <p className="text-xl text-gray-300">Wind</p>
                  <h1 className="text-2xl ">_</h1>
                </div>
                <div className="bg-gray-500 contrast-100 brightness-75 text-left p-5 rounded-xl w-auto">
                  <p className="text-xl text-gray-300">Precipitation</p>
                  <h1 className="text-2xl ">_</h1>
                </div>
              </div>
              {
                ////////////////////////////
              }
            </div>
            {
              /////////////////////////////////
            }
            <div className="flex mt-14 sm:mt-2 flex-col justify-center gap-4 w-full">
              Daily Forcast
              <div className="h-40 flex justify-start gap-4 flex-wrap  w-full">
                <div className="flex h-full flex-col justify-center bg-gray-500 contrast-100  brightness-75  rounded-xl min-w-32 flex-grow max-w-40 w-auto p-3">
                  <div className="text-white text-lg"></div>
                  <div className="self-center"></div>
                  <div className="text-lg text-white flex justify-between">
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className="flex flex-col justify-center bg-gray-500 contrast-100  brightness-75  rounded-xl min-w-32 flex-grow max-w-40 w-auto p-3">
                  <div className="text-white text-lg"></div>
                  <div className="self-center"></div>
                  <div className="text-lg text-white flex justify-between">
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className="flex flex-col justify-center bg-gray-500 contrast-100  brightness-75  rounded-xl min-w-32 flex-grow max-w-40 w-auto p-3">
                  <div className="text-white text-lg"></div>
                  <div className="self-center"></div>
                  <div className="text-lg text-white flex justify-between">
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className="flex flex-col justify-center bg-gray-500 contrast-100  brightness-75  rounded-xl min-w-32 flex-grow max-w-40 w-auto p-3">
                  <div className="text-white text-lg"></div>
                  <div className="self-center"></div>
                  <div className="text-lg text-white flex justify-between">
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className="flex flex-col justify-center bg-gray-500 contrast-100  brightness-75  rounded-xl min-w-32 flex-grow max-w-40 w-auto p-3">
                  <div className="text-white text-lg"></div>
                  <div className="self-center"></div>
                  <div className="text-lg text-white flex justify-between">
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className="flex flex-col justify-center bg-gray-500 contrast-100  brightness-75  rounded-xl min-w-32 flex-grow max-w-40 w-auto p-3">
                  <div className="text-white text-lg"></div>
                  <div className="self-center"></div>
                  <div className="text-lg text-white flex justify-between">
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className="flex flex-col justify-center bg-gray-500 contrast-100  brightness-75  rounded-xl min-w-32 flex-grow max-w-40 w-auto p-3">
                  <div className="text-white text-lg"></div>
                  <div className="self-center"></div>
                  <div className="text-lg text-white flex justify-between">
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            {
              ////////////////////////////////////
            }
            <div className="flex flex-col gap-4  h-full rounded-5 bg-gray-600 p-6 w-full md:w-96">
              <div className="flex w-full py-2 justify-between">
                <div className="text-left">Hourly forecast</div>
                <div>
                  <select className="bg-gray-600">
                    <option value=""></option>
                  </select>
                </div>
              </div>
              <div className="pl-3 pr-4 py-3 flex rounded-2 h-full justify-between items-center text-white bg-gray-500 contrast-75  brightness-110 w-auto rounded-lg ">
                <div className="flex gap-4 brightness-200 text-left items-center">
                  <div className="text-xl"></div>
                </div>
                <div className="text-lg">
                  <sup></sup>
                </div>
              </div>
              <div className="pl-3 pr-4 py-3 flex h-full justify-between items-center text-white bg-gray-500 contrast-75  brightness-110 w-auto rounded-lg ">
                <div className="flex gap-4 brightness-200 text-left items-center">
                  <div className="text-xl"></div>
                </div>
                <div className="text-lg">
                  <sup></sup>
                </div>
              </div>
              <div className="pl-3 pr-4 py-3 flex h-full justify-between items-center text-white bg-gray-500 contrast-75  brightness-110 w-auto rounded-lg ">
                <div className="flex gap-4 brightness-200 text-left items-center">
                  <div className="text-xl"></div>
                </div>
                <div className="text-lg">
                  <sup></sup>
                </div>
              </div>
              <div className="pl-3 pr-4 py-3 flex h-full justify-between items-center text-white bg-gray-500 contrast-75  brightness-110 w-auto rounded-lg ">
                <div className="flex gap-4 brightness-200 text-left items-center">
                  <div className="text-xl"></div>
                </div>
                <div className="text-lg">
                  <sup></sup>
                </div>
              </div>
              <div className="pl-3 pr-4 py-3 flex h-full justify-between items-center text-white bg-gray-500 contrast-75  brightness-110 w-auto rounded-lg ">
                <div className="flex gap-4 brightness-200 text-left items-center">
                  <div className="text-xl"></div>
                </div>
                <div className="text-lg">
                  <sup></sup>
                </div>
              </div>
              <div className="pl-3 pr-4 py-3 flex h-full justify-between items-center text-white bg-gray-500 contrast-75  brightness-110 w-auto rounded-lg ">
                <div className="flex gap-4 brightness-200 text-left items-center">
                  <div className="text-xl"></div>
                </div>
                <div className="text-lg">
                  <sup></sup>
                </div>
              </div>
              <div className="pl-3 pr-4 py-3 flex h-full justify-between items-center text-white bg-gray-500 contrast-75  brightness-110 w-auto rounded-lg ">
                <div className="flex gap-4 brightness-200 text-left items-center">
                  <div className="text-xl"></div>
                </div>
                <div className="text-lg">
                  <sup></sup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingLoadState;
