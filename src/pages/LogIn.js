import React from "react";
import 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/App.css'
import bankIcon from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/bankIcon.png';
import 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/App.css'
import {Link} from 'react-router-dom';




const LogIn = () => {
    return (
        <div>
            <div className="extraOptions">
                <ul className="extraOptionsNavbar">
                    <li>Customer Service</li>
                    <li>FAQs</li>
                    <li>ATM Locator</li>
                </ul>
            </div>
            <div data-aos="fade-right" className="headerAndImage">
                <h1 className="pageHeader">Best Bank</h1>
                <img className="navImage" alt="bankIcon" src={bankIcon}/>
            </div>
            
            <div className="navbarContainer">
                <ul className="navbar">
                    <li>Checking</li>
                    <li>Savings</li>
                    <li>Credit Cards</li>
                    <Link to="/" className="navLink">Home</Link>
                    <li>Auto</li>
                </ul>
            </div>
            <div className="firstSection">
                
            </div>
        </div>
    )
}

export default LogIn