import React from 'react'
import { withRouter } from 'react-router';


const ContactsContainer = (props) => {

    const {contactsList} = props;

    const handleClick = (e, userId) => {
        const {history} = props;            
            history.push(`/home-page/contacts/${userId}`)
        
    }
    return (
        <div>
            <h1>All connections</h1>
            {contactsList.map(contact => (
                <div onClick={(e) => handleClick(e, contact.userId)} id = {contact.userId} key = {contact.userId}>
                    <h1>{contact.name}</h1>
                    <h2>{contact.email}</h2>
                </div>
            ))}
        </div>
    )
}

ContactsContainer.defaultProps = {
    contactsList: [{
        name: 'anjali', 
        email: "contact@anjali.com",
        userId: 8,
        photoUrl: "www.facebook.com"
    }, {
        name: 'anjali', 
        email: "contact@anjali.com",
        userId: 9,
        photoUrl: "www.facebook.com"
    }, 
    {
        name: 'anjali', 
        email: "contact@anjali.com",
        userId: 10,
        photoUrl: "www.facebook.com"
    }, 
    {
        name: 'anjali', 
        email: "contact@anjali.com",
        userId: 11,
        photoUrl: "www.facebook.com"
    }, 
    {
        name: 'anjali', 
        email: "contact@anjali.com",
        userId: 12,
        photoUrl: "www.facebook.com"
    }, {
        name: 'anjali', 
        email: "contact@anjali.com",
        userId: 13,
        photoUrl: "www.facebook.com"
    }, 
    {
        name: 'anjali', 
        email: "contact@anjali.com",
        userId: 14,
        photoUrl: "www.facebook.com"
    }, 
    {
        name: 'anjali', 
        email: "contact@anjali.com",
        userId: 15,
        photoUrl: "www.facebook.com"
    }, 
    {
        name: 'anjali', 
        email: "contact@anjali.com",
        userId: 16,
        photoUrl: "www.facebook.com"
    }, 
    {
        name: 'anjali', 
        email: "contact@anjali.com",
        userId: 17,
        photoUrl: "www.facebook.com"
    }]
}

export default withRouter(ContactsContainer)