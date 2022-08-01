import React, {Component} from 'react';
import uniqid from 'uniqid';

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




        return (
            <div className="InfoRender">
                <div>
                    {this.props.personalInfo.name} <br/>
                    {this.props.personalInfo.email} <br/>
                    {this.props.personalInfo.address} <br/>
                    {this.props.personalInfo.socialMedia} <br/>
                    {this.props.personalInfo.quickBio} <br/>
                </div>
                <div>
                    {educationElements}
                    {/* {this.props.education.degree} <br/>
                    {this.props.education.university} <br/>
                    {this.props.education.start} <br/>
                    {this.props.education.end} <br/>
                    {this.props.education.about} <br/> */}
                </div>
                <div>
                    {/* {this.props.experience} */}
                </div>
            </div>
        )
    }
}

export default View