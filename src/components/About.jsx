import Leftsect from "./Leftsect"
import Rightsect from "./Rightsect"

function About(){

    return(
        <>
        <nav className="font-questrial text-2xl">Jay Ma</nav>
       <div className="flex flex-co  w-5/6 h-4/5  mt-24 mx-auto mb-48">
        <Leftsect/>
        <Rightsect/>
       </div>
       <footer className = "font-avenir-light text-sm absolute inset-auto bottom-px ">©2019 by Jay Ma</footer>
       </>
    )
}

export default About