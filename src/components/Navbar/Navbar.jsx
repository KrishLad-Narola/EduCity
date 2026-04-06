import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css"; 
import { useState , useEffect} from "react";


const Navbar = () => {

  const [sticky , setSticky] = useState(false);

  useEffect(() => {
     window.addEventListener('scroll', () =>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
     })

  }, []);
 
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''} `}>
       <img src={logo} alt="" className="logo"/>
       <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Program</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className="btn">Contact Us</button></li>
       </ul>
    </nav>
  );
};

export default Navbar;