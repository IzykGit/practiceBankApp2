import React, {useEffect} from "react";
import 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/App.css';
import bankIcon from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/bankIcon.png';
import homeForSale from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/homeForSale.png';
import {Link} from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <div data-aos="fade-in" className="extraOptions">
                <ul className="extraOptionsNavbar">
                    <li>Customer Support</li>
                    <li>FAQs</li>
                    <li>ATM Locator</li>
                </ul>
            </div>
            <div data-aos="fade-in" className="headerAndImage">
                <h1 className="pageHeader">Best Bank</h1>
                <img className="navImage" alt="bankIcon" src={bankIcon}/>
            </div>
            <div data-aos="fade-in" className="navbarContainer">
                <ul className="navbar">
                    <Link to="/Checking" className="navLink">Checking</Link>
                    <Link to="/Savings" className="navLink">Savings</Link>
                    <Link to="/CreditCards" className="navLink">Credit Cards</Link>
                    <Link to="/Home" className="navLink">Home</Link>
                    <Link to="/Auto" className="navLink">Auto</Link>
                    <Link to="/LogIn" className="navLink">Login</Link>
                    <Link to="/SignUp" className="navLink">Sign Up</Link>
                </ul>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}} className="firstSection">
                <div className="homeHeaderContainer">
                    <div>
                        <p data-aos="fade-right">Need help with purchasing a home? Best Bank has you covered!</p>
                        <button>Get Prequalified</button>
                    </div>
                    <img data-aos="fade-left" alt="First time home owner? Get your loan at Best Bank!" src={homeForSale}/>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Home;