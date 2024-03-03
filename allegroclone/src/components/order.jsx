import React from "react";
import { Link } from "react-router-dom";
import Login from "./login";
import { Navigate } from "react-router-dom";
function Order({onOpen}){

  const handleClick = () =>{
      <Navigate><Login/></Navigate>
  }
    return (
            <div className="modal">
              <div onClick={onOpen} className="overlay"></div>
              <div className="modal-content-order">
              <img id="order-img" src="https://a.allegroimg.com/original/34990a/c5963a554a868d1adf08fa37daa8/big-messages-switch-marketplace-2743599be0" alt="welcometoAllegro" />
               <h4>Check and pick up your parcels</h4>
              <p style={{fontSize:"14px"}}>Here you will find information about parcels.
                      Download app to pick up remotely.</p>
                <button id="sign-in-button" onClick={handleClick}>SIGN IN</button>
                 <p>Do not have an account?<Link>Sign up</Link></p>
            </div>
            </div>
          );
    
}

export default Order;