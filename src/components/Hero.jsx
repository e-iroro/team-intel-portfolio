function Hero() {
  return (
    <div className=" flex flex-col md:flex-row  justify-between mt-11 items-center">
      <img
        src="https://theedresearchhub.com/wp-content/uploads/2022/03/WT-LOGO-1.png"
        alt="Women Techsters Logo"
        srcset=""
        width={240}
      />
      <div className=" pl-0 md:pl-20 sm:mt-10">
        <h1 className=" font-questrial text-purple text-3xl pb-7">
          Hi! We're Team Intel.
        </h1>
        <p className=" font-work-sans text-black text-xl">
          We're a group of 10 women who are frontend development fellows on the
          Women's Techsters Fellowship, Class of 2023!
        </p>
        <p className=" font-work-sans pt-9 text-black text-xl">
          We're are{" "}
          <a
            href="https://github.com/blessdamy"
            target="_blank"
            rel="noreferrer"
            className=" hover:text-purple"
          >
            Blessing,
          </a>{" "}
          <a
            href="https://github.com/Kari3as"
            target="_blank"
            rel="noreferrer"
            className=" hover:text-purple"
          >
            Karima,
          </a>{" "}
          <a
            href="https://github.com/e-iroro"
            target="_blank"
            rel="noreferrer"
            className=" hover:text-purple"
          >
            Eru,
          </a>{" "}
          <a
            href="https://github.com/Zeinab-kasemy"
            target="_blank"
            rel="noreferrer"
            className=" hover:text-purple"
          >
            Zeinab,
          </a>{" "}
          <a
            href="https://github.com/Omolewaaye"
            target="_blank"
            rel="noreferrer"
            className=" hover:text-purple"
          >
            Lewa,
          </a>{" "}
          <a
            href="https://github.com/e-iroro"
            target="_blank"
            rel="noreferrer"
            className=" hover:text-purple"
          >
            Folasade,
          </a>{" "}
          <a
            href="https://github.com/akite123"
            target="_blank"
            rel="noreferrer"
            className=" hover:text-purple"
          >
            Joyce,
          </a>{" "}
          <a
            href="https://github.com/Nancy4Hany"
            target="_blank"
            rel="noreferrer"
            className=" hover:text-purple"
          >
            Nancy and
          </a>{" "}
          <a
            href="https://github.com/DeCoder361"
            target="_blank"
            rel="noreferrer"
            className=" hover:text-purple"
          >
            Jemila.
          </a>{" "}
         
        </p>
      </div>
    </div>
  );
}

export default Hero;
