import Hero from "./Hero";
import ProjectCard from "./ProjectCard";
import projects from "../project";


function createProjectCard(project) {
    return (
      <ProjectCard
        key={project.id}
        alt={project.alt}
        image={project.image}
        name={project.name}
        description={project.description}
        category={project.category}
        project={project.project}
        projectLink={project.projectlink}
        repoLink={project.repo}
      />
    );
  }


function Home() {
  return (
    <div>
        <Hero />
        {projects.map(createProjectCard)}  
    </div>
  )
}

export default Home