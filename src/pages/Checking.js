import React from "react";
import 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/css/Checking.css';
import bankIcon from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/bankIcon.png';
import { Link } from "react-router-dom";

const Checking = () => {
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
                    <Link to="/" className="navLink">Main Page</Link>
                    <Link to="/Savings" className="navLink">Savings</Link>
                    <Link to="/CreditCards" className="navLink">Credit Cards</Link>
                    <Link to="/Home" className="navLink">Home</Link>
                    <Link to="/Auto" className="navLink">Auto</Link>
                    <Link to="/LogIn" className="navLink">LogIn/SignUp</Link>
                </ul>
            </div>
            <div className="firstSectionChecking">
                <div data-aos="fade-down" className="checkingHeaderContainer">
                    <h1>Best Bank Total Checking</h1>
                    <p>Enjoy $250 when opening a checking account with Best Bank.</p>
                </div>
                <div className="checkingSubTextContainer">
                    <div data-aos="fade-right" className="subTextSecondaryContainer">
                        <p className="checkingSubHeader">Best Bank Checking</p>
                        <p className="checkingSubText">Our most popular option with all the essentials.</p>
                        <button className="checkingButton">Open Account</button>
                    </div>
                    <div data-aos="fade-up" className="subTextSecondaryContainer">
                        <p className="checkingSubHeader">Best Bank Student</p>
                        <p className="checkingSubText">An option for college students who need a little extra.</p>
                        <button className="checkingButton">Open Account</button>
                    </div>
                    <div data-aos="fade-left" className="subTextSecondaryContainer">
                        <p className="checkingSubHeader">Best Bank Plus</p>
                        <p className="checkingSubText">A checking out with all the essentials and more.</p>
                        <button className="checkingButton">Open Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Checking;