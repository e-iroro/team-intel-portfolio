import Membercard from "./Membercard"
function About(){

    return(
       <div className = "mt-32 w-full my-auto  border border-pink rounded text-center ">
        <p className = "font-questrial text-4xl mb-4 ">Meet the team 👋</p>
        <div className="flex flex-co flex-wrap justify-evenly" >
        <Membercard/>
        
            </div>
            
       </div>
    )
}

export default About