import React from 'react'
import Navbar from './Navbar';
import './Home.css'
import { TextGenerateEffect } from './ui/text-generate-effect';

const Home = () => {
  const words1 = `Welcome to RestrO`;
  const words2 = `We're OPEN Now...`;
  return (
    <div className="home-container">
      <div className="overlay"></div>
      <Navbar />
      {/* Add other content here if needed */}
      <div className="text-center mt-64 text-6xl tracking-wider p-5">
      <TextGenerateEffect words={words1}/>
      <TextGenerateEffect words={words2}/>
      </div>
    </div>
  )
}

export default Home;