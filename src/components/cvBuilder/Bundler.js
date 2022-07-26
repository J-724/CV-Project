import React, {Component} from "react";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";

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