import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import StopWarModal from '../../components/stop-war-modal';

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
            <StopWarModal/>
        </>
    );
}

export default Layout;
