import React from "react";

function TextArea (props) {
  return (
    <div className="form-floating mb-3">
      <textarea
        className="form-control"
        Style="height: 100px"
        id={props.id}
        value={props.value}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange()}
      />
      <label 
        htmlFor={props.id}>
          {props.name.charAt(0).toUpperCase() + props.name.slice(1)} 
      </label>
    </div>
  );
} 

export default TextArea;