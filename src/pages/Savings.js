import React from "react";
import bankIcon from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/bankIcon.png';
import 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/App.css';
import { Link } from "react-router-dom";

const Savings = () => {
    return (
        <div>
            <div className="extraOptions">
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
            
            <div className="navbarContainer">
                <ul className="navbar">
                    <Link to="/" className="navLink">Main Page</Link>
                    <Link to="/Checking" className="navLink">Checking</Link>
                    <Link to="/CreditCards" className="navLink">Credit Cards</Link>
                    <Link to="/Home" className="navLink">Home</Link>
                    <Link to="/Auto" className="navLink">Auto</Link>
                    <Link to="/LogIn" className="navLink">Login</Link>
                    <Link to="/SignUp" className="navLink">Sign Up</Link>
                </ul>
            </div>
            <div className="firstSection" style={{display: 'flex', justifyContent: 'center'}}>
                
            </div>
        </div>
    )
}

export default Savings;