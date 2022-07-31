import React, {Component} from "react";
import Education from "./Education.js";
import Experience from "./Experience.js";
import PersonalInfo from "./PersonalInfo.js";

class Form extends Component {
  render() {
    return (
      <div className="builder">
        <fieldset>
          <legend>Personal Info</legend>
          <PersonalInfo
            personalInfo={this.props.personalInfo}
            onChange={this.props.ChangePersonalInfo}
          />
        </fieldset>
        {/* <fieldset>
          <legend>Education</legend>
          <Education 
            onChange={this.props.onChange}
          />
        </fieldset>
        <fieldset>
          <legend>Experience</legend>
          <Experience
            onChange={this.props.onChange}
          />
        </fieldset> */}
      </div>
    );
  }
}

export default Form;  