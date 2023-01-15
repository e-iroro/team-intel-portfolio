import Hero from './components/Hero';
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import About from "./components/About";
import Footer from "./components/Footer";
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
    <div className="  ">
      <Navbar />
      <Hero />
      {projects.map(createProjectCard)}
      <About  />
      <Footer />
    </div>
  );
}

export default App;
