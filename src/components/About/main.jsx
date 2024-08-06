import React from 'react'


const AboutComponent = () => {
  return (  
    <div className='h-full  px-4 sm:px-4 lg:px-48 md:36 flex flex-col items-start sm:items-start sm:justify-start pb-10 sm:mt-14 md:mt-10 lg:mt-0 mt-14'>
      <div>
        {/** the About  */}
        <h4 style={{fontFamily:'Fira Code'}} className='text-2xl text-white text-bold  sm:text-2xl md:text-4xl lg:text-5xl '>About</h4>
      </div>
      <div>
        {/** descriptions */}
      <p className='text-white sm:text-sm md:text-sm lg:text-lg text-sm text-bold' style={{fontFamily:'Fira Code'}}>
      I am a full stack mobile and web app developer with nearly 3 years of experience. I craft dynamic and efficient applications, driven by a keen enthusiasm for data science and machine learning.
      I continuously expand my knowledge and skills, and I'm passionate about using my diverse background to drive innovation and improve user experiences.
      I am eager to contribute to a forward-thinking team with my dedication and expertise.
      </p>
      </div>


    </div>
  );
}
 
export default AboutComponent;