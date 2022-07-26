import React, {Component} from 'react';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="Education">
                <div className='Title'>Education</div>
                <form className='EducationForm'>
                 <div>
                    <label htmlFor='uni'>University</label>
                    <input type='text' id='uni' placeholder="University, college or course"/>
                 </div>  
                 <div>  
                    <label htmlFor='degree'>Degree</label>
                    <input type='text' id='degree' placeholder="degree"/>
                 </div>
                 <div>
                    <label htmlFor='gradDate'>Finish Date</label>
                    <input type='text' id='gradDate' placeholder="Past or posible future date"/>
                 </div>
                </form>
            </div>
        )
    }
}

export default Education;