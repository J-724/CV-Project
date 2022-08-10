import React from "react";

function AddButton (props) {
  return (
    <button 
    className='btn btn-secondary col-auto'
    Style="margin-left: 5px" 
    onClick={() => props.handleAdd()}
    >
        Add
    </button>
  )
}

function DelButton (props) {
  return (
    <button 
        className='btn btn-outline-secondary col-auto' 
        onClick={() => props.handleDelete(props.id)}
      >                
          Delete
    </button> 
  )
}

export { AddButton, DelButton };