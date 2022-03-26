import React from "react";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import Main from "../../components/main/main.component";

import "./layout.styles.scss"

function Layout() {
    return (
        <div className="layout">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default Layout;
