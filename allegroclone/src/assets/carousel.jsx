import React, { useState,useEffect } from "react";
import {BsArrowRightCircleFill,BsArrowLeftCircleFill} from 'react-icons/bs'


export default function Carousel(){
     const [slide,setslide] = useState(0);

    const images = [
        {
            "src" : "https://i.imgur.com/RrukRQI.png",
            "alt" : "first"
        },
        {
            "src" : "https://i.imgur.com/BLys3jl.png",
            "alt" : "second"
        },
        {
            "src" : "https://i.imgur.com/t3wnJtF.png",
            "alt" : "first"
        },
        {
            "src" : "https://i.imgur.com/uZ3e4dD.png",
            "alt" : "first"
        }
    ]

     const nextSlide = ()=>{
          setslide(slide === 3 ? 3 : slide+1)
     }
     const prevSlide = ()=>{

        setslide(slide>0 ? slide-1 : 0)
    }

   useEffect(()=>{
        const interval = setInterval(()=>{
             setslide(slide === 3 ? 0 : slide+1)
        },10000)
        return ()=>clearInterval(interval)
   },[slide])
    
     if(slide === 3) {
        console.clear();
    }

   const slider = [

        {
            "name" : "Get Coins",
            "src" : "https://a.allegroimg.com/original/125883/6f2f3aea4b1599cc47dc3529d8b8"
        },
        {
            "name" : "Free deliveries",
            "src" : "https://a.allegroimg.com/original/127d5a/b7255ce34174bdd079b18e1ce521"
        },
        {
            "name" : "Automotive",
            "src" : "https://a.allegroimg.com/original/12a0d1/05486c9c40e597c8ce02c809ca9b"
        },
        {
            "name" : "Home and Garden",
            "src" : "https://a.allegroimg.com/original/12a47c/ab0db0ee40ec90009fe06ec93a6d"
        },
        {
            "name" : "Fashion",
            "src" : "https://a.allegroimg.com/original/12c49a/6425ccf541c0bf1f6edac87222ec"
        },
        {
            "name" : "Sports and Travel",
            "src" : "https://a.allegroimg.com/original/125cc1/8841090c480e8bbe5d3ef7f72e54"
        },
        {
            "name" : "Health",
            "src" : "https://a.allegroimg.com/original/12ef91/ca3c0e3146fc892e9469294947a0"
        },
        {
            "name" : "Beauty",
            "src" : "https://a.allegroimg.com/original/128b90/e7ffda3a4901b4a061559688e4da"
        },
        {
            "name" : "Culture and Entertainment",
            "src" : "https://a.allegroimg.com/original/12939e/fdbb6fc041a8b21dbda237759113"
        },
        {
            "name" : "Kids",
            "src" : "https://a.allegroimg.com/original/12c3b6/c3941ca14ed19ae631f925cdc1b3"
        },
        {
            "name" : "Supermarket",
            "src" : "https://a.allegroimg.com/original/120db3/7a2eb75a4e27ababf21efe737792"
        }
    ]

    return (
     <>
     <div id="slider">
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
        {images && images.map((item,idx)=>{
            return (
            <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slider-img" : "hidden-slider"} />
            )
        })}
        <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
        <span className="indicators">
            {images && images.map((_,idx)=> {
                return <button key={idx} onClick={()=>setslide(idx)} className={slide===idx ? "indicator" : "indicator indicator-inactive"}></button>
            })}
        </span>
     </div>
     <br /><br />
     <div id="slider2">
     {slider && slider.map((item,idx)=>{
         return <div key={idx} id="card">
          <img src={item.src} alt="idx"/>
          <h4>{item.name}</h4>
          </div>
     })}
 </div>
     </>
    )
}