import React from 'react';
import { FaGithub } from 'react-icons/fa'; 

const Project = () => {
  return (
    <div className="projects-section py-16 bg-black text-white relative">
      <h2 className="text-4xl text-center mb-12 relative z-10">My Projects</h2>

      <div className="absolute inset-x-0 top-32 flex justify-center">
        <div className="w-0.5 border-r-2 border-dotted border-white h-full"></div>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 px-10 md:px-20">

        <div className="project-card p-6 bg-gray-800 rounded-lg transform transition duration-300 hover:scale-105 ml-auto w-full md:w-3/4 h-auto">
          <h3 className="text-2xl mb-4">Netflix Clone</h3>
          <img src="netflix.png" alt="Netflix Clone" className="mb-4 rounded-lg object-cover h-40 w-full" />
          <p>A clone of Netflix using React, TMDB API, and styled with Tailwind CSS.</p>

          <div className="flex justify-between items-center mt-6">
            <a href="https://netflix-clone-1-6k21.onrender.com" className="text-blue-400" target="_blank" rel="noopener noreferrer">
              Live Link
            </a>
            <a href="https://github.com/rishabhrthr001/Netflix-Clone" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-3xl text-white hover:text-gray-400" />
            </a>
          </div>
        </div>


        <div className="project-card p-6 bg-gray-800 rounded-lg transform transition duration-300 hover:scale-105 mr-auto w-full md:w-3/4 h-auto">
          <h3 className="text-2xl mb-4">Spotify Clone</h3>
          <img src="spotify.png" alt="Spotify Clone" className="mb-4 rounded-lg object-cover h-40 w-full" />
          <p>A clone of Spotify with music play/pause functionality using React.</p>
          
          <div className="flex justify-between items-center mt-6">
            <a href="https://simple-spotify-clone-omega.vercel.app/" className="text-blue-400" target="_blank" rel="noopener noreferrer">
              Live Link
            </a>
            <a href="https://github.com/rishabhrthr001/simple-spotify-clone" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-3xl text-white hover:text-gray-400" />
            </a>
          </div>
        </div>

        {/* Placeholder Project on the Left */}

      </div>
    </div>
  );
};

export default Project;
