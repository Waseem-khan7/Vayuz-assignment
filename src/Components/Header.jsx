import React from "react";
import { Menu } from "lucide-react";

const Header = ({ toggleSidebar }) => {
  return (
    <div className="bg-[#141414] w-full py-3 px-6 border-b border-gray-700 text-sm text-gray-300 flex items-center justify-between">
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="block md:hidden text-white"
        aria-label="Toggle Sidebar"
      >
        <Menu size={24} />
      </button>

      <p className="flex-1 text-center md:text-left">
        Securing Your Flutter App: Best Practices and Techniques
      </p>
    </div>
  );
};

export default Header;
