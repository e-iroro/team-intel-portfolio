import React, { useState } from 'react';
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';

function App() {

    const slides = [
        "\"Jay is a pleasure to work with, learns quickly, and has enormous growth potential. During her internship at Uber, she ramped up instantly and took on a difficult and ambiguous project for the Seattle design studio. Jay worked through unclear requirements, external dependencies, and challenging stakeholders like a professional. Jay follows a solid UX process, works quickly, and requires minimal oversight. She is especially organized for a designer and is able to articulate her design decisions and timelines clearly. She delivered timely impactful work that met our bar for quality. She’s fun, has a positive attitude, seeks out feedback, wants to help others improve.\"", "\"Jay tackled her internship project professionally and provided the team with clear design solutions or offered numerous recommendations to improve product. She was iterative, applying a consistent approach to each problem and deliverable. Jay is extremely detailed as she documents and follows through on feedback from design and engineering reviews. And she’s highly collaborative with stakeholders, engineering, and remote teams. Jay’s background in industrial design was a natural fit for product/user experience design but still demonstrated a willingness to learn and grow. Along with her work contributions, her positive attitude and lively energy made a big impact to our team.\"", "\"Jay is a very enthusiastic, self-driven designer. Over the past few months, Jay has been interning at XBoost as a product designer, where she introduced a novel, minimalistic design for a fully autonomous arm exoskeleton device. The device went through many design iterations through which Jay introduced different designs at each stage and demonstrated strong communication skills, working with a team of mechanical engineers to ensure full functionality of the device. Jessie is one the most talented designers I have come across, and I recommend her for any professional setting.\"", "\"Jay invited me to join her team for Protothon's Hackathon. We worked together designing an app to bring children closer together during the pandemic. Although we were crunched for time, Jay was able to manage her share of the work flawlessly. She was incredibly detail oriented and able to quickly put together a path for our design process that leveraged her skills in design thinking. Her positive attitude and deep care for people is inspiring, as is her ability to think quickly under pressure. She will be a great asset to any employer.\""
    ]

    const slideHeader = "What others have said"

    const slideAuthor = ["— Brad Monahan, Design Manager @ Uber","— Vince de Asis, Product Designer & Mentor @ Uber","— Mohamed Tawfik, Founder & CEO of XBoost", "— Rosie Olaivar, UX Designer, Researcher, & Writer"]

    const [currentIndex, setCurrentIndex] = useState(0)

    
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }
    
    return ( 
        
        <div className = "w-[100%] max-h-full p-8 relative text-center bg-light-pink bg-contain shadow-lg duration-5000">
            
        <div className = "mx-[15%] w-[70%] h-128 my-24 bg-center bg-cover bg-white text-center py-12 px-40 md:max-sm:flex" > 

        {/* Design header div */}
        <h1 className='p-2 mb-2 text-center font-questrial text-xl'>{slideHeader} <hr className='w-40 ml-[35%] mt-2 md:max-sm:flex'></hr> </h1> 

        {/* Design slides div */}
        <div className='leading-5 font-questrial text-left text-sm opacity-90 tracking-normal'>
        {slides[currentIndex]} 
        </div>  

        {/* Design footer div */}
        <div className='italic mt-4 opacity-50 font-avenir-light text-lg'>
        {slideAuthor[currentIndex]}
        </div>

        {/* Arrow left */}
        <div className='absolute top-[50%] right-[80%] text-2xl text-black cursor-pointer'><BsChevronCompactLeft onClick={prevSlide} size={30}/></div>  

        {/* Arrow right */}
        <div className='absolute top-[50%] left-[80%] text-2xl text-black cursor-pointer'><BsChevronCompactRight onClick={nextSlide} size={30}/></div>

        
        </div>

        <div className= 'flex top-4 justify-center py-2 opacity-50'>
            {slides.map((slide, slideIndex) => (
                <div key={slideIndex} onClick={() =>goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
                    <RxDotFilled></RxDotFilled>
                    </div>
            )
            )}
        </div>

         </div>
        

        

    );
}

export default App;