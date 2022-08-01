import React, {Component} from 'react';

class View extends Component {
    render() {
        return (
            <div className="InfoRender">
                <div>
                    {this.props.personalInfo.name} <br/>
                    {this.props.personalInfo.email} <br/>
                    {this.props.personalInfo.address} <br/>
                    {this.props.personalInfo.socialMedia} <br/>
                    {this.props.personalInfo.quickBio} <br/>
                </div>
                {/* <div>
                    {this.props.education}
                </div>
                <div>
                    {this.props.experience}
                </div> */}
            </div>
        )
    }
}

export default View