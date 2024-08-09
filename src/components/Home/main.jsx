import React, { useEffect, useState } from 'react';
import './home.css';
import { BsFileEarmarkPdf, BsGithub } from "react-icons/bs";
import { Tooltip } from 'react-tooltip';

export default function HomeComponent() {
  const name = "Jeremiah Anku Coblah";
  const delay = 190;
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [infinite] = useState(true);

  useEffect(() => {
    let timeout;

    if (currentIndex < name.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + name[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
    } else if (infinite) {
      setTimeout(() => {
        setCurrentIndex(0);
        setCurrentText('');
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, name]);

  return (
    <div className='h-full w-full px-4 sm:px-4 lg:px-48 md:px-36 flex flex-col items-start pb-10 mt-32'>
      <div>
        <h4 style={{ fontFamily: 'Fira Code' }} className='text-lg text-white font-normal sm:text-2xl md:text-4xl lg:text-5xl'>
          Hi 👋, my name is {currentText}
        </h4>
        <h4 className="text-lg text-gray-400  mt-10" style={{fontFamily:'Fira Code'}}>Software Developer</h4>
      </div>
      <div className='mt-20'>
        <p className='text-white text-md'style={{fontFamily:'Fira Code'}}>You can access my Resume and Github account from the link below</p>
      </div>

      <div className='flex mt-26 space-x-4'>
        <a 
          href="https://drive.google.com/file/d/17YFKflQxGggZ4ywoxQuwWSJmWmzgHQVN/view" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="Download Resume" 
          className="bg-gray-700 p-3 rounded hover:bg-gray-800 transition"
          data-tooltip-id="downloadResume"
        >
          <BsFileEarmarkPdf className="text-white text-2xl" />
        </a>
        <Tooltip id="downloadResume" content="Resume" />
        <a 
          href="https://github.com/Jerry-Khobby" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="GitHub" 
          className="bg-gray-700 p-3 rounded hover:bg-gray-800 transition"
          data-tooltip-id="Github"
        >
          <BsGithub className="text-white text-2xl" />
        </a>
        <Tooltip id="Github" content="Github" />
      </div>
    </div>
  );
}
