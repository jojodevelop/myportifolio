import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Nav() {
  // Use state to track whether the mobile menu is open or closed
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`sticky z-30 py-2 bg-[#04042b] text-[20px] top-0 flex flex-col md:flex-row justify-between items-center gap-[20px] px-12`}
    >
      <div>
        <h1 className="text-white ml-[50px]">
          <b>
            <i className="text-sky-500">JOSI</i>ANE
          </b>
        </h1>
      </div>

      <div
        className={`${
          isMobileMenuOpen
            ? "block h-screen md:h-fit absolute md:relative px-12 w-screen bg-[#04042b] md:flex justify-between"
            : "hidden md:flex "
        }justify-between items-cente`}
      >
        {isMobileMenuOpen && (
          <div
            className="text-white font-extrabold text-xl cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            X
          </div>
        )}
        <ul className="text-white semi-fontbold flex flex-col md:flex-row gap-[30px]">
          <li
            className={`hover:text-sky-300 hover:scale-110 ${
              isMobileMenuOpen ? "mb-[20px]" : ""
            }`}
          >
            <a href="/">Home</a>
          </li>
          <li
            className={`hover:text-sky-300 ${
              isMobileMenuOpen ? "mb-[20px]" : ""
            }`}
          >
            <a href="/about">About me</a>
          </li>
          <li
            className={`hover:text-sky-300 ${
              isMobileMenuOpen ? "mb-[20px]" : ""
            }`}
          >
            <a href="/service">Services</a>
          </li>
          <li
            className={`hover:text-sky-300 ${
              isMobileMenuOpen ? "mb-[20px]" : ""
            }`}
          >
            <a href="/skill">Skills</a>
          </li>
          <li
            className={`hover:text-sky-300 ${
              isMobileMenuOpen ? "mb-[20px]" : ""
            }`}
          >
            <a href="projct">Project</a>
          </li>
          <li
            className={`hover:text-sky-300 ${
              isMobileMenuOpen ? "mb-[20px]" : ""
            }`}
          >
            <a href="contct">Contact me</a>
          </li>
        </ul>
      </div>
      <FaBars
        className="text-white md:hidden block"
        onClick={toggleMobileMenu}
      />
    </div>
  );
}
