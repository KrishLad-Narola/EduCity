import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="Hero container">
       <div className="hero-text">
        <h1>We are better eduction for better world</h1>
        <p>An educational website is an online platform designed to facilitate learning, 
         offering resources like articles, videos, quizzes, and interactive tools for student. </p>
       <button className="btn">Explore More <img src={dark_arrow} alt="" /></button>
       </div>
    </div>
  );
};

export default Hero;