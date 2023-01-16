import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {projects} from "../data/portfolioData";

function ProjectCard() {
  return (
    <>
      <section className=" bg-violet ">
        {projects.map((props) => (
          <div
            className=" flex flex-col md:flex-row py-10 w-3/4 mx-auto "
            key={props.id}
          >
            <img src={props.image} alt={props.alt} width="500" />
            <div className=" pt-8 md:pt-0 mx-8 my-auto">
              <h2 className=" font-questrial text-3xl pb-4 text-purple ">
                {props.name}
              </h2>
              <p className=" font-work-sans text-xl pb-14">
                {props.description}
              </p>
              <p className=" font-work-sans text-xl pb-4">{props.category}</p>
              <div className=" my-4 ">
                <a
                  href={props.projectlink}
                  target="_blank"
                  rel="noreferrer"
                  className=" hover:text-purple text-2xl mr-5 hover:cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
                >
                  <FontAwesomeIcon
                    icon={faUpRightFromSquare}
                    className={
                      "hover:cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
                    }
                  />
                </a>
                <a
                  href={props.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-purple text-2xl mr-5 hover:cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
                >
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
      </section>
    </>
  );
}

export default ProjectCard;
