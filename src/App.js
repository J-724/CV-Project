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
      workExperience:[
        {
          ...Experience,
        }
      ],

    }
    this.ChangePersonalInfo = this.ChangePersonalInfo.bind(this);
    this.ChangeEducation = this.ChangeEducation.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  
  ChangePersonalInfo = (e) => {
    const { name, value } = e.target;
		this.setState({
			personalInfo: {
				...this.state.personalInfo,
				[name]: value,
			},
		});
                                  console.log('Personal Change !!!');
                                  console.log(this.state.personalInfo);
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
                                  console.log('Education Change !!!');
                                  console.log(id+' id');
                                  console.log(this.state.education);
  }
  
  onChange = (category, id) => (event) => {
    
  }
  
  render() {
    return (
      <div>
        <Form 
          personalInfo={this.state.personalInfo}
          education={this.state.education}
          experience={this.state.experience}
          ChangePersonalInfo={this.ChangePersonalInfo}
          ChangeEducation={this.ChangeEducation}
        />
        <View 
          personalInfo={this.state.personalInfo}
        />
      </div>
    );
  }
}
 
console.log("New run");
export default App;