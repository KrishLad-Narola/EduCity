import React from "react"
import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_EMAIL_ACCESSKEY );

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if(res.success){
        console.log("Success",res);
        setResult(res.message);
        event.target.reset();
    }else{
        console.log("Error",res);
        setResult(res.message);
    }

};

  return (
    <div className="contact">
       <div className="contact-col">
         <h3>Send a message <img src={msg_icon} alt="" /></h3>
         <p>Feel free to reach out through contact form or find our contact 
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our 
            university community.</p>
            <ul>
                <li><img src={mail_icon} alt=""/>Contact@gmail.com</li>
                <li><img src={phone_icon} alt=""/>+91 9327616340</li>
                <li><img src={location_icon} alt=""/>Navsari,Gujarat-396421</li>
            </ul>
       </div>
       <div className="contact-col">
          <form onSubmit={onSubmit}>
             <label>Your Name</label>
             <input type="text" name="name" placeholder="Enter your name"  required/>

              <label>Phone Number</label>
             <input type="tel" name="phone" placeholder="Enter your mobile number"  required/>
             
              <label>Write your message</label>
             <textarea name="message" rows="6" placeholder="Enter your message"  required/>
            
            <button type="Submit" className="btn dark-btn">Submit now <img src={white_arrow} alt="" /></button>
          </form>
          <span>{result}</span>
       </div>
    </div>
  );
};

export default Contact;