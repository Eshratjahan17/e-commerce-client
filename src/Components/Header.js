import React from 'react';
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
                <a>All Catagory</a>
              </li>
              <li tabindex="0">
                <a>Iphone</a>
              </li>
              <li>
                <a>Mac </a>
              </li>
              <li>
                <a>Apple Watch</a>
              </li>
              <li>
                <a>Air pods</a>
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
              <a
                className="text-white

                hover:underline
              hover:decoration-secondary hover:text-secondary
              
              "
              >
                All Catagory
              </a>
            </li>
            <li
              className="text-white
               hover:underline
              hover:decoration-secondary hover:text-secondary
              
              "
              tabindex="0"
            >
              <a
                className="text-white
               hover:underline
              hover:decoration-secondary hover:text-secondary
              
              "
              >
              Iphone
              </a>
            </li>
            <li
              className="text-white
               hover:underline
              hover:decoration-secondary hover:text-secondary
              
              "
          
            >
              <a
                className="text-white
               hover:underline
              hover:decoration-secondary hover:text-secondary
              
              "
              >
                Mac
              </a>
            </li>
            <li
              className="text-white
               hover:underline
              hover:decoration-secondary hover:text-secondary
              
              "
            >
              <a>Apple Watch</a>
            </li>
            <li
              className="text-white
               hover:underline
              hover:decoration-secondary hover:text-secondary
              
              "
            >
              <a>Air Pods</a>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          <a class="btn btn-secondary">Signup</a>
        </div>
      </div>
    </div>
  );
};

export default Header;