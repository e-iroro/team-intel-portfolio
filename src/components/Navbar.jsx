import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialLinks from './SocialLinks'
const Nav = () => {
  let Links = [
    { name: "Our Team", link: "/team" },
    { name: "About Us", link: "/about" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-white">
      <div className="md:flex items-center justify-between w-3/4 mx-auto  py-2 md:px-10 px-7">
        <div
          className="font-bold pb-2 cursor-pointer flex items-center font-avenir-light
      "
        >
          <span className="text-2xl mr-1 py-3 hover:text-purple ">
            {" "}
            <Link to="/">Team Intel</Link>{" "}
          </span>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer  md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12  absolute md:static bg-white md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8  md:my-0 my-7 mr-4">
            <a
              href="https://linktr.ee/team_intel"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple duration-500"
            >
              Resumes
            </a>
          </li>
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8  md:my-0 my-7 mr-4">
              <Link
                to={link.link}
                className=" font-avenir-light  font-medium  hover:text-purple hover:scale-115 transition duration-300"
             >
                {link.name}
              </Link>
            </li>
          ))}
        <SocialLinks />
        </ul>
      </div>
    </div>
  );
};

export default Nav;
