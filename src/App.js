import './App.css';
import React from 'react'
import HomeComponent from './components/Home/main';
import About from './components/About/main';
import NavbarComponent from './components/Navbar/main';
import "../src/font/FiraCode-Light.ttf";


function App() {

  return (
    <div className="App">
        <NavbarComponent/>
      <HomeComponent/> 
     <About/> 
    </div>
  );
}

export default App;
