import React, { useEffect, useState } from 'react';
import './home.css';
import { BsFileEarmarkPdf, BsGithub } from "react-icons/bs";

export default function HomeComponent() {
  const name = "Jeremiah Anku Coblah";
  const delay = 150;
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [infinite, setInfinite] = useState(true); // Assume you want infinite loop

  // use useEffect to render the things 
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
        <h4 style={{ fontFamily: 'Fira Code' }} className='text-lg text-white font-semibold sm:text-2xl md:text-4xl lg:text-5xl'>
          Hi 👋,my name is {currentText}
        </h4>
      </div>
      {/** I want to show an icon here that people can use to view my resume or go to my github account  */}
    </div>
  );
}
