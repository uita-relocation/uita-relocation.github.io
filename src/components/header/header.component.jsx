import React from "react";
import {ReactComponent as Logo} from "../../assets/logo.svg";

import "./header.styles.scss"

function Header() {
    return (
        <header className="header-wrapper">
            <nav className="header-content">
                <div className="logo-container">
                    <Logo className="logo"/>
                </div>
                <div className="options">
                    <p className="option">
                        Корисна інформація
                    </p>
                    <p className="option">
                        {/*<a href="" target="_blank">*/}
                        Блог
                        {/*</a>*/}
                    </p>
                </div>
            </nav>
        </header>
    );
}

export default Header;
