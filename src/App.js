import React from 'react';
import SignInPageContainer from './containers/SignInPage.js/SignInPage';
import "./App.css";
import Header from './components/Header/Header';
import ChatWithStrangers from './containers/ChatWithStrangers/ChatWithStrangers';
import CompleteRegistration from './components/CompleteRegistration/CompleteRegistration';
import {Route, Switch} from 'react-router-dom'


function App() {

  return (
    <div>
        <Header/>
          {/* <Switch> */}
            <Route path = "/" component={SignInPageContainer} />
            <Route path = "/complete-registration" component={CompleteRegistration} />
            <Route path = "/chat-with-stangers" component={ChatWithStrangers} />   
          {/* </Switch> */}
    </div>
  )
}

export default App;