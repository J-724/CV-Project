import React, {Component} from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';

class PersonalInfo extends Component {

    render() {
        console.log(this.props.personalInfo.name + 'name');
        return (
            <div className="Personal-Info">
                <TextInput
                    divId= 'divID_name'
                    id= 'IDname'
                    value={this.props.personalInfo.name}
                    placeholder='name'
                    name='name'
                    onChange={(e) => this.props.onChange}
                />
                <TextInput
                    divId= 'divID_email'
                    id= 'IDemail'
                    value={this.props.personalInfo.email}
                    placeholder='email'
                    name='email'
                    onChange={(e) => this.props.onChange}
                />
                <TextInput
                   divId= 'divID_address'
                   id= 'IDaddress'
                   value={this.props.personalInfo.address}
                   placeholder='State, Country'
                   name='address'
                   onChange={(e) => this.props.onChange}
                />
                <TextInput
                    divId= 'divID_SMedia'
                    id= 'IDSMedia'
                    value={this.props.personalInfo.socialMedia}
                    placeholder='Most relevant social media link'
                    name='socialMedia'
                    onChange={(e) => this.props.onChange}
                />
                <TextArea
                    divId= 'divID_PIAbout'
                    id= 'IDPIAbout'
                    value={this.props.personalInfo.quickBio}
                    placeholder='Write about yourself'
                    name='quickBio'
                    onChange={(e) => this.props.onChange}
                />
            </div>
        )
    }   
}

export default PersonalInfo;