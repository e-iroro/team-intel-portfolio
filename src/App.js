import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import projects from './project';


function createProjectCard(project) {
  return (
    <ProjectCard
      key = {project.id}
      alt = {project.alt}
      image = {project.image}
      name = {project.name}
      description = {project.description}
      category = {project.category}
      project = {project.project}
      projectLink={project.projectlink}
      repoLink={project.repo}
     />
  )
}



function App() {
  return (
    <div className=" w-4/6 mx-auto ">
        <Navbar />
        <Hero />
    </div>
  );
}

export default App;
