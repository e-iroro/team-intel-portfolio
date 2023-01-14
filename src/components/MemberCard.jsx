import TeamSocialLinks from "./TeamSocialLinks";

function MemberCard(props) {
  return (
      <div className=" md:w-1/3 p-6 ">
        <img
          src={props.image}
          alt={props.alt}
          className="rounded-full w-60 h-60 mx-auto"
        />
        <div className=" text-center space-y-3 ">
          <p className="font-avenir-light text-sm mt-2"> {props.title}</p>
          <p className=" text-purple text-2xl">{props.name}</p>
          <p className="font-avenir-light ">{props.bio}</p>
          <TeamSocialLinks />
        </div>
      </div>
  );
}

export default MemberCard;
