import React from 'react'

const ChatWindowContainer = (props) => {

    const {name, email} = props.userInfo;


    return (
        <div>
            <h1>You're chatting with {name}</h1>
        </div>
    )
}

ChatWindowContainer.defaultProps = {
    userInfo : {
        name: "Anjali", 
        email: "contact@anjali.com",

    }
}

export default ChatWindowContainer