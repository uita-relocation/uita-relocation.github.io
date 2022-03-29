import React from "react";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import Main from "../../components/main/main.component";
import StopWarModal from "../../components/stop-war-modal/StopWarModal";

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
