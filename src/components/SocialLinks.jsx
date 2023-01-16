import { faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { wtFellowshipLinks } from "../data/portfolioData";
function SocialLinks() {
  return (
    <>
      {wtFellowshipLinks.map((props) => (
        <div className=" flex list-none" key={props.id}>
          <li>
            <a
              className="  text-xl font-avenir-light font-medium mx-2 hover:text-purple hover:scale-125 transition duration-300 "
              href={props.mail}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className={
                  "hover:cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
                }
              />
            </a>
          </li>
          <li>
            <a
              className="  text-xl md:text-xl font-avenir-light font-medium mx-2 hover:text-purple hover:scale-110 transition duration-300"
              href={props.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className={
                  "hover:cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
                }
              />
            </a>
          </li>
          <li>
            <a
              className=" text-xl md:text-xl font-avenir-light font-medium mx-2  hover:text-purple"
              href={props.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className={
                  "hover:cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
                }
              />
            </a>
          </li>
        </div>
      ))}
    </>
  );
}

export default SocialLinks;
