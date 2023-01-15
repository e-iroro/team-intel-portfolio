import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className=" py-9 flex w-3/4 mx-auto ">
        <h1
          className="hover:underline text-xl md:text-xl font-questrial font-medium  hover:text-purple hover:scale-125 transition duration-300 mr-11 w-full "
          to="/home"
        >
        <Link to="/">
          Team Intel
        </Link>
        </h1>
        <ul className="flex w-full justify-end  " id="nav">
          <li>
            <a
              className=" text-md mr-10  font-avenir-light  font-medium  hover:text-purple hover:scale-115 transition duration-300"
              href="https://linktr.ee/team_intel" target="_blank"
              rel="noreferrer"
              
            >
              Resumes
            </a>
          </li>
          <li>
            <Link
              className="text-md  font-avenir-light  font-medium mr-10  hover:text-purple hover:scale-125 transition duration-300"
              to="/team"
            >
              Our Team
            </Link>
          </li>
          <li>
            <Link
              className=" text-md  font-avenir-light  font-medium mr-10  hover:text-purple hover:scale-125 transition duration-300"
              to="/about"
            >
              About Us
            </Link>
          </li>
          <SocialLinks />
        </ul>

        <div class="bx bx-menu" id="menu-icon"></div>
      </header>
    </>
  );
}

export default Navbar;
