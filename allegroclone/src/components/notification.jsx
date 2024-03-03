import React from "react";
import { Link } from "react-router-dom";
import Login from "./login";
import { Navigate } from "react-router-dom";
function Notification({onOpen}){

  const handleClick = () =>{
      <Navigate><Login/></Navigate>
  }
    return (
            <div className="modal">
              <div onClick={onOpen} className="overlay"></div>
              <div className="modal-content-notify">
              <img src="https://a.allegroimg.com/original/1814f0/f889a32345a58172222bef9df297.svg" alt="welcometoAllegro" />
               <h2>Sign in and stay informed</h2>
              <p style={{fontSize:"14px"}}>Here you will find notifications about deals
                       and information concerning your actions
                           on the Allegro Account.</p>
                <button id="sign-in-button" onClick={handleClick}>SIGN IN</button>
                 <p>Do not have an account?<Link>Sign up</Link></p>
            </div>
            </div>
          );
    
}

export default Notification;