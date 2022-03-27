import React from "react";
import styles from "./Header.module.css"

const Header = () => {
    return (
        <div id = {styles.header}>
            <div className= {styles.i18n}>English</div>
            <div id = {styles.logoContainer}>
                <img className= {styles.img}  src ="https://pd1eu.badoocdn.com/i/v2/-/-/i/ui/assets/cosmos/logo-boxed-inverted.14c6ba0ff124291734c9.svg" />
            </div>
            <button className =  {styles.btn2}>Sign in</button>
        </div>
    )
}

export default Header;