import React from 'react';
import {Route, Switch} from 'react-router-dom'
import ChatWindowContainer from '../ChatWindowContainer/ChatWindowContainer';
import ContactsContainer from '../ContactsContainer/ContactsContainer';
import MessagesContainer from '../MessagesContainer/MessagesContainer';
import StartChattingContainer from '../StartChattingContainer/StartChattingContainer';

const HomePageRightPanel = () => {
    return (
        <div>
            <Switch>
                <Route exact path = '/home-page/start-chatting' component={StartChattingContainer} />
                <Route exact path = '/home-page/messages' component={MessagesContainer} />
                <Route exact path = '/home-page/contacts' component={ContactsContainer} />
                <Route  path = '/home-page/contacts/:id' component={ChatWindowContainer} />
                <div>Didfferent page</div>
            </Switch>
        </div>
    )
}

export default HomePageRightPanel