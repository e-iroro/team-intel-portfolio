 //install font awewsome 
// import 'font-awesome/css/font-awesome.min.css'; //import in react app
import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
 import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faEnvelope, fab, faCheckSquare, faCoffee)

function Navbar() {
    return (
      <>
        {/* <div className=" text-center bg-light-blue text-blue">
          <h2 className=" font-questrial text-5xl">
            This is the heading. (Questrial)
          </h2>
          <p className=" font-work-sans text-lg">
            This is one paragraph (Work Sans)
          </p>
          <p className=" font-avenir-light text-lg">
            This is another paragraph (Avenir Light)
          </p>
          <p>
            Before you build, install this extension from VSCode{" "}
            <a
              href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
              className=" font-bold underline"
            >
              CLICK HERE
            </a>
          </p>
          <small>Feel free to comment this section out while building</small>
        </div> */}
{/* text-purple-400 */}


        <header className="mx-64 justify-end fixed w-full right-0 top-6 flex items-center  bg-transparent z-1000 px-4 py-3  transition-all duration-75">
         
          <ul className="text-red list-none flex" id="nav">
          <li>
              <h1 className="hover:underline text-xl md:text-xl font-questrial font-medium mx-96 transition-all duration-115" href="#Home">
                Jay Ma
              </h1>
            </li>
            <li>
              <a className="hover:text-pink  hover:underline text-sm md:text-sm font-avenir-light font-medium mx-6 transition-all duration-115" href="#Home">
                Work
              </a>
            </li>
            <li>
              <a className="hover:text-pink hover:underline text-sm md:text-sm  font-avenir-light  font-medium mx-6 transition-all duration-115" href="#About">
               Resume
              </a>
            </li>
            <li>
              <a className="hover:text-pink hover:underline text-sm md:text-sm  font-avenir-light  font-medium mx-6 transition-all duration-115" href="#Projects">
                Sketchbook
              </a>
            </li>
            <li>
              <a className="hover:text-pink hover:underline text-sm md:text-sm font-avenir-light  font-medium mx-6 transition-all duration-115" href="#Experience">
                About
              </a>
            </li>
            <li>
              <a className="  text-xl md:text-xl font-avenir-light  font-medium mx-2 transition-all duration-115" href="#Skills">
              <FontAwesomeIcon icon="fa-regular fa-envelope" />
              </a>
            </li>
            <li>
              <a className="  text-xl md:text-xl font-avenir-light  font-medium mx-2 transition-all duration-1155" href="#Services">

              
              <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />

              </a>
            </li>
            <li>
              <a className=" text-xl md:text-xl font-avenir-light  font-medium mx-2 transition-all duration-115" href="#Contact">
              
              
              <FontAwesomeIcon icon="fa-brands fa-instagram" />
              </a>
            </li>
          </ul>

          <div class="bx bx-menu" id="menu-icon"></div>
        </header>
      </>
    );
  }
  
  export default Navbar;