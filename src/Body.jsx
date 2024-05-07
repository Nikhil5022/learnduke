import React, { useState, useRef, useEffect } from "react";
import Tutorial from "./Tutorial";
import { FaAngleDown } from "react-icons/fa";

// Define the filter options
const filterOptions = ["All", "School", "College", "HomeTuition", "Remote"];

// Define the tutorial jobs data
const tutorialJobs = [
  {
    imageLink: "https://randomuser.me/api/portraits/men/1.jpg",
    userName: "John Doe",
    jobTitle: "Software Engineer",
    jobDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et nisi sit amet libero fermentum feugiat ut vitae lectus.",
    minAmount: 50000,
    maxAmount: 70000,
    locationtype: "Remote",
    applyLink: "https://example.com/apply",
    phoneNumber: "1234567890",
    location: "New york",
  },
  {
    imageLink: "https://randomuser.me/api/portraits/women/2.jpg",
    userName: "Jane Smith",
    jobTitle: "UX Designer",
    jobDescription:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum dapibus nunc ac nisl tristique, auctor lobortis lorem consectetur.",
    minAmount: 60000,
    maxAmount: 80000,
    locationtype: "College",
    applyLink: "https://example.com/apply",
    phoneNumber: "9876543210",
    location: "Delhi",
  },
  {
    imageLink: "https://randomuser.me/api/portraits/women/2.jpg",
    userName: "Jane Smith",
    jobTitle: "UX Designer",
    jobDescription:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum dapibus nunc ac nisl tristique, auctor lobortis lorem consectetur.",
    minAmount: 60000,
    maxAmount: 80000,
    locationtype: "College",
    applyLink: "https://example.com/apply",
    phoneNumber: "9876543210",
    location: "Hyderabad",
  },
];

export default function Body() {
  const [showFullContent, setShowFullContent] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const shortContent =
    "On Preply's tutoring jobs page you can always find open requests for qualified teachers of different languages and subjects to offer tuition to learners in genrea...";
  const fullContent =
    "On Preply's tutoring jobs page you can always find open requests for qualified teachers of different languages and subjects to offer tuition to learners in general, as well as those who participate in our corporate language training programs and business English courses. Preply offers the chance to teach online with a flexible schedule, access to students from all over the world and constant customer service! In order to reply to student requests, you need to have a profile that shows your hourly price and your availability. Just check our tutoring jobs and find new students here!";

  // Filter tutorial jobs based on the selected filter option
  const filteredTutorialJobs =
    selectedFilter === "All"
      ? tutorialJobs
      : tutorialJobs.filter((job) => job.locationtype === selectedFilter);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full lg:w-10/12 p-4">
        <div className="flex flex-col">
          <div className="text-3xl font-extrabold">Online tutoring jobs</div>
          <div
            className={`mt-4 ${showFullContent ? "" : "overflow-hidden"}`}
            style={{ color: "#4D4C5C" }}
          >
            {showFullContent ? fullContent : shortContent}
            <button
              onClick={toggleContent}
              className="cursor-pointer ml-2 underline font-semibold"
            >
              {showFullContent ? "Read Less" : "Read More"}
            </button>
          </div>
          <div className="flex flex-col md:flex-row mt-3 justify-start md:justify-between md:items-center">
            <div className="text-2xl font-bold">
              Latest online tutoring jobs
            </div>
            {/* Filter component */}
            <FilterOptions
              selectedFilter={selectedFilter}
              onFilterChange={handleFilterChange}
            />
          </div>
          {/* Display tutorials based on screen size */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            {filteredTutorialJobs.map((job, index) => (
              <Tutorial key={index} {...job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
//
function FilterOptions({ selectedFilter, onFilterChange }) {
  const [visibleOptions, setVisibleOptions] = useState(filterOptions.slice(0, 3));
  const [dropdownOptions, setDropdownOptions] = useState(filterOptions.slice(3));
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const availableWidth = window.innerWidth - 30;
      const optionWidth = 90;
      const maxVisibleOptions = Math.floor((availableWidth - 50) / optionWidth);

      setVisibleOptions(filterOptions.slice(0, maxVisibleOptions));
      setDropdownOptions(filterOptions.slice(maxVisibleOptions));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="relative">
      <div className="flex">
        <div className="flex overflow-hidden mt-4" ref={dropdownRef}>
          {visibleOptions.map((option, index) => (
            <button
              key={index}
              className={`px-4 py-2 bg-gray-200 rounded-lg mb-2 mr-2 md:ml-2 ${
                selectedFilter === option ? "bg-blue-500 text-orange-600" : ""
              }`}
              onClick={() => onFilterChange(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="flex justify-end right-0 overflow-hidden mt-4">
          {dropdownOptions.length > 0 && (
            <button
              onClick={toggleDropdown}
              className={`px-4 py-2 bg-gray-200 rounded-lg mb-2 ml-2 mr-2 md:ml-2`}
            >
              <FaAngleDown className="inline-block text-xl" />
            </button>
          )}
        </div>
      </div>
      {dropdownVisible && (
        <div className="flex left-0" ref={dropdownRef}>
          {dropdownOptions.map((option, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-left bg-gray-200 rounded-lg m-2 ${
                selectedFilter === option ? " text-orange-600" : ""
              }`}
              onClick={() => {
                onFilterChange(option);
                setDropdownVisible(false); // Close dropdown after selecting an option
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
