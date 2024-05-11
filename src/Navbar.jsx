import React, { useState } from "react";
import { RiMenuLine, RiCloseLine, RiArrowDropDownLine } from "react-icons/ri";
import learnDuke from "./assets/learnDuke.png";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigator = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="m-4 flex justify-between">
      <div className="flex space-x-6 items-center">
        <div className="flex">
          <img src={learnDuke} alt="" className="h-10 ml-2" />
        </div>
        <div className="hidden md:flex space-x-4">
          <div
            className="text-base font-semibold m-1.5 cursor-pointer"
            onClick={() => {
              navigator("/teachingJobs");
            }}
          >
            Teaching Jobs
          </div>
          <div className="text-base font-semibold m-1.5">
            Corporate training
          </div>
          <div className="text-base font-semibold m-1.5">Become a tutor</div>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        {showMenu && (
          <div className="absolute top-16 right-0 bg-white p-4 rounded-lg shadow-md z-10 flex flex-col w-1/3 lg:hidden">
            <div className="flex items-center">
              <FaUserCircle className="text-xl mr-2" />
              <div className="font-semibold">Log in</div>
            </div>
            <hr className="m-2 mb-5" />
            <div className="text-base font-semibold mb-4">Find tutors</div>
            <div className="text-base font-semibold mb-4">
              Corporate training
            </div>
            <div className="text-base font-semibold mb-4">Become a tutor</div>
            <div className="text-base">English, USD</div>
          </div>
        )}
        <div className="ml-2 hidden md:flex">English, USD</div>
        <div className="relative mr-2 hidden md:flex">
          <RiArrowDropDownLine size={35} />
        </div>
        <div className="h-5 w-5  items-center justify-center border-2 border-black rounded-full hidden lg:flex">
          <span className="font-semibold">?</span>
        </div>
        <div className="hidden md:block border-2 border-black rounded-lg">
          <button className="px-4 py-1 rounded-lg font-semibold">Log in</button>
        </div>
        <div>
          {showMenu ? (
            <RiCloseLine
              className="md:hidden cursor-pointer"
              size={35}
              onClick={toggleMenu}
            />
          ) : (
            <RiMenuLine
              className="md:hidden cursor-pointer"
              size={35}
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>
    </div>
  );
}
