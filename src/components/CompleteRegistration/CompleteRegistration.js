import React from "react";
import {withRouter} from 'react-router-dom'

const CompleteRegistration = (props) => {

    function handleClick(e) {
        e.preventDefault();
        const {history} = props;
        history.push("/upload-photos");
    }

    return (
        <div>
            <h1>Congratulations! Check your email.</h1>
            <div>To complete registration, click the link in the email that we sent to rustybatmo1@gmail.com</div>
            <a src = "gmail.com"/>
            <button onClick = {handleClick}> Once done, go to next page</button>
        </div>
    )
}


// useMapStateToProps and provide the email id

export default withRouter(CompleteRegistration) 