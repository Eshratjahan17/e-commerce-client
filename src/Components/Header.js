import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/icons/logo.png';

const Header = () => {
  return (
    <div>
      <div class="navbar bg-primary">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-secondary mr-10 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/allcatagory">All Catagory</Link>
              </li>
              <li tabindex="0">
                <Link to="/iphone">Iphone</Link>
              </li>
              <li>
                <Link to="/mac">Mac</Link>
              </li>
              <li>
                <Link to="/applewatch">Apple Watch</Link>
              </li>
              <li>
                <Link to="/airpods">Airpods</Link>
              </li>
            </ul>
          </div>
          <a>
            <img class="w-14 h-16 " src={logo} alt="" />
          </a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link
                to="/allcatagory"
                className="text-white

                hover:underline
              hover:decoration-secondary hover:text-secondary
              
              "
              >
                All Catagory
              </Link>
            </li>
            <li
              className="text-white
               hover:underline
              hover:decoration-secondary hover:text-secondary
              
              "
              tabindex="0"
            >
              <Link
                to="/iphone"
                className="text-white
               hover:underline
              hover:decoration-secondary hover:text-secondary
              
              "
              >
                Iphone
              </Link>
            </li>
            <li>
              <Link
                to="/mac"
                className="text-white
               hover:underline
              hover:decoration-secondary hover:text-secondary
              
              "
              >
                Mac
              </Link>
            </li>
            <li
              className="text-white
               hover:underline
              hover:decoration-secondary hover:text-secondary
              
              "
            >
              <Link to="/applewatch">Apple Watch</Link>
            </li>
            <li
              className="text-white
               hover:underline
              hover:decoration-secondary hover:text-secondary
              
              "
            >
              <Link to="/airpods">Air Pods</Link>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          <Link to="/signup" class="btn btn-secondary">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;