import React from "react";

function TextInput (props) {
  return (
    <div className="input-group flex-nowrap mb-3">
      <label 
        className="input-group-text"
        Style="
          min-width: 100px,
          font-size: 12px
          "
        htmlFor={props.id}
      >{
        props.name.charAt(0).toUpperCase() + props.name.slice(1)}
      </label>
      <input 
        className="form-control"
        Style="
          font-size: 12px
        "
        type='text'
        id={props.id}
        value={props.value}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange()}
      />
    </div>
  );
}

export default TextInput;