import React from "react";
import Form from "./components/cvForm/Form.js";
import View from "./components/cvView/View.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: [],

    }
    this.onChange = this.onChange.bind(this);
  }
  
  onChange = (e) => {
    this.setState ({
      personalInfo: 'change!'
    });
  }
  
  render() {
    return (
      <div>
        <Form 
          onChange={this.onChange}
        />
        <View />
      </div>
    );
  }
}
 
console.log("New run");
export default App;