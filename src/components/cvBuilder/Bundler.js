import React, {Component} from "react";
import Education from "./Education.js";
import Experience from "./Experience.js";
import PersonalInfo from "./PersonalInfo.js";

class CVBuilder extends Component {
  render() {
    return (
      <>
        <PersonalInfo />
        <Education />
        <Experience />
      </>
    );
  }
}

export default CVBuilder