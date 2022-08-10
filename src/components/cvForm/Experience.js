import React, {Component} from 'react';
import TextInput from './misc/TextInput.js';
import TextArea from './misc/TextArea.js';
import {AddButton, DelButton} from './misc/BtnsAddDel.js';

function Experience (props) {
    return (
        <div className="Experience" Style="margin-bottom: 9px">
            <TextInput
                id={`${props.id}`}
                value={props.position}
                placeholder='Position'
                name='position'
                onChange={(e) => props.onChange(props.id, e)}
            />
            <TextInput
                id={`${props.id}`}
                value={props.company}
                placeholder='Company'
                name='company'
                onChange={(e) => props.onChange(props.id, e)}
            />
            <TextInput
               id={`${props.id}`}
               value={props.start}
               placeholder='Start'
               name='start'
               onChange={(e) => props.onChange(props.id, e)}
            />
            <TextInput
                id={`${props.id}`}
                value={props.end}
                placeholder='End'
                name='end'
                onChange={(e) => props.onChange(props.id, e)}
            />
            <TextArea
                id={`${props.id}`}
                value={props.about}
                placeholder='Write some details about'
                name='about'
                onChange={(e) => props.onChange(props.id, e)}
            />
            <div className='btn-container d-grip d-flex justify-content-end'>
                    <DelButton
                        id ={props.id}
                        handleDelete={props.handleDelete}
                    />
                    <AddButton handleAdd={props.handleAdd}/>
            </div>
        </div>
    )
}

export default Experience;