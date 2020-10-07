import React from "react";
import "./MoreAboutPiano.css";
import CutePic from "../../assets/pianoAndrew.png";


export default function PianoScreen() {
  return (
    <div className="screen-background4">
      <div className="intro-background4">
        <div className="intro-item4">
          <img src={CutePic} className="intro-picture4"/>
        </div>

        <div className="intro-item4" >

          <span>

            I've been playing piano since the first grade (so for about 12 years!), although I got more
            serious about it during 6th grade. Not only have I gotten to take lessons and perform in
            solo recitals, but I have also gotten to play several times in my high school wind ensemble.
            In addition, for junior and senior year of high school, I was able to piano/conduct 
            my drama department's winter musical (which was an amazing experience!). I hope to continue
            my education in music at Harvard through involement in extracurriculars and the HRO.

          <p></p>
          <p></p>

          <form action="https://drive.google.com/file/d/1lJAT-d584BgsjZWWbLB35r40bgOaK9si/view?usp=sharing" target="_blank">
            <input type="submit" value="See some piano!" />
          </form>

          </span>
          
        </div>

        
      </div>
    </div>
  );
}


