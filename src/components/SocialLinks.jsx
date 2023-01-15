import {
  faLinkedinIn,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialLinks(props) {
  return (
    <div className=" flex list-none">
      <li>
        <a
          className="  text-xl font-avenir-light font-medium mx-2 hover:text-purple hover:scale-125 transition duration-300 "
          href="/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
      <li>
        <a
          className="  text-xl md:text-xl font-avenir-light font-medium mx-2 hover:text-purple hover:scale-110 transition duration-300"
          href="{props.linkedin}"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </li>
      <li>
        <a
          className=" text-xl md:text-xl font-avenir-light font-medium mx-2  hover:text-purple"
          href="{props.instagram}"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
    </div>
  );
}

export default SocialLinks;
