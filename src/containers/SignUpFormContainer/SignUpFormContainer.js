import React from 'react';
import styles from "./SignUpFormContainer.module.css"
import generateTime from './utils';


class SignUpFormContainer extends React.Component {

    constructor() {
        
        super();
        this.state = {
            gender: '',
            dobData: generateTime(),
            defaultDay: "Day",
            defaultMonth: "Month",
            defaultYear: "Year",
            page: 1
        }
        this.handleGenderSelect = this.handleGenderSelect.bind(this);
        this.handleGoBack = this.handleGoBack.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const {history} = this.props;
        //if everything looks right

        // history.push("/complete-registeration");
     }

    handleGenderSelect(e) {
        e.preventDefault();
        const name = e.target.name;
        if(name === "male"){
            this.setState({
                gender: "Male", 
                page: 2
            })
        } else if (name === "female") {
            this.setState({
                gender: "Female", 
                page: 2
            })
        } else {
            this.setState({
                gender: "Other", 
                page: 2
            })
        }
    }

    handleGoBack() {
        console.log("went back")
        this.setState({
            page: 1, 
        })
    }


    render() {
        const {dobData, defaultDay, defaultMonth, defaultYear, page} = this.state;

        const {days, months, years} = dobData;

        if(page === 1) {
            return (
                <div className= {styles.genderContent}>
                    <h1 className = {styles.h1}> Sign up by answering a few questions</h1>
                    <div>You are </div>
                    <form onClick = {this.handleGenderSelect} className = {styles.gender} >
                        <button name = "male">Male</button>
                        <button name = "female">Female</button>
                        <button name = "other">Other</button>
                    </form>
                </div>
            )
        }

    
        return (
                
                <form onSubmit={this.handleSubmit}  className = {styles.formContent}>
                    <button onClick={this.handleGoBack}> GO BACK </button>
                    <input placeholder='Your first name'/>
                    <div className= {styles.date}>
                        <select name = "day" defaultValue = {defaultDay}>
                            {
                                days.map(day => <option value = {day} > {day}</option>)
                            }
                        </select>
                        <select name = {defaultMonth}>
                            {months.map(month => (<option value = {month}> {month}</option>))}
            
                        </select>
                        <select defaultValue = {defaultYear} >
                            {years.map(year => (<option value = {year}> {year}</option>))}
                        </select>
                    </div>
                    <input placeholder='Type your location' />
                    <input placeholder='Enter your mobile number' /> 
                    <input placeholder='Create your password' />
                    <label >Password much be atleast 5 characters</label>
                    <button type ="submit" className= {styles.btn1}>Create Account</button>
                </form>
        )


        
    }
}

export default  SignUpFormContainer