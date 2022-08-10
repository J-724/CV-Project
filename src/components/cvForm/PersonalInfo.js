import React, {Component} from 'react';
import TextInput from './misc/TextInput.js';
import TextArea from './misc/TextArea.js';

function PersonalInfo (props) {
    return (
        <div className="Personal-Info">
            <TextInput
                divId= 'divID_name'
                id= 'IDname'
                value={props.personalInfo.name}
                placeholder='name'
                name='name'
                onChange={(e) => props.onChange}
            />
            <TextInput
                divId= 'divID_email'
                id= 'IDemail'
                value={props.personalInfo.email}
                placeholder='email'
                name='email'
                onChange={(e) => props.onChange}
            />
            <TextInput
               divId= 'divID_address'
               id= 'IDaddress'
               value={props.personalInfo.address}
               placeholder='State, Country'
               name='address'
               onChange={(e) => props.onChange}
            />
            <TextInput
                divId= 'divID_SMedia'
                id= 'IDSMedia'
                value={props.personalInfo.socialMedia}
                placeholder='Most relevant social media link'
                name='socialMedia'
                onChange={(e) => props.onChange}
            />
            <TextArea
                divId= 'divID_PIAbout'
                id= 'IDPIAbout'
                value={props.personalInfo.quickBio}
                placeholder='Write about yourself'
                name='quickBio'
                onChange={(e) => props.onChange}
            />
        </div>
    )
}

export default PersonalInfo;