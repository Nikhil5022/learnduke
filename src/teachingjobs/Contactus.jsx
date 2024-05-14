import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import TeachingNavbar from "./TeachingNavbar";
import Footer from "./Footer";
export default function Contactus() {
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
      <div className=" mt-5 flex justify-center">
        <div className="w-2/3 flex flex-col justify-center items-center">
          <div className="text-6xl font-semibold">Contact</div>
          <div style={{ color: "#404040" }} className="mt-10 text-center">
            Your message is important to us and will be addressed within the
            next 24 business hours. For any inquiries, feel free to email us at{" "}
            <span className="font-bold">ycyclasscom@gmail.com</span>.
          </div>
          <div style={{ color: "#404040" }} className="mt-10 text-center">
            soa University Bhubaneswar incubation center soa
          </div>
          <div style={{ color: "#404040" }} className="mt-10 text-center">
            If you are an existing customer, please use your dashboard access
            link to visit the help center for priority support.
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-10">
        <div className="w-full md:w-10/12 lg:w-9/12 flex flex-col space-y-6 px-4">
          <Footer />
        </div>
      </div>
    </div>
  );
}
