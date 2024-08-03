import './App.css';
import React,{useState,useEffect} from 'react'


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
      <div>{/** fixed section */}</div>

<div>{/** scrollable sections */}</div>    
    </div>
  );
}

export default App;
