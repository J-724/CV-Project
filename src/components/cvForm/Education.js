import React, {Component} from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';


class Education extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.id;
    }
    
    setId() {
        return this.id;
    }

    render() {
        // const {
        //     degree,
        //     university,
        //     start,
        //     end,
        //     about,
        // } = this.props.education;
        
        console.log(this.id + ' Test edu')
        return (
            <div className="Education">
                <TextInput
                    id={`${this.props.id}`}
                    value={this.props.degree}
                    placeholder='degree'
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

                ADD buttons to add and remove education 
            </div>
        )
    }
}

export default Education;