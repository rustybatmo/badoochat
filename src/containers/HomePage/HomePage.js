import React from 'react'
import HomePageLeftPanel from '../../components/HomePageLeftPanel/HomePageLeftPanel'
import HomePageRightPanel from '../HomePageRIghtPanel/HomePageRightPanel';
import styles from './HomePage.module.css';

const HomePage = (props) => {
    const {userInfo} = props;
    
    return (
        <div className= {styles.container}>
            <div className= {styles.leftPanel}>
                <HomePageLeftPanel userInfo = {userInfo} />
            </div>
            <div className= {styles.rightPanel}>
                <HomePageRightPanel />
            </div>
        </div>
    )
}

HomePage.defaultProps = {
    userInfo: {
        name: 'harish', 
        email: "contact@harishcode.com",
        userId: 1,
        photoUrl: "www.google.com"
    }
}


export default HomePage