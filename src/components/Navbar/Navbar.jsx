import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Andrew Nickerson</h1>
        <div className="info-bar">
          <p className="info-item">anickerson@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link
            className="info-bar"
            to={{ pathname: "https://www.instagram.com/andrewnickerson/" }}
            target="_blank"
          >
            Instagram
          </Link>

          <Link
            className="info-bar"
            to={{ pathname: "https://open.spotify.com/user/atnick484" }}
            target="_blank"
          >
            Spotify
          </Link>

          <Link
            className="info-bar"
            to={{ pathname: "https://www.linkedin.com/in/andrewnickerson484/" }}
            target="_blank"
          >
            LinkedIn
          </Link>

          <Link
            className="info-bar"
            to={{ pathname: "https://www.facebook.com/andrew.nickerson.9250/" }}
            target="_blank"
          >
            Facebook
          </Link>

        </div>
      </div>
      <div className="nav-background">
        <Link className="nav-link" to={{ pathname: "/about" }}>About</Link>
        <Link className="nav-link" to={{ pathname: "/experience" }}>Experience</Link>
        <Link className="nav-link" to={{ pathname: "/projects" }}>Projects</Link>
        <Link className="nav-link" to={{ pathname: "/education" }}>Education</Link>
        
      </div>
    </>
  );
}
