import React from "react";
import CVBuilder from "./components/cvBuilder/Bundler.js";
import InfoRender from "./components/cvRender/InfoRender.js";

class App extends React.Component {
  
  
  
  
    render() {
    return (
      <div>
        <CVBuilder />
        <InfoRender />
      </div>
    );
  }
}
                
export default App;