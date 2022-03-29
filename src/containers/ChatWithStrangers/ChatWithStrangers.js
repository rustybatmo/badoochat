import React from 'react'
import {withRouter} from 'react-router-dom'

const ChatWithStrangers = (props) => {

    const handleClick = () => {
        const {history}  = props
        history.push("/profile-onboarding");
    }

    return (
        <div>
            <button onClick={handleClick}>Chat with Strangers</button>
        </div>
    )
}

export default withRouter(ChatWithStrangers);