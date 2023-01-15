import SocialLinks from "./SocialLinks";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TeamSocialLinks() {
  return (
    <div className=" space-x-2 w-fit text-xl mx-auto text-purple flex ">
      <SocialLinks />
      <div className=" space-x-4 ">
        <a href="{props.twitter}" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="{props.github}" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
}

export default TeamSocialLinks;
