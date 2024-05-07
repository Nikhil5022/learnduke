import React, { useState } from "react";
import { FaWallet, FaEye } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import whatsapp from "./assets/whatsapp2.png";

export default function Tutorial({
  imageLink,
  userName,
  jobTitle,
  jobDescription,
  minAmount,
  maxAmount,
  locationtype,
  applyLink,
  phoneNumber,
  location,
}) {
  const borderColor = "#4D4C5C"; // Define the border color here
  const [showFullPhoneNumber, setShowFullPhoneNumber] = useState(false);

  const togglePhoneNumberVisibility = () => {
    setShowFullPhoneNumber(!showFullPhoneNumber);
  };

  const renderPhoneNumber = () => {
    if (showFullPhoneNumber) {
      return phoneNumber;
    } else {
      const firstTwoDigits = phoneNumber.slice(0, 2);
      const remainingDigits = phoneNumber.slice(2).replace(/\d/g, "*");
      return `${firstTwoDigits}${remainingDigits}`;
    }
  };

  return (
    <div
      className={`rounded-xl mt-5 p-5 border-${borderColor}`}
      style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="flex  items-center  mb-4">
        <img
          src={imageLink}
          className="w-10 h-10 rounded-full md:mr-2 mb-2 md:mb-0"
          alt="userProfile"
        />
        <div style={{ color: borderColor }} className="ml-2 text-lg">
          {userName}
        </div>
      </div>
      <div className="text-3xl font-semibold">{jobTitle}</div>
      <div style={{ color: borderColor }} className="mt-3">
        {jobDescription}
      </div>
      <div className="flex flex-wrap mt-4 space-x-3 md:space-x-8">
        <div
          className={` border-2 border-${borderColor} p-2 rounded-3xl mt-3 flex items-center`}
        >
          <FaWallet className="w-6 h-6 mr-2 text-orange-400" />
          <span>
            &#8377;{minAmount}-&#8377;{maxAmount}/Hour
          </span>
        </div>
        <div
          className={` border-2 border-${borderColor} items-center mt-3 pl-1 pr-1 rounded-3xl flex  text-center`}
        >
          {locationtype}
        </div>
        <div className="">
        {locationtype !== "Remote" && (
          <div
            className={` border-2 border-${borderColor} mt-3 p-2 rounded-3xl flex items-center flex-wrap`}
          >
            {location}
          </div>
        )}
      </div>
      </div>
      <div className="flex mt-4 space-x-3 md:space-x-8">
        <a
          href={`tel:${phoneNumber}`}
          className="bg-orange-400 text-white px-4 py-3 rounded-3xl text-center"
          style={{ textDecoration: "none" }}
        >
          <div className="flex justify-center items-center">
            <FaPhone style={{ transform: "rotateY(180deg)" }} />
            <div className="ml-2">Call Now</div>
          </div>
        </a>
        <div
          className={` border-2 border-${borderColor} p-2 rounded-3xl flex items-center flex-shrink-0`}
        >
          <div className="text-gray-700">
            {/* button for whatsapp */}
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              className="flex items-center"
            >
              {/* whatsapp icon */}
              {/* <FaWhatsapp className="m-1 text-green-600" /> */}
              <img src={whatsapp} alt="whatsapp" className="w-6 m-1" />
              <div>Whatsapp</div>
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
}
