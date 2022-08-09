import React from "react";

class TextInput extends React.Component {
  
  render() {
    return (
      <div className="input-group flex-nowrap mb-3">
        <label 
          className="input-group-text"
          Style="min-width: 100px"
          htmlFor={this.props.id}
        >{
          this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}
        </label>
        <input 
          className="form-control"
          type='text'
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

export default TextInput;