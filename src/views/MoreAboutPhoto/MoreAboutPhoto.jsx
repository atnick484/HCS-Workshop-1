import React from "react";
import "./MoreAboutPhoto.css";
import pic1 from "../../assets/photography/photo1.jpg";
import pic2 from "../../assets/photography/photo2.jpg";
import pic3 from "../../assets/photography/photo3.jpg";
import pic4 from "../../assets/photography/photo4.jpg";
import pic5 from "../../assets/photography/photo5.jpg";
import pic6 from "../../assets/photography/photo6.jpg";
import pic7 from "../../assets/photography/photo7.jpg";
import pic8 from "../../assets/photography/photo8.jpg";
import pic9 from "../../assets/photography/photo9.jpg";


export default function PhotoScreen() {
  return (
    <div className="screen-background5">

      <div className="intro-background5">
        <div className="intro-item4">
          <img src={pic1} className="intro-picture4"/>
        </div>

        <div className="intro-item5">
          <img src={pic6} className="intro-picture4"/>
        </div>

        <div className="intro-item5">
          <img src={pic2} className="intro-picture4"/>
        </div>
        
      </div>

      <div className="intro-background5">
        <div className="intro-item5">
          <img src={pic5} className="intro-picture4"/>
        </div>

        <div className="intro-item5">
          <img src={pic3} className="intro-picture4"/>
        </div>

        <div className="intro-item5">
          <img src={pic4} className="intro-picture4"/>
        </div>
        
      </div>

      <div className="intro-background5">
        <div className="intro-item5">
          <img src={pic9} className="intro-picture4"/>
        </div>

        <div className="intro-item5">
          <img src={pic7} className="intro-picture4"/>
        </div>

        <div className="intro-item5">
          <img src={pic8} className="intro-picture4"/>
        </div>
        
      </div>


    </div>
  );
}


