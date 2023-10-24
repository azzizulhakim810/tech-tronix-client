import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
// import logo from "../../../public/logo.png";
import { useContext } from "react";

import logo from "/logo.png";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogOut = () => {
    logout().then().catch();
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
            <h1 className="text-red-600 font-bold uppercase">{user?.displayName}</h1>
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
                className="btn bg-red-600 hover:bg-white  text-white hover:text-red-600 rounded-none"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
