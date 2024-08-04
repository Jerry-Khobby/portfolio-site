import './App.css';
import React,{useState,useEffect} from 'react'
import HomeComponent from './components/Home/main';
import About from './components/About/main';


function App() {

  const [mousePos,setMousePos]=useState({x:0,y:0});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div className="App">
      <div 
        className="flashlight"
        style={{ left: mousePos.x, top: mousePos.y }}>
      </div>
      <div>
      <HomeComponent/> 
      </div>
     <div>
     <About/> 
     </div>
     
    </div>
  );
}

export default App;
