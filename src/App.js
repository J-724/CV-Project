import React from "react";
import Form from "./components/cvForm/Form.js";
import View from "./components/cvView/View.js";
import { PersonalInfo, Education, Experience} from "./components/cvForm/ObjTemplates.js";
import uniqid from "uniqid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: [
        {
          ...PersonalInfo,
        }, 
      ],
      education: [
        {
          ...Education,

        }
      ],
      workExperience:[
        {
          ...Experience,
        }
      ],

    }
    this.ChangePersonalInfo = this.ChangePersonalInfo.bind(this);
  }
  
  ChangePersonalInfo = (e) => {
    const { name, value } = e.target;
		this.setState({
			personal: {
				...this.state.personal,
				[name]: value,
			},
		});
    console.log('Change !!!');
  }
  
  render() {
    return (
      <div>
        <Form 
          personalInfo={this.state.personalInfo}
          education={this.state.education}
          experience={this.state.experience}
          ChangePersonalInfo={this.ChangePersonalInfo}
        />
        <View />
      </div>
    );
  }
}
 
console.log("New run");
export default App;