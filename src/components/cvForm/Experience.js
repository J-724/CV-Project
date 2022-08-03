import React, {Component} from 'react';
import TextInput from './misc/TextInput.js';
import TextArea from './misc/TextArea.js';
import {AddButton, DelButton} from './misc/BtnsAddDel.js';

class Experience extends Component {

    render() {
        return (
            <div className="Experience">
                <TextInput
                    id={`${this.props.id}`}
                    value={this.props.position}
                    placeholder='Position'
                    name='position'
                    onChange={(e) => this.props.onChange(this.props.id, e)}
                />
                <TextInput
                    id={`${this.props.id}`}
                    value={this.props.company}
                    placeholder='Company'
                    name='company'
                    onChange={(e) => this.props.onChange(this.props.id, e)}
                />
                <TextInput
                   id={`${this.props.id}`}
                   value={this.props.start}
                   placeholder='Start'
                   name='start'
                   onChange={(e) => this.props.onChange(this.props.id, e)}
                />
                <TextInput
                    id={`${this.props.id}`}
                    value={this.props.end}
                    placeholder='End'
                    name='end'
                    onChange={(e) => this.props.onChange(this.props.id, e)}
                />
                <TextArea
                    id={`${this.props.id}`}
                    value={this.props.about}
                    placeholder='Write some details about'
                    name='about'
                    onChange={(e) => this.props.onChange(this.props.id, e)}
                />
                <div className='btn-container'>
                    <AddButton handleAdd={this.props.handleAdd}/>
                    <DelButton
                        id ={this.props.id}
                        handleDelete={this.props.handleDelete}
                    />
                </div>
            </div>
        )
    }
}

export default Experience;