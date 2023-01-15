function ProjectCard(props) {
  return (
    <>
      <section className=" bg-violet ">
        <div className=" flex flex-col md:flex-row py-10 w-3/4 mx-auto ">
          <img src={props.image} alt={props.alt} width="500" />
          <div className=" pt-8 md:pt-0 mx-8 my-auto">
            <h2 className=" font-questrial text-3xl pb-4 text-purple ">
              {props.name}
            </h2>
            <p className=" font-work-sans text-xl pb-14">{props.description}</p>
            <p className=" font-work-sans text-xl pb-4">{props.category}</p>
            <div className=" my-4 ">
              <a href={props.projectLink} target="_blank" rel="noreferrer"></a>
              <a href={props.repoLink} target="_blank" rel="noreferrer"></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectCard;
