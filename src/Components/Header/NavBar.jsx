import React from 'react';
import { NavLink } from 'react-router';
import './navbar.css';

const NavBar = () => {
  const links = (
    <>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="about">
        <li>About</li>
      </NavLink>
      <NavLink to="readList">
        <li>Read List</li>
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className=" text-2xl font-bold">
            Book <span className="text-2xl text-blue-600">Hut</span>
          </a>
        </div>
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <nav>{links}</nav>
          </ul>
        </div>
        <div>
          <a className="btn btn-primary">Sing In</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
