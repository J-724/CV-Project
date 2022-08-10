import React from "react";



class TextArea extends React.Component {
  
  render() {
    return (
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          Style="height: 100px"
          id={this.props.id}
          value={this.props.value}
          placeholder={this.props.placeholder}
          name={this.props.name}
          onChange={this.props.onChange()}
        />
        <label 
          htmlFor={this.props.id}>
            {this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)} 
        </label>
      </div>
    );
  }
}

export default TextArea;