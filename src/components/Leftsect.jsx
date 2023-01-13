function Leftsect(){
    
        const MainImage = "https://static.wixstatic.com/media/ac14b7_cdf10f7b610247d98d55fa0c03e757e6~mv2.jpg/v1/crop/x_190,y_963,w_2232,h_2234/fill/w_652,h_652,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/00100dPORTRAIT_00100_BURST20200824194734.jpg"
        return(
            <section className= "w-fit flex-shrink-0">
                <img src ={MainImage} className ="rounded-full w-80 h-80 mb-6" 
                alt = "Main profile"/>
                <h2 className="font-avenir-heavy text-base " >What I am up to</h2>
                <ul className= "font-avenir-light text-sm list-disc ml-8 ">
                    <li>Playing Legend of Zelda: Breath of the Wild</li>
                    <li>Learning how to play the guzheng </li>
                    <li>Playing badminton</li>
                    <li>Advocating for Lupus & Lupus Nephritis 💜</li>
                </ul>
            </section>
    )
}

export default Leftsect