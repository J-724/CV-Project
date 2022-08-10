import React, {Component} from "react";
import Education from "./Education.js";
import Experience from "./Experience.js";
import PersonalInfo from "./PersonalInfo.js";
import {AddButton} from "./misc/BtnsAddDel.js";

function Form (props) {
  const educationElements = props.education.map( element => {
    return (
      <Education 
        key={element.id}
        id={element.id}
        degree={element.degree}
        university={element.university}
        start={element.start}
        end={element.end}
        about={element.about}
        onChange={props.ChangeEducation}
        handleAdd={props.AddEducation}
        handleDelete={props.DeleteEducation}
      />
    )
  });

  const experienceElements = props.experience.map( element => {
    return (
      <Experience
        key={element.id}
        id={element.id}
        position={element.position}
        company={element.company}
        start={element.start}
        end={element.end}
        about={element.about}
        onChange={props.ChangeExperience}
        handleAdd={props.AddExperience}
        handleDelete={props.DeleteExperience}
      />
    )
  })

  return (
    <div className="container">
      <fieldset>
        <legend>Personal Info</legend>
        <PersonalInfo
          personalInfo={props.personalInfo}
          onChange={props.ChangePersonalInfo}
        />
      </fieldset >
      <fieldset>
        <legend>Education</legend>
          {
            (educationElements.length === 0) 
            ? <AddButton handleAdd={props.AddEducation}/>
            : null
          }
          {educationElements}
      </fieldset>
      <fieldset>  
        <legend>Experience</legend>
          {
            (experienceElements.length === 0) 
            ? <AddButton handleAdd={props.AddExperience}/>
            : null
          }
          {experienceElements}
      </fieldset>
    </div>
  );
}

export default Form;  