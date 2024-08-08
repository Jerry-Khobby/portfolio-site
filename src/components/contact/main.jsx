import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from "@emailjs/browser";

const ContactComponent = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    description: '',
    name:'',
  });
  const [sendEmail,setSendMail]=useState(false);
  const [messages,setMessages]=useState('');
  const [warning,setWarning]=useState(false);

  let templateParams={
    name:formData.name,
    email:formData.email,
    notes:formData.description
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  // handle sending the email 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, templateParams, {
        publicKey:process.env.REACT_APP_PUBLIC_ID,
      }).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setFormData({
            name: '', description: '', email: ''
          })
          setTimeout(() => {
            setSendMail(true);
            setMessages('Email sent successfully');
          }, 1000);
        },
        (err) => {
          console.log('FAILED.....', err);
          setMessages('Email Failed to be Sent');
        }
      );
    } catch (e) {
      console.log("There was an error", e);
  setTimeout(()=>{
    setMessages('Email Failed to be Sent, check your network');
    setWarning(true);
  },5000);
    }
  };
  
  return (
    <div className='h-full w-full px-4 sm:px-4 lg:px-48 md:px-36 flex flex-col items-start pb-10 mt-14'>
      <div>
        <h4 style={{ fontFamily: 'Fira Code' }} className='text-2xl text-white font-bold sm:text-2xl md:text-4xl lg:text-5xl'>
          Contact Me
        </h4>
      </div>
      <div className='flex flex-col lg:flex-row gap-[1rem] sm:gap-[1rem] md:gap-[1rem] lg:gap-[24rem] mt-8'>
        <form onSubmit={handleSubmit} className='flex flex-col w-full'>
          <div className='mb-4 flex items-start text-start text-md text-white' style={{ fontFamily: 'Fira Code' }}>Suggestions Box</div>
          {sendEmail&&(
            <div className={`text-md font-serif ${warning?'text-red-500':'text-green-600'}`}>{messages}</div>
          )}
          <div className='mb-4'>
            <h2 className='text-white text-sm pb-2' style={{ fontFamily: 'Fira Code' }}>Name</h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className='border p-2 rounded w-full'
              required
              placeholder='Enter your name'
            />
          </div>
          <div className='mb-4'>
            <h2 className='text-white text-sm pb-2' style={{ fontFamily: 'Fira Code' }}>Email</h2>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='border p-2 rounded w-full'
              required
              placeholder='Enter your email'
            />
          </div>
          <div>
            <h2 className='text-white text-sm pb-2' style={{ fontFamily: 'Fira Code' }}>Description</h2>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className='border p-2 rounded w-[20rem] h-[10rem]'
              placeholder='Enter your text'
              required 
            />
          </div>
          <div>
            <button type="submit" className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300'>
              Send
            </button>
          </div>
        </form>
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
              <a href="https://twitter.com/jerry92023784" target="_blank" rel="noopener noreferrer">
                <FaTwitter className='text-white' />
              </a>
              <a href="https://www.facebook.com/jerry.mardeburg" target="_blank" rel="noopener noreferrer">
                <FaFacebook className='text-white' />
              </a>
              <a href="https://www.linkedin.com/in/jeremiah-coblah-anku-2b3732229/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='text-white' />
              </a>
              <a href="https://github.com/Jerry-Khobby" target="_blank" rel="noopener noreferrer">
                <FaGithub className='text-white' />
              </a>
            </div>
            <div className='text-white text-center text-sm mt-4 font-serif'>
              © ❤️2024 Made by Jerry
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
