import React from 'react'
import {experience} from "../data/experiences";



const ExperienceComponent = () => {
  return (  
    <div className='h-full  px-4 sm:px-4 lg:px-48 md:36 flex flex-col items-start sm:items-start sm:justify-start pb-10 sm:mt-14 md:mt-10 lg:mt-14 mt-14'>
      <div>
        <h4 style={{fontFamily: 'Fira Code'}} className='text-2xl text-white font-bold sm:text-2xl md:text-4xl lg:text-5xl'>Experiences </h4>
      </div>
      <div>
        <h4 style={{fontFamily: 'Fira Code'}} className='text-lg pt-3 text-white underline'>Professional </h4>
      </div>
    <div>
    {experience.map((index) => (
        <div key={index} className='mt-2'>
          <h5 className='text-lg text-white font-normal  list-item' style={{fontFamily:'Fira Code'}}>{index.role} - {index.company}</h5>
          <p className='text-sm text-gray-400 pt-2' style={{fontFamily:'Fira Code'}}>{index.duration}</p>
          <p className="text-sm font-light  text-white pt-5" style={{fontFamily:'Fira Code'}}>{index.description}</p>
        </div>
      ))}
    </div>
    <div>
        <h4 style={{fontFamily: 'Fira Code'}} className='text-lg mt-10 text-white underline'>Leisure </h4>
      </div>
      <div>
{/*       {leisure.map((index) => (
        <div key={index} className='mt-2'>
          <h5 className='text-lg text-white font-normal  list-item' style={{fontFamily:'Fira Code'}}>{index.title}</h5>
          <p className="text-sm font-light  text-white pt-5" style={{fontFamily:'Fira Code'}}>{index.description}</p>
        </div>
      ))} */}
      </div>
    </div>
  );
}
 
export default ExperienceComponent;