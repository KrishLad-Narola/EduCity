import React, { useRef } from "react";
import "./Testimonials.css";

import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import User_1 from "../../assets/user-1.png";
import User_2 from "../../assets/user-2.png";
import User_3 from "../../assets/user-3.png";
import User_4 from "../../assets/user-4.png";

const Testimonials = () => {
  
  const slider = useRef(null);
  const tx = useRef(0); 

  const SlideForward = () => {
    if (tx.current > -50) {   
      tx.current -= 25;
    }
    slider.current.style.transform = `translateX(${tx.current}%)`;
  };

  const SlideBackward = () => {
    if (tx.current < 0) {
      tx.current += 25;
    }
    slider.current.style.transform = `translateX(${tx.current}%)`;
  };

  return (
    <div className="testimonials">
      <img
        src={next_icon}
        alt="Next"
        className="next-btn"
        onClick={SlideForward}
      />
      <img
        src={back_icon}
        alt="Back"
        className="back-btn"
        onClick={SlideBackward}
      />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User_1} alt="" />
              </div>
              <div>
                <h3>Krishi Mistry</h3>
                <span>Educity , India</span>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User_2} alt="" />
              </div>
              <div>
                <h3>Krish Lad</h3>
                <span>Educity , India</span>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User_3} alt="" />
              </div>
              <div>
                <h3>Heer Prajapti</h3>
                <span>Educity , India</span>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User_4} alt="" />
              </div>
              <div>
                <h3>Smit Mistry</h3>
                <span>Educity , India</span>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;