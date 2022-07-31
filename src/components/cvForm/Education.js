import React, {Component} from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';


class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="Education">
                <TextInput
                    divId={`div-${this.props.id}`}
                    id={this.props.id}
                    value={this.props.degree}
                    placeholder='Degree'
                    name='Degree'
                    onChange={(e) => this.props.onChange(e)}
                />
                <TextInput
                    divId={`div-${this.props.id}`}
                    id={this.props.id}
                    value={this.props.degree}
                    placeholder='University'
                    name='University'
                    onChange={(e) => this.props.onChange(e)}
                />
                <TextInput
                   divId={`div-${this.props.id}`}
                   id={this.props.id}
                   value={this.props.degree}
                   placeholder='Start'
                   name='Start'
                   onChange={(e) => this.props.onChange(e)}
                />
                <TextInput
                    divId={`div-${this.props.id}`}
                    id={this.props.id}
                    value={this.props.degree}
                    placeholder='End'
                    name='End'
                    onChange={(e) => this.props.onChange(e)}
                />
                <TextArea
                    divId={`div-${this.props.id}`}
                    id={this.props.id}
                    value={this.props.degree}
                    placeholder='Write some details about'
                    name='About'
                    onChange={(e) => this.props.onChange(e)}
                />

                ADD buttons to add and remove education 
            </div>
        )
    }
}

export default Education;