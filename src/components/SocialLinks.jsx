function SocialLinks() {
  return (
    <div className=" flex list-none">
      <li>
        <a
          className="  font-avenir-light font-medium mx-2 hover:text-purple hover:scale-125 transition duration-300"
          href="mailto:wtfellowship@tech4dev.com"
          target="_blank"
          rel="noreferrer"
        >
          Testing
        </a>
      </li>
      <li>
        <a 
          className="  text-xl md:text-xl font-avenir-light font-medium mx-2 hover:text-purple hover:scale-125 transition duration-300"
          href="https://ng.linkedin.com/company/tech4dev"
          target="_blank"
          rel="noreferrer"
        >
          Please work
        </a>
      </li>
      <li>
        <a
          className=" text-xl md:text-xl font-avenir-light font-medium mx-2 hover:text-purple hover:scale-125 transition duration-300"
          href="https://www.instagram.com/tech4dev"
          target="_blank"
          rel="noreferrer"
        >
          Hmmmm
        </a>
      </li>
    </div>
  );
}

export default SocialLinks;
