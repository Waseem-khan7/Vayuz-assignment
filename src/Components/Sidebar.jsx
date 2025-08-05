import React from "react";
import logo from "../assets/images/logo.png";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] sm:w-[50%] md:w-[30%] lg:w-[20%] bg-[#0D0D0D] flex flex-col justify-between py-4 px-3 sm:py-6 sm:px-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-50 md:static md:block ${
          isOpen ? "block" : "hidden"
        } md:block min-h-screen`}
      >
        <div>
          <div className="mb-6 sm:mb-8">
            <img
              src={logo}
              alt="logo"
              className="w-full max-w-[120px] sm:max-w-[150px] md:max-w-[180px]"
            />
          </div>

          <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium text-sm sm:text-base px-3 py-2 rounded-full mb-5 sm:mb-6">
            CONTACT US
          </button>

          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-400">
            <li className="hover:text-white cursor-pointer">App Development</li>
            <li className="hover:text-white cursor-pointer">Challenges</li>
            <li className="hover:text-white cursor-pointer">Hire Developer</li>
            <li className="hover:text-white cursor-pointer">Community</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
