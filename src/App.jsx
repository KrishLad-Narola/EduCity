import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Title from "./components/Title/Title";
import Programs from "./components/Programs/programs";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/ContactUS/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/Videoplayer/Videoplayer";
import { useState } from "react";

const App = () => {


  const[playState , setPlayState]=useState(false);


  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our Program' title='What we Offer' />
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery ' title='Campus Photos' />
        <Campus /> 
        <Title subTitle='TESTIMONIALS ' title='What student says' />
        <Testimonials />
        <Title subTitle='Contact US ' title='Get in touch' />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
