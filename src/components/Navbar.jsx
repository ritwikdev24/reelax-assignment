import { FiSearch, FiMenu } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#F7F8FC] border-b border-[#EAEAEA] px-4 md:px-8 py-4">

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Search Bar */}
        <div className="w-full md:w-[360px] flex items-center border border-[#D9D9D9] bg-white rounded-md px-3 py-2">

          <input
            type="text"
            placeholder="Find influencers to collaborate with"
            className="w-full outline-none text-sm"
          />

          <FiSearch className="text-gray-500 text-lg" />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          <Button
            text="Upgrade"
            bgColor="bg-[#E6A93D]"
            textColor="text-white"
          />

          <Button
            text="+ Create Campaign"
            bgColor="bg-[#2563EB]"
            textColor="text-white"
          />

          {/* Profile + Menu */}
          <div className="bg-white rounded-full px-3 py-2 flex items-center gap-3 shadow-sm border border-gray-100">

            <FaRegUserCircle className="text-3xl text-[#4F6EF7]" />

            <FiMenu className="text-2xl text-gray-700" />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;