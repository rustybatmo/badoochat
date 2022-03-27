import React from 'react';
import SignUpFormContainer from '../SignUpFormContainer/SignUpFormContainer';
import styles from "./SignInPage.module.css"


const SignInPageContainer = () => {
    return (
        <div id = {styles.signInPageContainer}>
            <div className = {styles.centerContent}>
                <div className = {styles.item1}>
                    <div className= {styles.item1Content}>
                        <h1 className= {styles.h1}>Find someone new!</h1>
                        <h2 className= {styles.h2} >Meet and chat to people near you</h2>
                        <button className= {styles.btn1}> Sign in  via Facebook</button>
                        <p>We never post on your behalf</p>
                    </div>
                </div>
                <div className= {styles.item2}> 
                    <div className= {styles.item2Content}>
                        <SignUpFormContainer/>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInPageContainer;