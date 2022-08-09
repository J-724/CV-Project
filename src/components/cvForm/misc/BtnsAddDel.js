import React from "react";

class AddButton extends React.Component {
  render() {
    return (
      <button 
      className='btn btn-secondary col-auto'
      Style="
        margin-left: 15px
        " 
      onClick={() => this.props.handleAdd()}
      >
          Add
      </button>
    )             
  }
}

class DelButton extends React.Component {
  render() {
    return (
      <button 
          className='btn btn-outline-secondary col-auto' 
          onClick={() => this.props.handleDelete(this.props.id)}
        >                
            Delete
        </button> 
    )
  }  
}


export { AddButton, DelButton };