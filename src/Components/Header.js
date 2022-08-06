import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import useAllProducts from '../Hooks/useAllProducts';
import avatar from '../images/icons/avatar.svg';
import logo from '../images/logo.svg';
import Banner from './Banner';
import Search from './Search';

const Header = () => {
  const [user,loading]=useAuthState(auth);
  const [keyWord,setKeyWord]=useState([]);
  const [search, setSearch] = useState([]);
  const [allProducts, setAllProducts] = useAllProducts();
  const logout =()=>{
     signOut(auth);
  }
  console.log(user);
  const searchValue = (e)=>{
    setKeyWord(e.target.value);
}
  const handleSearch=async()=>{
    console.log(keyWord);
    let result = await fetch(`http://localhost:5000/allcatagory/${keyWord}`);
    result= await result.json();
    if(result){
      setSearch(result);
      console.log(search);

    }else{
      
    }

  }
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
                to="/"
                className="text-white

                hover:underline
              hover:decoration-secondary hover:text-secondary
              
              "
              >
                Home
              </Link>
            </li>
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
          <div class="form-control mr-3">
            <div class="input-group">
              <input
                onChange={searchValue}
                type="text"
                placeholder="Search…"
                class="input input-bordered "
              />
              <Link
                to="/searchProduct"
                onClick={handleSearch}
                class="btn btn-square"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </Link>
            </div>
          </div>
          {user ? (
            <div class="dropdown dropdown-end">
              <label tabindex="0" class=" m-1">
                <div class="avatar placeholder">
                  <div className="w-12">
                    <span>
                      <img src={avatar} alt="" />
                    </span>
                  </div>
                </div>
              </label>
              <ul
                tabindex="1"
                class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
              >
                <li>
                  <a>My profile</a>
                </li>
                <li>
                  <a>My orders</a>
                </li>
                <li>
                  <Link onClick={logout} to="/">
                    Log out
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/signup" class="btn btn-secondary">
              Signup
            </Link>
          )}
        </div>
      </div>
      <Banner></Banner>
      {
        <Search search={search}></Search>
      }
    </div>
  );
};

export default Header;