import React, {Component} from 'react';

class View extends Component {
    render() {
        const educationElements = this.props.education.map( element => {
            return (
                <React.Fragment key={element.id}>
                    {element.degree} <br/>
                    {element.university} <br/>
                    {element.start} <br/>
                    {element.end} <br/>
                    {element.about} <br/>
                </React.Fragment>
            )
        });

        const experienceElements = this.props.experience.map( element => {
            return (
                <React.Fragment key={element.id}>
                    {element.position} <br/>
                    {element.company} <br/>
                    {element.start} <br/>
                    {element.end} <br/>
                    {element.about} <br/>
                </React.Fragment>
            )
        });

        return (
            <div className="InfoRender col-6">
                <div>
                    <div>Personal Info</div>
                    {this.props.personalInfo.name} <br/>
                    {this.props.personalInfo.email} <br/>
                    {this.props.personalInfo.address} <br/>
                    {this.props.personalInfo.socialMedia} <br/>
                    {this.props.personalInfo.quickBio} <br/>
                </div>
                <div>
                    <div>Education</div>
                    {educationElements}
                </div>
                <div>
                    <div>Experience</div>
                    {experienceElements}
                </div>
            </div>
        )
    }
}

export default View