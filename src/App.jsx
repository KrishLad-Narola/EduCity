import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Title from "./components/Title/Title";
import Programs from "./components/Programs/programs";
import About from "./components/About/About";

const App = () => {
  return (
    <div>
       <Navbar />
       <Hero />
      <div className="container">
        <Title subTitle='Our Program' title='What we Offer'/>
        <Programs />
        <About />
      </div>
    </div>
  );
};

export default App;