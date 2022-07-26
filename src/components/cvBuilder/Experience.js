import React, {Component} from 'react';

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="Experience">
                <div className='Title'>Experiences</div>
                <form className='ExperienceForm'>
                 <div>
                    <label htmlFor='company'>Company or Organization</label>
                    <input type='text' id='company' placeholder="Company or Organization"/>
                 </div>  
                 <div>  
                    <label htmlFor='jobTitle'>Jon Tittle</label>
                    <input type='text' id='jobTittle' placeholder="Job Title"/>
                 </div>
                 <div>
                    <label htmlFor='startDate'>Start Date</label>
                    <input type='text' id='startDate' placeholder="First day at Job"/>
                 </div>
                 <div>
                    <label htmlFor='finishDate'>Finish Date</label>
                    <input type='text' id='finishDate' placeholder="Last day at Job"/>
                 </div>
                </form>
            </div>
        )
    }
}

export default Experience;