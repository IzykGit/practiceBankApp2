import React from "react";
import bankIcon from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/bankIcon.png';
import standardCard from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/standardCard.png';
import premiumCard from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/premiumCard.png';
import goldCard from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/goldCard.png';
import { Link } from "react-router-dom";

const CreditCards = () => {
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
                    <Link to="/Checking" className="navLink">Checking</Link>
                    <Link to="/Savings" className="navLink">Savings</Link>
                    <Link to="/Home" className="navLink">Home</Link>
                    <Link to="/Auto" className="navLink">Auto</Link>
                    <Link to="/LogIn" className="navLink">Login</Link>
                    <Link to="/SignUp" className="navLink">Sign Up</Link>
                </ul>
            </div>
            <div className="firstSection">
                <div className="creditCardContainer">
                    <div data-aos="fade-up" className="creditCards">
                        <img alt="Stardard credit card option" src={standardCard}/>
                        <p>Placeholder</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay={200} className="creditCards">
                        <img alt="Premium credit card option" src={premiumCard}/>
                        <p>Placeholder</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay={400} className="creditCards">
                        <img alt="Gold credit card option" src={goldCard}/>
                        <p>Placeholder</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreditCards;