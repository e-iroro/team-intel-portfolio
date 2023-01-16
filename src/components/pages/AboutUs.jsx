import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className=" bg-violet  py-24 ">
        <h1 className="text-center text-5xl font-avenir-heavy text-purple py-10 ">
          About us
        </h1>
        <div className="flex  justify-center items-center m-auto w-3/4 rounded-lg">
          <div className="flex flex-col mx-1 my-1 space-y-7 md:space-y-0 md:space-x-7 md:flex-row">
            <div className="w-full bg-purple md:w-1/3  rounded-xl px-3 py-2 font-avenir-regular shadow-2xl text-violet text-base">
              <h2 className="mx-1 font-avenir-heavy text-2xl pb-2">Women Techsters</h2>
              <p>
                The Women Techsters initiative, an initiative of Tech4Dev is
                aimed at bridging the digital and technology knowledge divide
                between men and women as well as ensuring equal access to
                opportunities for all. We are empowering girls and women across
                Africa with varying degrees of digital, deep tech and soft
                skills required within the technology ecosystem. Our objective
                is to grow and support an army of tech empowered girls and women
                across Africa who will have equal access to decent job
                opportunities as well as build and scale their ideas into
                tech-enabled businesses and deep tech startups, which will aid
                Africa’s economic growth.
              </p>
            </div>

            <div className="w-full bg-purple md:w-1/3   rounded-xl px-3 py-2 font-avenir-regular shadow-2xl text-violet text-base">
              <h2 className="mx-1 font-avenir-heavy text-2xl pb-2">Tech4Dev</h2>
              <p>
                Technology for Social Change and Development Initiative
                (Tech4Dev) is a non-profit social enterprise established in 2016
                that creates access to decent work and opportunities for
                Africans through digital skills empowerment and advocacy. Our
                vision is to equip Africans with digital and life skills that
                foster economic prosperity, financial freedom, and sustainable
                development, contributing immensely to the tech ecosystem and
                the economy of the world at large, starting with Africa. We
                believe in the efficacy of digital literacy as a tool for
                empowerment and development and commit fully to creating
                opportunities for people, especially those in underserved
                communities, through digital skills.
              </p>
            </div>

            <div className="w-full bg-purple  md:w-1/3  rounded-xl px-3 py-2 font-avenir-regular shadow-2xl text-violet text-base">
              <h2 className="mx-1 font-avenir-heavy text-2xl pb-2">Team Intel</h2>
              <p>
                Team Intel comprises a team of 11 ladies led by Blessing
                Ejogbamu, learning frontend software development alongside other
                extraordinary ladies in the Women Techster's fellowship class of
                2023. We are beneficiaries of the Women Testers Fellowship, an
                initiative of Tech4dev. Though given the name Intel, we took it
                as an abbreviation for Intelligence, so we are a team of
                intelligent, like-minded, and goal-oriented ladies, learning and
                collaborating to build unique projects. Thanks to the Organizers
                of this program, our Executive director, Ms. Diwura Oladepo, our
                fantastic facilitators, Mr. Ilegbinijie Edosa Innocent and Mr. Ayodele Aranisola, and our
                sponsors, Microsoft, ISDB, Prunudge, and others not mentioned
                here, for making this a reality.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
