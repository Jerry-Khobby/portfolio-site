import React from 'react';
import skills from '../../data/skills';

const SkillsComponent = () => {
  return (
    <div className='px-4 sm:px-4 lg:px-48 md:px-36 flex flex-col items-start sm:items-start sm:justify-start pb-10 sm:mt-14 md:mt-10 lg:mt-14 mt-14'>
      <div>
        <h4 className='text-2xl text-white font-bold sm:text-2xl md:text-4xl lg:text-5xl' style={{ fontFamily: 'Fira Code' }}>
          Languages & Tools
        </h4>
      </div>
      <div className="mt-10 w-full overflow-hidden">
        <div className="flex items-center">
          <div className="flex animate-scroll gap-5">
            {[...skills, ...skills].map((skill, skillIndex) => (
              <div key={skillIndex} className='flex flex-col items-center w-1/4'>
                <div className='w-20 h-20 flex items-center justify-center'>
                  {skill.iconsSvg}
                </div>
                <div className='text-white text-center mt-2 text-sm font-serif'>{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
