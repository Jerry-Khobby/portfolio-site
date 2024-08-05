import './App.css';
import React from 'react'
import HomeComponent from './components/Home/main';
import About from './components/About/main';
import NavbarComponent from './components/Navbar/main';


function App() {

  return (
    <div className="App">
      <div>
        <NavbarComponent/>
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
