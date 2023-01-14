//install font awewsome
// import 'font-awesome/css/font-awesome.min.css'; //import in react app
import SocialLinks from "./SocialLinks";

function Navbar() {
  return (
    <>
      <header className=" py-9 flex ">
        <h1
          className="hover:underline text-xl md:text-xl font-questrial font-medium  hover:text-purple hover:scale-125 transition duration-300 mr-11 w-full "
          href="#Home"
        >
          Team Intel
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
            <a
              className="text-md  font-avenir-light  font-medium mr-10  hover:text-purple hover:scale-125 transition duration-300"
              href="#Experience"
            >
              Our Team
            </a>
          </li>
          <li>
            <a
              className=" text-md  font-avenir-light  font-medium mr-10  hover:text-purple hover:scale-125 transition duration-300"
              href="#Experience"
            >
              About Us
            </a>
          </li>
          <SocialLinks />
        </ul>

        <div class="bx bx-menu" id="menu-icon"></div>
      </header>
    </>
  );
}

export default Navbar;
