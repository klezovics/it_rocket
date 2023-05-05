import React from "react";
import logo from '../assets/img/rocket.svg';
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";

const Homepage = () => {
    return (
        <>
            <Header/>
            <div className="App" style={{height: '100%'}}>
                <img style={{marginTop: '50px', width: '200px', height: '200px'}} src={logo} alt="logo"/>
                <p>Prepare to fly on the IT-rocket!</p>
                <p>This will be a great journey!</p>
            </div>
            <Footer/>
        </>
    );
}

export default Homepage