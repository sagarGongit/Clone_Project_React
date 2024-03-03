import React from "react";
import { Link } from "react-router-dom";
import Login from "./login";
import { Navigate } from "react-router-dom";
function MyAllegroPopUp({onOpen}){

  const handleClick = () =>{
      <Navigate><Login/></Navigate>
  }

    return (
            <div className="modal">
              <div onClick={onOpen} className="overlay"></div>
              <div className="modal-content-welc">
              {/* <button onClick={onClose} id="close-button">x</button>   // close button*/} 
              <img src="https://a.allegroimg.com/original/34ff27/c479a4f14cf48882cc45615a4b57/thank-you-page-allegro-buy-with-allegro-ba91069bd7" alt="welcometoAllegro" id="welcome-allegro" />
               <h2>Welcome to Allegro!</h2>
              <p style={{fontSize:"14px"}}>Sign in and see your purchases, favorite offers, and notifications. On Allegro, you are at home!</p>
                <button id="sign-in-button" onClick={handleClick}>SIGN IN</button>
                 <p>First time on Allegro? <Link>Sign up</Link></p>
            </div>
            </div>
          );
    
}

export default MyAllegroPopUp;

