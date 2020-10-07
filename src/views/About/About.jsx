import React from "react";
import "./About.css";
import CutePic from "../../assets/andrewSmile.png";
import { Link } from "react-router-dom";


export default function AboutScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src={CutePic} className="intro-picture"/>
        </div>
        <div className="intro-item" >

          <span>Hello there! My name is Andrew and I'm from the Bay Area, CA.
          I'm currently a first-year at Harvard College potentially
          concentrating in computer science or applied math. A few things about me––I love playing
          piano, photography, going to the beach, and playing volleyball! On this site, you'll find
          a brief summary of my &nbsp;<a href="/experience">experience</a>
          , some &nbsp;<a href="/projects">projects</a> I've worked on, a summary of my &nbsp;<a href="/education">education</a>,
          and links to my socials. Enjoy!
          <p></p>
          <p></p>

          <Link to="/morevolley">
            <button type="button">
                  More volleyball
            </button>
          </Link>

          <p></p>

          <Link to="/morepiano">
            <button type="button">
                  More piano
            </button>
          </Link>

          <p></p>

          <Link to="/morephoto">
            <button type="button">
                  More photography
            </button>
          </Link>

          </span>
          
        </div>

        
      </div>
    </div>
  );
}


