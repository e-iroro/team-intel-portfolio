import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faEnvelope, fab, faCheckSquare, faCoffee);

function SocialLinks() {
  return (
    <div className=" flex">
      <li>
        <a
          className="  text-xl md:text-xl font-avenir-light font-medium mx-2 hover:text-purple hover:scale-125 transition duration-300"
          href="mailto:wtfellowship@tech4dev.com"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon="fa-regular fa-envelope" />
        </a>
      </li>
      <li>
        <a
          className="  text-xl md:text-xl font-avenir-light font-medium mx-2 hover:text-purple hover:scale-125 transition duration-300"
          href="https://ng.linkedin.com/company/tech4dev"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
        </a>
      </li>
      <li>
        <a
          className=" text-xl md:text-xl font-avenir-light font-medium mx-2 hover:text-purple hover:scale-125 transition duration-300"
          href="https://www.instagram.com/tech4dev"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon="fa-brands fa-instagram" />
        </a>
      </li>
    </div>
  );
}

export default SocialLinks;
