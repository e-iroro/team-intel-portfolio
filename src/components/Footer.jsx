import SocialLinks from "./SocialLinks";
function Footer() {
  return (
    <>
      <div className="  mx-auto  font-avenir-light space-y-4 items-center">
        <div className={"mx-auto w-fit pt-4"}>
          <SocialLinks />
        </div>
        <div className=" flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5 w-fit mx-auto">
          <p className=" text-lg my-auto">Sponsored by</p>
          <a
            href="https://www.microsoft.com/en-ng"
            target="_blank"
            rel="noreferrer"
            className=" pt-4 "
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
              alt="Microsoft Logo"
              width={100}
            />
          </a>
          <a href="https://www.isdb.org/" target="_blank" rel="noreferrer">
            <img
              src="https://getlogo.net/wp-content/uploads/2019/11/islamic-development-bank-isdb-logo-vector.png"
              alt="Islamic Development Bank (IsDB) Logo"
              width={90}
            />
          </a>
          <a href="https://fintech-egypt.com/" target="_blank" rel="noreferrer">
            <img
              src="https://fintech-egypt.com/img/logo.png"
              alt="FinTech Egypt Logo"
              width={90}
            />
          </a>
        </div>
        <p className=" text-center text-xl ">
          Built with{" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
            width={30}
            className=" inline"
            alt="TailwindCSS Logo"
          />{" "}
          and{" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            width={30}
            className=" inline"
            alt="ReactJs Logo"
          />
        </p>
        <p className=" text-center">© 2023 by Team Intel</p>
      </div>
    </>
  );
}

export default Footer;
