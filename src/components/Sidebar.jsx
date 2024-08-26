import React, { useState } from "react";
import { LuBox, LuUser, LuMessageSquare, LuCalendar } from "react-icons/lu";
import { FaSuitcase } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useTheme } from "../context/theme-context";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const { theme, toggleTheme } = useTheme();

  const SIDEBAR_LINKS = [
    { id: 1, path: "/", name: "Dashboard", icon: LuBox },
    { id: 2, path: "/members", name: "Members", icon: TbUsers },
    { id: 3, path: "/messages", name: "Messages", icon: LuMessageSquare },
    { id: 4, path: "/projects", name: "Projects", icon: FaSuitcase },
    { id: 5, path: "/clients", name: "Clients", icon: LuUser },
    { id: 6, path: "/work", name: "Work Plan", icon: LuCalendar },
  ];
  return (
    <div
      className={
        "w-16 md:w-56 sticky left-0 top-0 z-10 h-screen boder-r pt-8 px-4 shadow-xl font-Poppins "
      }
    >
      <div className="mb-8 ">
        <img
          src={Logo}
          alt="logo"
          className="w-10 float-left rounded-full mx-2"
        />
        <h1 className="font-semibold text-2xl text-violet-600 hidden md:flex ">
          Skcript
        </h1>
      </div>

      <ul className="mt-6 space-y-6">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 ${
              activeLink === index ? "bg-indigo-100 text-indigo-500" : ""
            }`}
          >
            <Link
              to={link.path}
              className="flex justify-center md:justify-start items-center md:space-x-5"
              onClick={() => handleLinkClick(index)}
            >
              <span>{link.icon()}</span>
              <span className="text-sm text-gray-500 hidden md:flex ">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mode-switch mt-6 space-y-6">
        <label className="inline-block w-10 h-5 relative ml-0 md:ml-4">
          <p className="ml-12 hidden md:flex">Dark</p>
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
            className="hidden"
          />
          <span className="slider round absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#ccc] transition rounded-3xl"></span>
        </label>
      </div>

      <div className="w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center">
        <button className="flex items-center space-x-2 text-xs text-white py-2 px-5 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full">
          <span className="bg-gradient-to-r from-indigo-500 to-violet-600 text-white">
            ?
          </span>{" "}
          <span className="hidden bg-gradient-to-r from-indigo-500 to-violet-600 text-white md:flex">
            Need Help
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
