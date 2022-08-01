import React, {Component} from "react";
import Education from "./Education.js";
import Experience from "./Experience.js";
import PersonalInfo from "./PersonalInfo.js";


class Form extends Component {

  render() {
    const educationElements = this.props.education.map( element => {
      return (
        <Education 
          key={element.id}
          id={element.id}
          degree={element.degree}
          university={element.university}
          start={element.start}
          end={element.end}
          about={element.about}
          onChange={this.props.ChangeEducation}
        />
      )
    })

    const experienceElements = this.props.experience.map( element => {
      return (
        <Experience
          key={element.id}
          id={element.id}
          position={element.position}
          company={element.company}
          start={element.start}
          end={element.end}
          about={element.about}
          onChange={this.props.ChangeExperience}
        />
      )
    })


    return (
      <div className="builder">
        <fieldset>
          <legend>Personal Info</legend>
          <PersonalInfo
            personalInfo={this.props.personalInfo}
            onChange={this.props.ChangePersonalInfo}
          />
        </fieldset>
        <fieldset>
          <legend>Education</legend>
          {educationElements}
        </fieldset>
        <fieldset>
          <legend>Experience</legend>
          {experienceElements}
        </fieldset>
      </div>
    );
  }
}

export default Form;  