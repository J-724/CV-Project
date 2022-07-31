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
                    onChange={this.props.onChange()}
                />
                <TextInput
                    divId={`div-${this.props.id}`}
                    id={this.props.id}
                    value={this.props.degree}
                    placeholder='University'
                    name='University'
                    onChange={this.props.onChange()}
                />
                <TextInput
                   divId={`div-${this.props.id}`}
                   id={this.props.id}
                   value={this.props.degree}
                   placeholder='Start'
                   name='Start'
                   onChange={this.props.onChange()}
                />
                <TextInput
                    divId={`div-${this.props.id}`}
                    id={this.props.id}
                    value={this.props.degree}
                    placeholder='End'
                    name='End'
                    onChange={this.props.onChange()}
                />
                <TextArea
                    divId={`div-${this.props.id}`}
                    id={this.props.id}
                    value={this.props.degree}
                    placeholder='Write some details about'
                    name='About'
                    onChange={this.props.onChange()}
                /> 
            </div>
        )
    }
}

export default Education;