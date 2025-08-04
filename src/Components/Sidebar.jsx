import logo from "../assets/images/logo.png";

const Sidebar = () => {
  return (
    <div className="w-[20%] bg-[#0D0D0D] flex flex-col justify-between py-6 px-4 min-h-full">
      <div>
        <div className="mb-8">
          <img src={logo} alt="logo" className="w-full max-w-[180px]" />
        </div>
        <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-4 py-2 rounded-full mb-6">
          CONTACT US
        </button>
        <ul className="space-y-4 text-lg">
          <li className="hover:text-white cursor-pointer">App Development</li>
          <li className="hover:text-white cursor-pointer">Challenges</li>
          <li className="hover:text-white cursor-pointer">Hire Developer</li>
          <li className="hover:text-white cursor-pointer">Community</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
