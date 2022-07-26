import React, {Component} from 'react';

class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="Personal-Info">
                <div className='Title'>Personal Info</div>
                <form className='pInfoForm'>
                 <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' placeholder="Full name"/>
                 </div>  
                 <div>  
                    <label htmlFor='email'>email </label>
                    <input type='text' id='email' placeholder="email"/>
                 </div>
                 <div>
                    <label htmlFor='addres'>addres</label>
                    <input type='text' id='addres' placeholder="State, Country"/>
                 </div>
                 <div>
                    <label htmlFor='bio'>About</label>
                    <input type='text' id='bio' placeholder="Quick resume about you" maxLength='700'/>
                 </div>
                </form>
            </div>
        )
    }   
}

export default PersonalInfo;