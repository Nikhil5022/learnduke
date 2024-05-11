import React, { useState } from "react";
import learnDuke from "../assets/learnDuke.png";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

export default function TeachingNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative z-10">
      <div className="flex justify-between items-center w-full pt-5">
        <div className="flex items-center space-x-6">
          {menuOpen ? (
            <FaTimes
              className="cursor-pointer md:hidden"
              style={{ strokeWidth: 1, fontSize: "1.5rem" }}
              onClick={toggleMenu}
            />
          ) : (
            <FaBars
              className="cursor-pointer md:hidden"
              style={{ strokeWidth: 1, fontSize: "1.5rem" }}
              onClick={toggleMenu}
            />
          )}
          <img src={learnDuke} alt="learnduke" className="md:block hidden" />
          <div
            className={`hidden md:flex md:space-x-6 text-sm`}
          >
            <div className="font-thin hover:underline cursor-pointer">
              Find Teaching Jobs
            </div>
            <div className="font-thin hover:underline cursor-pointer">
              Customer Reviews
            </div>
            <div className="font-thin hover:underline cursor-pointer">
              Our Story
            </div>
          </div>
        </div>
        <div className="flex justify-center">
        <img src={learnDuke} className="md:hidden" alt="" />
        </div>
        <div className="flex justify-end items-center text-xl space-x-5">
          <FaSearch
            className="cursor-pointer"
            style={{ strokeWidth: 1, fontSize: "1.5rem" }}
          />
          <FaShoppingCart
            className="cursor-pointer"
            style={{ strokeWidth: 1, fontSize: "1.5rem" }}
          />
        </div>
      </div>
      {menuOpen && (
        <div className="absolute inset-x-0 top-16 w-full min-h-min  bg-white  rounded-md p-4 md:hidden" style={{boxShadow:"0 0 10px 0 rgba(0, 0, 0, 0.1)"}}>
          <div className="flex flex-col space-y-3">
            <div className="font-thin hover:underline cursor-pointer">
              Find Teaching Jobs
            </div>
            <div className="font-thin hover:underline cursor-pointer">
              Customer Reviews
            </div>
            <div className="font-thin hover:underline cursor-pointer">
              Our Story
            </div>
          </div>
        </div>
      )}
    </div>
  );
}