import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import Homepage from './components/Homepage';
import NavBar from './components/NavBar';
import About from './pages/About';
import Project from './pages/Project';
import './App.css';
import './Layout.css'; 


const App = () => {
  useEffect(() => {
    const starContainer = document.querySelector('.stars');
    const starCount = 25;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const size = Math.random() * 3 + 1; 
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      starContainer.appendChild(star);
    }
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen bg-black">
        <div className="absolute inset-0 stars"></div> {/* Star background */}
        <NavBar />
        <div className="relative z-10"> 
       <Homepage />
       <About />
       <Project />
          <Routes>
            <Route path="/Homepage" element={<Homepage />} />
            <Route path="/about" element={<About />} />
           
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
