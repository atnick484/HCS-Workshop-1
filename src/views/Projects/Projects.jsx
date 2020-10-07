import React from "react";
import Project from "../../components/Project/Project";
import ChipPic from "../../assets/chippic.png";
import JavaPic from "../../assets/java2.png";
import MalanPic from "../../assets/malan.png";
import HCSPic from "../../assets/hcs.png";

export default function ProjectsScreen(props) {
  return (
    <div className="screen-background">
       --
      <Project
        title="ChIP-Seq Meta-analysis of Histone Modifications"
        link="https://drive.google.com/drive/folders/1Q7spT5bLvevriMcwD2HR2dI5nc70KyPT?usp=sharing"
        source={ChipPic}
      ></Project>

      <Project
        title="High school Java code"
        link="https://github.com/atnick484/Java-Code"
        source={JavaPic}
      ></Project>

      <Project
        title="CS50 Code (currently private to avoid academic dishonesty)"
        link="https://github.com/atnick484/cs50"
        source={MalanPic}
      ></Project>

      <Project
        title="Harvard Computer Society: Workshop 1"
        link="https://github.com/atnick484/HCS-Workshop-1"
        source={HCSPic}
      ></Project>

      <Project
        title="more to be added!"
      ></Project>


    </div>
  );
}
