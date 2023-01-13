import Test from './components/Test';
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
    <div className=" w-3/4 mx-auto ">
        <Test />
        {projects.map(createProjectCard)}
    </div>
  );
}

export default App;
