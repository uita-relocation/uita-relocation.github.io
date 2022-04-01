import React from "react";
import Header from "../../components/header/header.component";
import Main from "../../components/main/main.component";
import Footer from "../../components/footer";
import StopWarModal from "../../components/stop-war-modal";

import "./layout.styles.scss"

function Layout() {
    return (
        <div className="layout">
            <Header/>
            <Main/>
            <Footer />
            <StopWarModal/>
        </div>
    );
}

export default Layout;
