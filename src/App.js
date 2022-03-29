import React from 'react';
import SignInPageContainer from './containers/SignInPage.js/SignInPage';
import "./App.css";
import Header from './components/Header/Header';
import ChatWithStrangers from './containers/ChatWithStrangers/ChatWithStrangers';
import CompleteRegistration from './components/CompleteRegistration/CompleteRegistration';
import {Route, Switch} from 'react-router-dom'
import HomePage from './containers/HomePage/HomePage';
import UploadPhotosContainer from './containers/UploadPhotosContainer/UploadPhotosContainer';
// import OnBoardingContainer from './containers/OnboardingContainer/OnboardingContainer';


function App() {

  return (
    
    <div>
        <Header/>
          <Switch>
            <Route exact path = "/" component={SignInPageContainer} />
            <Route exact path = "/not-confirmed" component={CompleteRegistration} />
            <Route exact path = "/upload-photos" component={UploadPhotosContainer} />
            {/* <Route exact path = "/on-boarding" component={OnBoardingContainer} /> */}
            <Route path = "/home-page" component={HomePage} />
            <Route exact path = "/chat-with-stangers" component={ChatWithStrangers} />   
          </Switch>
    </div>
  )
}

export default App;