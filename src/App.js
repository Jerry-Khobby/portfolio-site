import './App.css';
import React from 'react'
import HomeComponent from './components/Home/main';
import About from './components/About/main';
import NavbarComponent from './components/Navbar/main';
import "../src/font/FiraCode-Light.ttf";
import ExperienceComponent from './experiences/main';
import ProjectsComponent from './components/Projects/main';
import SkillsComponent from './components/skills/main';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {

  return (
    <div className="App">
        <NavbarComponent/>
      <HomeComponent/> 
     <About/> 
     <ExperienceComponent/> 
     <ProjectsComponent/>
     <SkillsComponent/>
    </div>
  );
}

export default App;
