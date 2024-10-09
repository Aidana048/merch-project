import React from 'react';
import Header from './header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';




const Layout = () => {
    return (
        <div className='app'>
           <Header/>
           <Outlet/>
           {/* <Insta/> */}
           <Footer/>
        </div>
    );
};

export default Layout;