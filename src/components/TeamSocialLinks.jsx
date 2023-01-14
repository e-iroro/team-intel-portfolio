import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TeamSocialLinks() {
  return (
    <div className=" space-x-4 text-2xl text-purple">
        <a><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
        <a><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
        <a><FontAwesomeIcon icon="fa-brands fa-github" /></a>
        <a><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
    </div>
  )
}

export default TeamSocialLinks