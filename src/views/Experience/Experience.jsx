import React from "react";
import "./Experience.css";

function TimeLineItem(props) {
  return (
    <div
      className="timeline-item"
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

export default function ExperienceScreen() {
  const [activeTitle, setActiveTitle] = React.useState("");
  const [activeDescription, setActiveDescription] = React.useState("");

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem
            title="Paid research intern: Stanford Khatri Lab"
            description="Participant of the Stanford Institutes of Medical Research Program during summer 2019. Used computer programming to perform analysis on ChIP-Seq data. USED: R, SQL, Python"
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
          <TimeLineItem
            title="Computer Technician: Acalanes High School"
            description="Installed hardware, software and network infrastructure upgrades to high school campus over summer before 11th grade."
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />

          <TimeLineItem
            title="High school computer science classes"
            description="Took both AP Computer Science and AP Computer Science Principles in high school. USED: Java, Python"
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />

          <TimeLineItem
            title="Starbucks barista"
            description="Provided service to customers in coffee shop with food and drink preparation, setting up, cleaning up, and general customer service."
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
          </div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
          <p>{activeDescription}</p>
        </div>
      </div>
    </div>
  );
}
