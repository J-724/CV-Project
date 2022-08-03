import React from "react";

class AddButton extends React.Component {
  render() {
    return (
      <div className='btn-container'>
        <button 
        className='add-btn' 
        onClick={() => this.props.handleAdd()}
        >
            Add
        </button>                                           
      </div>  
    )             
  }
}

class DelButton extends React.Component {
  render() {
    return (
      <button 
          className='del-btn' 
          onClick={() => this.props.handleDelete(this.props.id)}
        >                
            Delete
        </button> 
    )
  }  
}


export { AddButton, DelButton };