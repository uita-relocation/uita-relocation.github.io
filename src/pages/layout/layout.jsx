import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import StopWarModal from '../../components/stop-war-modal';

const Layout = ({children}) => {
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
