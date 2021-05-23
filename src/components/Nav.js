import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul className="flex bg-green-300 py-3">
        <li className="px-3">
          <NavLink
            to="/"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            Home page
          </NavLink>
        </li>

        <li className="px-3">
          <NavLink
            to="/about"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            About page
          </NavLink>
        </li>
        <li className="px-3">
          <NavLink
            to="/products"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            Product page
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
