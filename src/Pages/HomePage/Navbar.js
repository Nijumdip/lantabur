import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const menuItems = (
        <>
            <li>
                <Link to="/" className="text-base font-medium hover:text-green-600 focus:bg-white ">
                    Dashboard
                </Link>
            </li>
            <li>
                <Link to="/" className="text-base font-medium text-green-700 focus:bg-white ">
                    Homepage
                </Link>
            </li>
            <li>
                <Link to="/" className="text-base font-medium hover:text-green-600 focus:bg-white">
                    About
                </Link>
            </li>
            <li>
                <Link to="/" className="text-base font-medium hover:text-green-600 focus:bg-white">
                    Contact
                </Link>
            </li>
            <li>
                <Link to="/" className="text-base font-medium hover:text-green-600 focus:bg-white">
                    Service
                </Link>
            </li>
            <li>
                <Link to="/" className="text-base font-medium hover:text-green-600 focus:bg-white ">
                    Products
                </Link>
            </li>
        </>
    );

    return (
        <div className="mx-0 w-full px-0 sm:px-6 lg:px-0 py-0  sticky top-0 z-30">
            <div className="navbar bg-base-100 my-0 py-0 w-full lg:px-8">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
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
                            tabIndex="0"
                            className="menu menu-compact dropdown-content mt-3 p-2   w-52"
                        >
                            {menuItems}
                        </ul>

                        <ul
                            tabIndex="0"
                            className="menu menu-compact dropdown-content mt-3 p-2   w-52"
                        >
                            {menuItems}
                        </ul>
                    </div>

                    <div className="sm-logo">
                        <a className="flex flex-row-reverse items-center style-header justify-center" href="/">
                            <div className="flex sm:w-52 w-10 font-semibold text-4xl text-green-600">
                                <img
                                    className="sm:w-20 w-10"
                                    src="https://i.ibb.co/F0Gx6Xv/img.png"
                                    alt=""
                                />
                                <h1 className="mt-4 -ml-2">LANTABUR</h1>
                            </div>
                          
                        </a>
                    </div>
                </div>

                <div className="lg:hidden mr-32">
                    <a className="flex flex-row-reverse items-center justify-center" href="/">
                        <div className="flex sm:w-52 w-10 style-header font-semibold text-4xl text-green-600">
                            <img
                                className="sm:w-20 w-10 "
                                src="https://i.ibb.co/F0Gx6Xv/img.png"
                                alt=""
                            />
                            <h1 className="mt-3 -ml-2">LANTABUR</h1>
                        </div>
                    </a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">{menuItems}</ul>
                </div>

                <div className="navbar-end">

                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex="0"
                            className="btn btn-ghost btn-circle hover:bg-green-300 avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img src="https://i.ibb.co/dcMnP1Q/2557240.jpg" alt="user-img" />
                            </div>
                        </label>

                        <ul
                            tabIndex="0"
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link
                                    to="/user-profile"
                                    className="font-medium bg-green-50 hover:text-green-600 justify-between"
                                >
                                    Profile
                                </Link>
                            </li>

                            <li>
                                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm ">
                                    SignOut
                                </button>
                            </li>
                        </ul>
                    </div>
                    <Link
                        to="/sign-in"
                        class=" hover:text-white border border-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2  dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                    >
                        SignIn
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
