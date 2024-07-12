import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "./NavLink";

const MobileMenu = ({ navLinks, navbarOpen, setNavbarOpen }) => {
  return (
    <div className="mobile-menu block md:hidden">
      {!navbarOpen ? (
        <button
          onClick={() => setNavbarOpen(true)}
          className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
        >
          <Bars3Icon className="h-5 w-5" />
        </button>
      ) : (
        <button
          onClick={() => setNavbarOpen(false)}
          className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      )}
      {navbarOpen && (
        <ul className="flex flex-col items-center">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MobileMenu;
