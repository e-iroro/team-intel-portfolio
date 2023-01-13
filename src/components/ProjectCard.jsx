import React from "react";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectCard(props) {
  return (
    <>
      <div className=" flex flex-col md:flex-row my-20">
        
        <img src={props.image} alt={props.alt} width="500"/>
        <div className=" pt-8 md:pt-0 mx-8 my-auto">
          <h2 className=" font-questrial text-3xl pb-4 ">
            {props.name}
          </h2>
          <p className=" font-work-sans text-xl pb-14">{props.description}</p>
          <p className=" font-work-sans text-xl pb-4">{props.category}</p>
          <p className=" font-avenir-light text-sm text-pink underline">
            <a href={props.project}> View Project</a>
          </p>
          <div className=" my-4 ">
            <a href={props.projectLink} target="_blank" rel="noreferrer" >
              <FontAwesomeIcon
                className=" text-2xl mr-5 hover:cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
                icon={faArrowUpRightFromSquare}
              />
            </a>
            <a href={props.repoLink} target="_blank" rel="noreferrer">
              <FontAwesomeIcon className=" text-2xl mr-5 hover:cursor-pointer hover:scale-125 transition duration-300 ease-in-out" icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
