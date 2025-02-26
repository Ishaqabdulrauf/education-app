import React from "react";
import  { useState } from "react";
import "./SignUp.css";

import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

const Signup = () => {

  const [action, setAction] = useState("Login");

  return (
    <div className="Signup-container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action=== "Login"?<div></div>:<div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name" />
        </div>
}
        
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>

      </div>
      {action=== "Sign Up"?<div></div>:<div className="forget-password">Lost Password? <span>Click Here</span></div>}
      <div className="submit-container">
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={()=>{setAction("Login")}}>Login</div>
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
      </div>
    </div>

  );
};

export default Signup;
