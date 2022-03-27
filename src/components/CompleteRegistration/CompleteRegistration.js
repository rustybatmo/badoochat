import React from "react";

class CompleteRegistration extends React.Component {
    render() {
        return (
            <div>
                <h1>Congratulations! Check your email.</h1>
                <div>To complete registration, click the link in the email that we sent to rustybatmo1@gmail.com</div>
                <a src = "gmail.com"/>
                <button>Next page</button>
            </div>

        )
    }
}

// useMapStateToProps and provide the email id

export default CompleteRegistration