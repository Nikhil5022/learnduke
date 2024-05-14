import React from "react";
import TeachingNavbar from "./TeachingNavbar";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Findteachingjobsbody from "./Findteachingjobsbody";
import Reviews from "./Reviews";
import Footer from "./Footer";
export default function Findteachingjobs() {
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
        <div className="w-full md:w-10/12 lg:w-9/12 flex justify-center ">
          <Findteachingjobsbody />
        </div>
      </div>
      <div className="w-full flex justify-center p-5">
        <div className="w-full md:w-10/12 lg:w-9/12">
          <Reviews />
        </div>
      </div>
      <div className="w-full flex justify-center p-5">
        <div className="w-full md:w-10/12 lg:w-9/12">
          <Footer />
        </div>
      </div>
    </div>
  );
}
