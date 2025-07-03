import logo from "../assets/logo.png";
import { FaSearch, FaMoon, FaSun } from "react-icons/fa";

export function Header() {
  return (
    <div id="home" className="flex items-center justify-between px-6 bg-[#181a20] h-24">
      <img src={logo} alt="Logo" className="w-40 mr-20" />

      <nav className="flex items-center space-x-6 mr-auto">
        <a href="#" className="text-white hover:text-yellow-400 cursor-pointer">Buy Crypto</a>
        <a href="#" className="text-white hover:text-yellow-400 cursor-pointer">Markets</a>
        <a href="#" className="text-white hover:text-yellow-400 cursor-pointer">Trade</a>
        <a href="#" className="text-white hover:text-yellow-400 cursor-pointer">Derivatives</a>
      </nav>

      <div className="flex items-center space-x-4">
        <button id="searchicon" className="text-white hover:text-yellow-400 cursor-pointer">
          <FaSearch size={18} />
        </button>

        <button className="bg-[#2f323b] rounded-md hover:bg-gray-700 px-4 py-2 text-white cursor-pointer">
          Log In
        </button>
        <button className="bg-yellow-400 rounded-md hover:bg-yellow-500 px-4 py-2 text-black cursor-pointer">
          Sign Up
        </button>

        <button id="moonicon" className=" dark:hidden text-white hover:text-yellow-400 cursor-pointer">
          <FaMoon size={18} />
        </button>
        <button id="sunicon" className="hidden dark:block text-white hover:text-yellow-400 cursor-pointer">
          <FaSun size={18} />
        </button>
      </div>
    </div>
  );
}
