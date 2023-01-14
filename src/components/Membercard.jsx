import Karimas from "../assets/WhatsApp Image 2022-09-27 at 04.32.05.jpeg"

function Membercard(){
    return(
        <div className=" ml-2 mb-2 w-60">
            <img src ={Karimas} alt= "Karima" className = "rounded-full w-60 h-60"/>
            <div className = " w-max-100%">
            <p className="font-avenir-light text-xs text-grey"> Team member</p>
            <p className="font-alex-brush text-light-red text-lg">Karima Ali</p>
            <p className="font-avenir-light text-sm" >Aspiring developer, zoologist, food lover & Taekwondo player,who is very passionate about software development & cats </p> 
            <p>socialmedia place holder</p>
            </div> 
            </div>

    )
}

export default Membercard

