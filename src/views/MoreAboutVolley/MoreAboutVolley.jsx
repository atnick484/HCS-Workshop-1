import React from "react";
import "./MoreAboutVolley.css";
import CutePic from "../../assets/volleyballAndrew2.png";


export default function VolleyScreen() {
  return (
    <div className="screen-background3">
      <div className="intro-background3">

        <div className="intro-item3">
          <img src={CutePic} className="intro-picture3"/>
        </div>

        <div className="intro-item3" >

          <span>I’ve played competitive travel club volleyball on several 
            teams for seven years. For four years, I was team captain and a starting 
            outside hitter (OH), meaning I was both a primary offensive and defensive 
            player. I learned to hold peers accountable and lead my team through 
            adversity.
            For the last three years, I’ve been the starting Libero for both my club and 
            varsity high school teams, where I am in charge of all things defense. Such a 
            position has allowed me to expand my leadership skills in a more narrowed 
            responsibility—the back row. I’ve had the opportunity to lead teams to the 
            Junior National Championships (club) and California State D1 Semifinals (high 
            school) and received all-league honors.
            Volleyball has helped teach me the power of teamwork to compete for a common 
            goal and allowed me to further develop resilience in the face of challenges 
            both on and off the court.
          <p></p>
          <p></p>

          <form action="https://youtu.be/5pWoNQv5AOg" target="_blank">
            <input type="submit" value="See some volleyball!" />
          </form>

          </span>
          
        </div>

        
      </div>
    </div>
  );
}