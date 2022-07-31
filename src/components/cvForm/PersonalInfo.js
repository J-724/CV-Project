import React, {Component} from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';

class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="Personal-Info">
                <TextInput
                    divId={`div-${this.props.id}`}
                    id={this.props.id}
                    value={this.props.degree}
                    placeholder='Name'
                    name='Name'
                    onChange={(e) => this.props.onChange(e)}
                />
                <TextInput
                    divId={`div-${this.props.id}`}
                    id={this.props.id}
                    value={this.props.degree}
                    placeholder='Email'
                    name='Email'
                    onChange={(e) => this.props.onChange(e)}
                />
                <TextInput
                   divId={`div-${this.props.id}`}
                   id={this.props.id}
                   value={this.props.degree}
                   placeholder='State, Country'
                   name='Address'
                   onChange={(e) => this.props.onChange(e)}
                />
                <TextInput
                    divId={`div-${this.props.id}`}
                    id={this.props.id}
                    value={this.props.degree}
                    placeholder='Most relevant social media link'
                    name='Social Media'
                    onChange={(e) => this.props.onChange(e)}
                />
                <TextArea
                    divId={`div-${this.props.id}`}
                    id={this.props.id}
                    value={this.props.degree}
                    placeholder='Write about yourself'
                    name='Quick Bio'
                    onChange={(e) => this.props.onChange(e)}
                />
            </div>
        )
    }   
}

export default PersonalInfo;