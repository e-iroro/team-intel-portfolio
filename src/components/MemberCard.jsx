import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faTwitter,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { members } from "../data/portfolioData";

function MemberCard() {
  return (
    <>
      {members.map((props) => (
        <div className=" md:w-1/3 p-6" key={props.id}>
          <img
            src={props.image}
            alt={props.alt}
            className="rounded-full w-60 h-60 mx-auto"
          />
          <div className=" text-center space-y-3 ">
            <p className="font-avenir-light text-sm mt-2"> {props.title}</p>
            <p className=" text-purple text-2xl">{props.name}</p>
            <p className="font-avenir-light ">{props.bio}</p>
          </div>
          <div className=" space-x-2 w-fit text-xl mx-auto text-purple flex">
            <div className=" space-x-4">
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

              <a href={props.twitter} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className={
                    "hover:cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
                  }
                />
              </a>
              <a href={props.github} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faGithub}
                  className={
                    "hover:cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
                  }
                />
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default MemberCard;
