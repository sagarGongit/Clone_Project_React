import React from "react";
import { Link } from "react-router-dom";
import Login from "./login";
import { Navigate } from "react-router-dom";
function Comunication({onOpen}){

  const handleClick = () =>{
      <Navigate><Login/></Navigate>
  }
    return (
            <div className="modal">
              <div onClick={onOpen} className="overlay"></div>
              <div className="modal-content-com">
               <h3 style={{marginTop:"55px"}}>Communication in one place</h3>
              <p style={{fontSize:"14px"}}>The Message Center combines the benefits offered by a communicator, chat and email.</p>
              <p style={{fontSize:"14px"}}>Sign in to have all your offer queries and emails sent via Allegro in one place.</p>
                <button id="sign-in-button" onClick={handleClick}>SIGN IN</button>
                 <p>No account?<Link>Register</Link></p>
            </div>
            </div>
          );
    
}

export default Comunication;