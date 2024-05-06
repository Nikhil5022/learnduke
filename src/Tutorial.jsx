import React, { useState } from "react";
import { FaWallet, FaEye } from "react-icons/fa";

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
      <div className="flex  mt-4 space-x-3 md:space-x-8">
        <div
          className={` border-2 border-${borderColor} p-2 rounded-3xl flex items-center`}
        >
          <FaWallet className="w-6 h-6 mr-2 text-orange-400" />
          <span>
            &#8377;{minAmount}-&#8377;{maxAmount}/Hour
          </span>
        </div>
        <div
          className={` border-2 border-${borderColor} p-2 rounded-3xl flex  text-center`}
        >
          {locationtype}
        </div>
        {locationtype != "Remote" && (
          <div
            className={` border-2 border-${borderColor} p-2 rounded-3xl flex  text-center`}
          >
            {location}
          </div>
        )}
      </div>
      <div className="flex mt-4 space-x-3 md:space-x-8">
        <a
          href={applyLink}
          className="w-1/3 bg-orange-400 text-white px-4 py-2 rounded-3xl   text-center"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          Apply
        </a>
        <div
          className={` border-2 border-${borderColor} p-2 rounded-3xl flex items-center`}
        >
          <button
            className="focus:outline-none"
            onClick={togglePhoneNumberVisibility}
          >
            <FaEye className="text-gray-700" />
          </button>
          <div className="text-gray-700">{renderPhoneNumber()}</div>
        </div>
      </div>
    </div>
  );
}
