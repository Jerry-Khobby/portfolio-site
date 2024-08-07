import React from 'react';
import { FaEnvelope, FaPhone, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

const ContactComponent = () => {
  return (
    <div className='h-full w-full px-4 sm:px-4 lg:px-48 md:px-36 flex flex-col items-start pb-10 mt-14'>
      <div>
        <h4 style={{ fontFamily: 'Fira Code' }} className='text-2xl text-white font-bold sm:text-2xl md:text-4xl lg:text-5xl'>
          Contact Me
        </h4>
      </div>
      <div className='flex flex-col lg:flex-row gap-[1rem] sm:gap-[1rem] md:gap-[1rem] lg:gap-[30rem] mt-8'>
        <div className='flex flex-col w-full'>
          <div className='mb-4 flex items-start text-start text-md text-white' style={{ fontFamily: 'Fira Code' }}>Suggestions Box</div>
          <div className='mb-4'>
            <h2>Email</h2>
            <input type="email" className='border p-2 rounded w-full' />
          </div>
          <div>
            <h2>Description</h2>
            <input type="text" className='border p-2 rounded w-full' />
          </div>
        </div>
        <div className='flex flex-col w-full'>
          <div className='mb-4 flex items-start text-start text-md text-white' style={{ fontFamily: 'Fira Code' }}>Let's work together</div>
          <div className='mb-4'>
            <div className='flex items-center mb-2'>
              <FaEnvelope className='mr-2' color='gray' /> <span className='font-serif text-sm text-gray-400'>jeremiah.anku.coblah@gmail.com</span>
            </div>
            <div className='flex items-center'>
              <FaPhone className='mr-2' color='gray' /> <span className='text-gray-400 text-sm font-serif'>+233 243997081</span>
            </div>
          </div>
          <div className='text-center'>
            <hr className='my-4 border-gray-600 w-full sm:w-4/5 md:w-1/2 lg:w-1/3 mx-auto' />
            <div className='flex space-x-4 mb-4 items-center justify-center'>
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaTwitter className='text-white' />
              </a>
              <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaFacebook className='text-white' />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='text-white' />
              </a>
            </div>
            <div className='text-white text-center text-sm mt-4'>
              © 2024 Made by Jerry
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
