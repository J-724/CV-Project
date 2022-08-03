import React from "react";
import Form from "./components/cvForm/Form.js";
import View from "./components/cvView/View.js";
import { PersonalInfo, Education, Experience} from "./components/cvForm/ObjTemplates.js";
import uniqid from "uniqid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo:
      {
          ...PersonalInfo,
      }, 
      education: [
        {
          ...Education,
          id: uniqid(),
        },
      ],
      experience:[
        {
          ...Experience,
          id: uniqid(),
        }
      ],

    }
    this.ChangePersonalInfo = this.ChangePersonalInfo.bind(this);
    this.ChangeEducation = this.ChangeEducation.bind(this);
    this.ChangeExperience = this.ChangeExperience.bind(this);
    this.AddEducation = this.AddEducation.bind(this);
    this.AddExperience = this.AddExperience.bind(this);
    this.DeleteEducation = this.DeleteEducation.bind(this);
    this.DeleteExperience = this.DeleteExperience.bind(this);
  }
  
  ChangePersonalInfo = (e) => {
    const { name, value } = e.target;
		this.setState({
			personalInfo: {
				...this.state.personalInfo,
				[name]: value,
			},
		});
  }
  
  ChangeEducation = (id) => (event) => {
    const { name, value } = event.target;
    const newEduInfo = this.state.education.map(item => {
      if ( item.id === id) {
        return {
          ...item,
          [name]: value,
        }
      }
      return item;
    });
    this.setState({
      education: newEduInfo
    });
  }

  ChangeExperience = (id) => (event) => {
    const { name, value } = event.target;
    const newExpInfo = this.state.experience.map(item => {
      if ( item.id === id) {
        return {
          ...item,
          [name]: value,
        }
      }
      return item;
    });
    this.setState({
      experience: newExpInfo
    });
  };

  AddEducation = () => {
    console.log('add education');
    const newEduObject = {
      ...Education,
      id: uniqid(),
    };
    this.setState({
      education: this.state.education.concat(newEduObject)
    })
    console.log(this.state.education+' added');
  };

  AddExperience = () => {
    console.log('add experience');
    const newExpObject = {
      ...Experience,
      id: uniqid(),
    };
    this.setState({
      experience  : this.state.experience.concat(newExpObject)
    })
  };
  
  DeleteEducation = (id) => {
    const newEduArray = this.state.education.
      filter( 
        (item) => item.id != id
      ); 
    this.setState({
      education: newEduArray,
    });
  };

  DeleteExperience = (id) => {
    const newEduArray = this.state.experience.
      filter( 
        (item) => item.id != id
      ); 
    this.setState({
      experience: newEduArray,
    });
  };
 
  
  render() {
    return (
      <div>
        <Form 
          personalInfo={this.state.personalInfo}
          education={this.state.education}
          experience={this.state.experience}
          
          ChangePersonalInfo={this.ChangePersonalInfo}
          ChangeEducation={this.ChangeEducation}
          ChangeExperience={this.ChangeExperience}

          AddEducation={this.AddEducation}
          AddExperience={this.AddExperience}

          DeleteEducation={this.DeleteEducation}
          DeleteExperience={this.DeleteExperience}
        />
        <View 
          personalInfo={this.state.personalInfo}
          education={this.state.education}
          experience={this.state.experience}
        />
      </div>
    );
  }
}
 
console.log("New run");
export default App;