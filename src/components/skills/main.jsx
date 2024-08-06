import React from 'react';
import Slider from 'react-slick';
import skills from '../../data/skills';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SkillsComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    easing: "linear",
    centerMode: true,
    centerPadding: "200px",
  };

  return (
    <div className='h-full px-4 sm:px-4 lg:px-48 md:36 flex flex-col items-start sm:items-start sm:justify-start pb-10 sm:mt-14 md:mt-10 lg:mt-14 mt-14'>
      <div>
        <h4 style={{ fontFamily: 'Fira Code' }} className='text-2xl text-white font-bold sm:text-2xl md:text-4xl lg:text-5xl'>
          Languages & Tools
        </h4>
      </div>
      <div className="mt-10 flex flex-row items-center justify-center gap-2 overflow-x-hidden w-[95%]">
        {skills.map((skill, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div className='w-20 h-20 flex items-center justify-center'>
              {skill.iconsSvg}
            </div>
            <div className='text-white text-center mt-2'>{skill.name}</div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default SkillsComponent;
