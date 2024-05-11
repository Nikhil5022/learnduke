import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import TeachingNavbar from "./TeachingNavbar";
import teachingjobs from "../assets/teachingjobs.jpg";
import companies from "../assets/companies.jpg";
import image from "../assets/image.jpg";
import DosAndDonts from "./DosAndDonts";
import { useNavigate } from "react-router-dom";
export default function Teachingjobs() {
  const navigator = useNavigate();
  return (
    <div>
      <div className="bg-orange-400 w-full h-10 flex justify-center items-center">
        <div className="w-full md:w-10/12 lg:w-9/12 flex items-center justify-between px-4">
          <div className="hidden md:flex text-white space-x-5 text-lg">
            <FaFacebook />
            <FaInstagram />
          </div>
          <div className="text-white flex-grow flex justify-center">
            <div className="text-sm font-semibold">
              The #1 job site to find a teaching job for you
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full md:w-10/12 lg:w-9/12 px-4">
          <TeachingNavbar />
        </div>
      </div>
      <hr className="mt-3 mb-5" />
      <div className="w-full flex justify-center">
        <div className="w-full md:w-10/12 lg:w-9/12 flex flex-col md:flex-row px-4">
          <img
            src={teachingjobs}
            alt=""
            className="w-full md:w-1/2 mb-5 md:mb-0"
          />
          <div className="flex flex-col p-4 md:p-10">
            <div className="text-4xl font-bold m-3 leading-relaxed tracking-wider">
              Find an authentic teaching job for you
            </div>
            <div
              className="text-lg leading-loose tracking-wider ml-3"
              style={{ color: "#404040" }}
            >
              Welcome to LearnDuke, the{" "}
              <span className="font-semibold">best site</span> for Indians 🇮🇳
              seeking teaching work! Browse{" "}
              <span className="font-semibold">thousands</span> of{" "}
              <span className="font-semibold">teaching jobs</span> across all
              major industries and find your perfect teaching job today.
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-10">
        <div className="w-full md:w-10/12 lg:w-9/12 flex flex-col space-y-6 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-100">
              <div className="text-xl font-bold leading-relaxed tracking-wide mb-3">
                We see every job before you do
              </div>
              <div
                className="leading-relaxed tracking-wide font-thin"
                style={{ color: "#404040" }}
              >
                Our specialty is finding job opportunities from multiple sources
                in real time, before they're visible to everyone else. This
                gives you the advantage to apply for these jobs before anyone
                else does.
              </div>
            </div>
            <div className="p-4 bg-gray-100">
              <div className="text-xl font-bold leading-relaxed tracking-wide mb-3">
                We see every job before you do
              </div>
              <div
                className="leading-relaxed tracking-wide font-thin"
                style={{ color: "#404040" }}
              >
                Our specialty is finding job opportunities from multiple sources
                in real time, before they're visible to everyone else. This
                gives you the advantage to apply for these jobs before anyone
                else does.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-100">
              <div className="text-xl font-bold leading-relaxed tracking-wide mb-3">
                We see every job before you do
              </div>
              <div
                className="leading-relaxed tracking-wide font-thin"
                style={{ color: "#404040" }}
              >
                Our specialty is finding job opportunities from multiple sources
                in real time, before they're visible to everyone else. This
                gives you the advantage to apply for these jobs before anyone
                else does.
              </div>
            </div>
            <div className="p-4 bg-gray-100">
              <div className="text-xl font-bold leading-relaxed tracking-wide mb-3">
                We see every job before you do
              </div>
              <div
                className="leading-relaxed tracking-wide font-thin"
                style={{ color: "#404040" }}
              >
                Our specialty is finding job opportunities from multiple sources
                in real time, before they're visible to everyone else. This
                gives you the advantage to apply for these jobs before anyone
                else does.
              </div>
            </div>
          </div>
          <div className="items-center" style={{ color: "#404040" }}>
            <div className="text-center text-xl md:text-3xl font-semibold mt-12">
              Great employers actively offering remote jobs
            </div>
            <div className="mt-10">
              <img src={companies} alt="" className="w-full" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-2xl md:text-4xl font-bold p-5 mb-5 text-center px-3 md:px-16">
              The #1 Remote Job Site for Genuine Opportunities for Indians.
            </div>
            <button className="bg-blue-500 text-white p-2 px-4 hover:scale-105">
              Find teaching jobs now
            </button>
          </div>
          <div className="mt-10">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            <div className="text-2xl font-bold m-3">How it works: </div>
            <ol className="ml-4 md:ml-10">
              <li className="m-1 leading-relaxed tracking-wide">
                <span className="font-semibold " style={{ color: "#404040" }}>
                  Step 1:{" "}
                </span>
                Complete the checkout process and place your order.
              </li>
              <li className="m-1 leading-relaxed tracking-wide">
                <span className="font-semibold " style={{ color: "#404040" }}>
                  Step 2:{" "}
                </span>
                Immediately after placing your order, you will receive an email
                containing a link to access remote job vacancies.
              </li>
              <li className="m-1 leading-relaxed tracking-wide">
                <span className="font-semibold " style={{ color: "#404040" }}>
                  Step 3:{" "}
                </span>
                Browse through the listings, apply for the positions that match
                your skills and interests, and get hired.
              </li>
            </ol>
            <div className="text-xl font-bold m-3">
              Wide range of remote job categories for freshers and experienced
              candidates:
            </div>
            <div
              className="mt-5 m-3  leading-relaxed tracking-wider"
              style={{ color: "#404040" }}
            >
              We offer job listings in various categories such as Accounting &
              Finance, Business & Management, Computer & IT, Content Creation,
              Customer Service, Data Entry, Data Science & Analytics, Design,
              Education & Training, Engineering, HR & Recruiting, Sales &
              Marketing, and many more.
            </div>
          </div>
          <div className="flex flex-col md:flex-row px-3 md:px-10">
            <div className="w-full md:w-1/2">
              <img src={teachingjobs} alt="" className="w-full" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col  md:px-10">
              <div
                className="text-lg font-thin tracking-wide text-left m-2 mt-5"
                style={{ color: "#404040" }}
              >
                Buy one year membership to gain unlimited access to all job
                vacancies.
              </div>
              <div className="text-3xl font-semibold tracking-wider text-left m-2">
                Find an authentic remote job for you
              </div>
              <div className="text-left m-2">
                <span className="text-lg font-bold">Rs. 699.00</span>
                <span className="text-white text-sm bg-orange-600 rounded-lg px-2 py-1 ml-2">
                  sale
                </span>
              </div>
              <button className="w-full border border-blue-500 py-4 text-blue-500 hover:border-2 ">
                Add to cart
              </button>
              <button
                className="w-full text-white bg-blue-500 py-4 mt-2 hover:scale-105"
                onClick={() => {
                  window.open("https://rzp.io/l/learndukeindia", "_blank");
                }}
              >
                Buy it now
              </button>

              <div className="font-thin text-blue-500 hover:cursor-pointer mt-5 hover:underline">
                view full details
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-center text-3xl font-semibold">Join now</div>
            <div
              className="font-thin text-center tracking-wide mt-5"
              style={{ color: "#040404" }}
            >
              Click on the button below to know more details and apply for
              remote jobs.
            </div>
            <button className="bg-blue-500 text-white w-fit p-2 px-4 hover:scale-105 mt-5">
              Find teaching jobs now
            </button>
          </div>
          {/* table */}
          <div className="w-full">
            <DosAndDonts />
          </div>
        </div>
      </div>
    </div>
  );
}
