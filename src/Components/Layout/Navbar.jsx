import React from "react";
import logo from "../../assets/New_Vigor_images/logo.png";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";
// import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
const Navbar = () => {
  const location = useLocation();

  // Check if the current location matches the specified routes
  const isHomeActive = location.pathname === "/";
  const isAboutActive = location.pathname === "/about";
  const isServiceActive = location.pathname === "/service";
  const isProductActive = location.pathname === "/product/mobile";
  const isProjectActive = location.pathname === "/solution";
  const isContactActive = location.pathname === "/contact";
  const homeLinkStyle = {
    backgroundColor: isHomeActive ? "#11BF11" : "transparent",
    paddingInline: "20px",
    paddingBlock: "5px",
    borderRadius: "30px",
    color: isHomeActive ? "white" : "black", // Adjust the border-radius value as needed
  };

  const aboutLinkStyle = {
    backgroundColor: isAboutActive ? "#11BF11" : "transparent",
    paddingInline: "20px",
    paddingBlock: "5px",
    borderRadius: "30px",
    color: isAboutActive ? "white" : "black",
  };
  const productLinkStyle = {
    backgroundColor: isProductActive ? "#11BF11" : "transparent",
    paddingInline: "20px",
    paddingBlock: "5px",
    borderRadius: "30px",
    color: isProductActive ? "white" : "black",
  };
  const serviceLinkStyle = {
    backgroundColor: isServiceActive ? "#11BF11" : "transparent",
    paddingInline: "20px",
    paddingBlock: "5px",
    borderRadius: "30px",
    color: isServiceActive ? "white" : "black",
  };
  const projectLinkStyle = {
    backgroundColor: isProjectActive ? "#11BF11" : "transparent",
    paddingInline: "20px",
    paddingBlock: "5px",
    borderRadius: "30px",
    color: isProjectActive ? "white" : "black",
  };
  const contactLinkStyle = {
    backgroundColor: isContactActive ? "#11BF11" : "transparent",
    paddingInline: "20px",
    paddingBlock: "5px",
    borderRadius: "30px",
    color: isContactActive ? "white" : "black",
  };
  return (
    <>
      <nav className="bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
          
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          
            <div className="flex ">
              <div className="">
                <HiMagnifyingGlass />
              </div>
              <div className="px-5">
                <IoCartOutline />
              </div>
            </div>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white   dark:border-gray-700">
              <NavLink to={"/"}>
                <li>
                  <a
                    className="block py-2 px-3 text-black "
                    aria-current={isHomeActive ? "page" : undefined}
                    style={homeLinkStyle}
                  >
                    Home
                  </a>
                </li>
              </NavLink>
              <NavLink to={"/about"}>
                <li>
                  <a
                    className="block py-2 px-3 text-black "
                    aria-current={isAboutActive ? "page" : undefined}
                    style={aboutLinkStyle}
                  >
                    About Us
                  </a>
                </li>
              </NavLink>
              <li className="relative group">
                <NavLink
                  className="block py-2 px-3 text-black"
                  ria-current={isProductActive ? "page" : undefined}
                  style={productLinkStyle}
                >
                  Product
                </NavLink>

                <div className="absolute z-10 h-[100px]  hidden -ml-[200px] w-[800px] py-6 space-y-2 bg-white  border rounded-md shadow-md group-hover:block">
                  {/* Dropdown content */}
                  <div className="flex justify-around items-center">
                    <NavLink
                      to="/product/mobile"
                      className="block px-4 py-2 text-gray-700 hover:border-b-2 border-b-[#11BF11] 
"
                    >
                      Mobile
                    </NavLink>
                    <NavLink
                      to="/product/tablets"
                      className="block px-4 py-2 text-gray-700 hover:border-b-2 border-b-[#11BF11]"
                    >
                      Tablets
                    </NavLink>
                    <NavLink
                      to="/product/watches"
                      className="block px-4 py-2 text-gray-700 hover:border-b-2 border-b-[#11BF11]"
                    >
                      Watches
                    </NavLink>
                    <NavLink
                      to="/product/buds"
                      className="block px-4 py-2 text-gray-700 hover:border-b-2 border-b-[#11BF11]"
                    >
                      Buds
                    </NavLink>
                    <NavLink
                      to="/product/home-appliances"
                      className="block px-4 py-2 text-gray-700 hover:border-b-2 border-b-[#11BF11]"
                    >
                      Home Appliances
                    </NavLink>
                    <NavLink
                      to="/product/b2b-products"
                      className="block px-4 py-2 text-gray-700 hover:border-b-2 border-b-[#11BF11]"
                    >
                      B2B product
                    </NavLink>
                  </div>
                  {/* Add more options as needed */}
                </div>
              </li>
              <NavLink to={"/service"}>
                <li>
                  <a
                    className="block py-2 px-3 text-black]"
                    aria-current={isServiceActive ? "page" : undefined}
                    style={serviceLinkStyle}
                  >
                    Service
                  </a>
                </li>
              </NavLink>
              <NavLink to={"/solution"}>
              <li>
                <a
                 
                  className="block py-2 px-3 text-black"
                  aria-current={isProjectActive ? "page" : undefined}
                  style={projectLinkStyle}
                >
                  Solution
                </a>
              </li>
              </NavLink>
              <li>
                <a
                  href="contact"
                  className="block py-2 px-3 text-black ]"
                  aria-current={isContactActive ? "page" : undefined}
                  style={contactLinkStyle}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
