import MemberCard from "../MemberCard";

function Team() {
  return (
    <section className=" bg-violet py-24">
        <div className="pt-10  my-auto text-center w-3/4 mx-auto">
          <h1 className="font-questrial text-4xl mb-4 ">Meet the team 👋</h1>
          <p className="font-questrial text-lg mb-4 ">
            Meet the people who worked tirelessly to build this project
          </p>
          <div className="flex flex-co flex-wrap space-y-10 md:space-y-0 justify-evenly">
            <MemberCard />
          </div>
        </div>
    </section>
  );
}

export default Team;
