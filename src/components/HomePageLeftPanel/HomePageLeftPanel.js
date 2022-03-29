import React from 'react';
import {withRouter} from 'react-router-dom'

const HomePageLeftPanel = (props) => {
    const {name, email, userId} = props.userInfo;

    const handleClick = (e) => {
        const {history} = props;
        if(e.target.getAttribute('name') === "start-chatting") {
            history.push("/home-page/start-chatting");
        }  else if (e.target.getAttribute("name") === "messages") {
            history.push("/home-page/messages");
        } else if (e.target.getAttribute("name") === 'contacts') {
            history.push("/home-page/contacts");
        } 
    }
    return (
        <div>   
            <h1>{name}</h1>
            <div>{email}</div>
            <div onClick={handleClick}>
                <div name = "contacts">Contacts</div>
                <div name = "messages" >Messages</div>
                <div name = "start-chatting">Start Chatting</div>
            </div>
        </div>
    )
}

export default withRouter(HomePageLeftPanel);