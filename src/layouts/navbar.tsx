import React from "react";
import { useLocation } from "react-router-dom";
import { cn } from "../utils/cn";

type Props = {};

const Navbar = (props: Props) => {
  const { pathname } = useLocation();
  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between w-full px-10 border-b shadow-sm h-14">
      <div className="text-lg font-bold">WebReinvent-Task</div>
      <ul className="inline-flex items-center gap-3">
        <li>
          <a
            href="/"
            className={cn(
              "border-b-2 border-transparent px-2 py-1",
              pathname === "/" && "border-b-blue-600 bg-teal-100"
            )}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/dashboard"
            className={cn(
              "border-b-2 border-transparent px-2 py-1",
              pathname === "/dashboard" && "border-b-blue-600 bg-teal-100"
            )}
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="/login"
            className="block px-6 py-1 text-white bg-blue-600 border-2 border-blue-600 rounded-full hover:bg-white hover:text-black"
          >
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
