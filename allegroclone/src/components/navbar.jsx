import { Link } from "react-router-dom";
import MyAllegroPopUp from "./welcomeallegro";
import Notification from "./notification";
import Comunication from "./comunication";
import Order from "./order";
import { useState } from "react";

function Navbar(){
  
    const [showModal, setShowModal] = useState(false);
    const [notify,setnotify] = useState(false);
    const [com,setcom] = useState(false);
    const [order,setorder] = useState(false);
  

  const handleImageClick = () => {
    setShowModal(!showModal);
  };

  const handleNotification = () => {
      setnotify(!notify);
  }
  const handleComunication = () => {
     setcom(!com);
  }
  const handleOrder = () => {
    setorder(!order);
 }
    return  (
    <>
        <div id="navbar">
        <div id="logo"><img src="https://a.allegroimg.com/original/343297/28c4320247179d1326a0c73a423e/logo-allegro-bcec72b532" alt=""/></div>
        <div id="searching">
        <div id="search-box"><input type="text" placeholder="search for anything"/><Link to="/searchmany">search many</Link></div>
        <div id="select-box">           
         <select id="option">
              <option>All Catagories</option>
               <option style={{fontWeight:"bold"}}>Catagories</option>
               <option>Home and Garden</option>
               <option>Kids</option>
               <option>Electronics</option>
               <option>Business and Services</option>
               <option>Collections and Art</option>
               <option>Culture and Entertainment</option>
               <option>Fashion</option>
               <option>Automotive</option>
               <option>Real Estate</option>
               <option>Sport and travel</option>
               <option>Supermarket</option>
               <option>Beauty</option>
               <option>Health</option>
               <option style={{fontWeight:"bold"}}>Other Option</option>
               <option>Sellers</option>
              </select><span><img id="drop-img" src="https://static.thenounproject.com/png/1123247-200.png" alt="drop-down"/></span>
        </div>
        <button>SEARCH</button>
        </div>
        <div id="nav-img"><img src="https://a.allegroimg.com/original/34a0f4/20e825c8467cb5d3be47f197da3a/action-common-truck-1fcf8d600a" alt="order-placed" onClick={handleOrder}/>
        {order && <Order  onOpen={handleOrder} />}
        <img src="https://a.allegroimg.com/original/342704/5df50ccf415c9dc190264897d100/action-common-heart-322d64f02b" alt="favrite-product"/>
        <img src="https://a.allegroimg.com/original/34c243/da301c81474cabfb3a64e33c88f0/action-common-chat-3be8b9f339" alt="query-box" onClick={handleComunication}/>
        {com && <Comunication  onOpen={handleNotification} />}
        <img src="https://a.allegroimg.com/original/34812c/7e41733041df9333d802c3cbd18b/action-common-bell-413e0a8841" alt="notification-alert" onClick={handleNotification}/>
        {notify && <Notification  onOpen={handleNotification} />}
        <img src="https://a.allegroimg.com/original/3486ac/feff2af24726bad68de181b2a403/action-common-bag-2b387e88bc.svg" alt="my-cart"/>
        </div>
        <div id="drop-feature"><div id="smart-feature"><span style={{color:"gray"}}>be</span><img src="https://a.allegroimg.com/original/343b4d/ed3f5c04412ab7bd70dd0a34f0cd/brand-subbrand-smart-d8bfa93f10.svg" alt=""/></div><div id="my-allegro-drop">My Allegro <img id="drop-img" src="https://static.thenounproject.com/png/1123247-200.png" alt="drop-down" onClick={handleImageClick}/>
        {showModal && <MyAllegroPopUp  onOpen={handleImageClick} />}
        </div> </div>
       </div>
    </>

    )
}

export default Navbar;