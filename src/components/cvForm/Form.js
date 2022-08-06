import React, {Component} from "react";
import Education from "./Education.js";
import Experience from "./Experience.js";
import PersonalInfo from "./PersonalInfo.js";
import {AddButton} from "./misc/BtnsAddDel.js";


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
          handleAdd={this.props.AddEducation}
          handleDelete={this.props.DeleteEducation}
        />
      )
    });

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
          handleAdd={this.props.AddExperience}
          handleDelete={this.props.DeleteExperience}
        />
      )
    })

    return (
      <div className="builder col-6">
        <fieldset>
          <legend>Personal Info</legend>
          <PersonalInfo
            personalInfo={this.props.personalInfo}
            onChange={this.props.ChangePersonalInfo}
          />
        </fieldset>
        <fieldset>
          <legend>Education</legend>
            {
              (educationElements.length === 0) 
              ? <AddButton handleAdd={this.props.AddEducation}/>
              : null
            }
            {educationElements}
        </fieldset>
        <fieldset>  
          <legend>Experience</legend>
            {
              (experienceElements.length === 0) 
              ? <AddButton handleAdd={this.props.AddExperience}/>
              : null
            }
            {experienceElements}
        </fieldset>
      </div>
    );
  }
}

export default Form;  