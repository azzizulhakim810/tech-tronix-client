import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
// import logo from "../../../public/logo.png";
import { useContext, useEffect, useState } from "react";

import logo from "/logo.png";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  const handleToggle = (e) => {
    if(e.target.checked) {
      setTheme('black');
    } else {
      setTheme('light');
    }
  }

  useEffect(()=> {
    localStorage.setItem('theme',theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme',localTheme)
  },[theme])

  const handleLogOut = () => {
    logout().then().catch();
    navigate(location?.state ? location.state : '/login')
  };

  // Menu Item Creation
  const menuItem = (
    <div className="text-[15px] font-medium">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-red-500 py-1 px-3 mx-2 "
            : "text-black py-1 px-3 mx-2"
        }
      >
        HOME
      </NavLink>
      <NavLink
        to="/addProduct"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-red-500 py-1 px-3 mx-2 "
            : "text-black py-1 px-3 mx-2"
        }
      >
        ADD PRODUCT
      </NavLink>
      <NavLink
        to="/myCart"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-red-500 py-1 px-3 mx-2 "
            : "text-black py-1 px-3 mx-2"
        }
      >
        MY CART
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-red-500 py-1 px-3 mx-2  "
            : "text-black py-1 px-3 mx-2"
        }
      >
        LOGIN
      </NavLink>
    </div>
  );
  // console.log(user);
  return (
    <div className="w-full relative bg-white z-50  border-b-2">
      <div className="navbar shadow-red-500 text-black w-11/12 mx-auto py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn bg-transparent p-2 border-none text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-6 z-[1] px-3 py-4 shadow bg-black rounded-none w-auto block"
            >
              {menuItem}
            </ul>
          </div>
          <Link className="normal-case text-2xl font-bold flex align-middle justify-between items-center">
            <img className="w-28 md:w-40" src={logo} alt="" />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
        </div>

        <div className="navbar-end space-x-4">
          {/* Name */}
          <div>
            <h1 className="text-red-600 font-bold uppercase">
              {user?.displayName}
            </h1>
          </div>

          {/* Profile Picture */}
          {user ? (
            <div className="avatar">
              <div className="md:w-10 w-8 rounded-full ring ring-primary ">
                <img className="w-full object-fill" src={user?.photoURL} />
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="">
            {user ? (
              <button
                onClick={handleLogOut}
                className="btn bg-red-600 hover:bg-white uppercase  text-white hover:text-red-600 rounded-none"
              >
                <BiLogOutCircle className="text-2xl"></BiLogOutCircle>
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="btn bg-red-600 hover:bg-white  text-white hover:text-red-600 rounded-none  md:text-base text-xs px-2">
                  <BiLogInCircle className="text-2xl"></BiLogInCircle>
                  Login
                </button>
              </Link>
            )}

            {/* Dark Mode Implementation */}
            <label className="swap swap-rotate pl-5">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" onChange={handleToggle}/>

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
