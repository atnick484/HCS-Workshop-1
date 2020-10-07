import React from "react";
import "./Education.css";

function TimeLine2Item(props) {
  return (
    <div
      className="timeline2-item"
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setActiveDescription(props.description);
      }}
    >
      <div className="experience-info">
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}

export default function EducationScreen() {
  const [activeTitle, setActiveTitle] = React.useState("");
  const [activeDescription, setActiveDescription] = React.useState("");

  return (
    <div className="screen-background">
      <div className="education-background">
        <div className="timeline2-background">
          <TimeLine2Item
            title="Secondary School"
            description="Attended Monte Vista High School in Danville, CA from August 2016 through May 2020."
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
          <TimeLine2Item
            title="Other colleges (dual enrollment during HS)"
            description="Took CS255 at Diablo Valley College (local community college (Spring 2019) and 
            college preparatory U.S. Government and Economics at BYU (Fall 2019, Spring 2020 respectively)."
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />

          <TimeLine2Item
            title="Harvard College (current)"
            description="Candidate for A.B. (Bachelor of Arts) at Harvard Unviersity (Computer science of applied mathematics)."
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
          </div>
        <div className="highlight2-background">
          <h1>{activeTitle}</h1>
          <p>{activeDescription}</p>
        </div>
      </div>
    </div>
  );
}