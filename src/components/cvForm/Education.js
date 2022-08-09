import React, {Component} from 'react';
import TextInput from './misc/TextInput.js';
import TextArea from './misc/TextArea.js';
import {AddButton, DelButton} from './misc/BtnsAddDel.js';

class Education extends Component {
    render() {

        return (
            <div className="Education">
                <TextInput
                    id={`${this.props.id}`}
                    value={this.props.degree}
                    placeholder='Degree'
                    name='degree'
                    onChange={(e) => this.props.onChange(this.props.id, e)}
                />
                <TextInput
                    id={`${this.props.id}-university`}
                    value={this.props.university}
                    placeholder='University'
                    name='university'
                    onChange={(e) => this.props.onChange(this.props.id, e)}
                />
                <TextInput
                   id={`${this.props.id}-start`}
                   value={this.props.start}
                   placeholder='Start'
                   name='start'
                   onChange={(e) => this.props.onChange(this.props.id, e)}
                />
                <TextInput 
                    id={`${this.props.id}-end`}
                    value={this.props.end}
                    placeholder='End'
                    name='end'
                    onChange={(e) => this.props.onChange(this.props.id, e)}
                />
                <TextArea
                    id={`${this.props.id}-about`}
                    value={this.props.about}
                    placeholder='Write some details about'
                    name='about'
                    onChange={(e) => this.props.onChange(this.props.id, e)}
                />
                <div className='btn-container d-grip d-flex justify-content-end'>
                    <DelButton
                        id ={this.props.id}
                        handleDelete={this.props.handleDelete}
                    />
                    <AddButton handleAdd={this.props.handleAdd}/>

                </div>
            </div>
        )
    }
}

export default Education;