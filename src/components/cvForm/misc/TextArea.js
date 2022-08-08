import React from "react";

class TextArea extends React.Component {
  
  render() {
    return (
      <div className="input-container">
        <label 
          className="form-label"
          htmlFor={this.props.id}>
            {this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)} 
        </label>
        <textarea
          className="form-control"
          id={this.props.id}
          value={this.props.value}
          placeholder={this.props.placeholder}
          name={this.props.name}
          onChange={this.props.onChange()}
        />
      </div>
    );
  }
}

export default TextArea;