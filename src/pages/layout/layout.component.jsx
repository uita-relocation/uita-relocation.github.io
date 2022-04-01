import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import StopWarModal from '../../components/stop-war-modal';

import './layout.styles.scss'

function Layout({children}) {
    return (
        <div className="layout">
            <Header/>
            {children}
            <Footer/>
            <StopWarModal/>
        </div>
    );
}

export default Layout;
