import React from "react";

class TextInput extends React.Component {
  
  render() {
    return (
      <div className="input-container" id={this.props.divId}>
        <label htmlFor={this.props.id}>{this.props.name}</label>
        <input 
          type='text'
          id={this.props.id}
          value={this.props.value}
          placeholder={this.props.label}
          name={this.props.name}
          onChange={this.props.onChange()}
        />
      </div>
    );
  }
}

export default TextInput;