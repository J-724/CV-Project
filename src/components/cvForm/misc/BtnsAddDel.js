import React from "react";

class AddDelButtons extends React.Component {
  render() {
    return (
      <div className='btn-container'>
        <button 
        className='add-btn' 
        onClick={() => this.props.handleAdd()}
        >
            Add
        </button>              
        <button 
          className='del-btn' 
          onClick={() => this.props.handleDelete(this.props.id)}
        >                
            Delete
        </button>                              
      </div>  
    )             
  }
}

export default AddDelButtons;