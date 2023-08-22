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
            <div style={{height: 550}} className="firstSection">
                <div className="creditCardContainer">
                    <div data-aos="fade-up" className="creditCards">
                        <p style={{fontSize: '40px'}}>Standard</p>
                        <img alt="Stardard credit card option" src={standardCard}/>
                        <p>Get our standard card and get 1.5% cash for the
                         first 1,500$ with 23% APR and no annual fees.</p>
                        <button>View Info</button>
                    </div>
                    <div data-aos="fade-up" data-aos-delay={200} className="creditCards">
                        <p style={{fontSize: '40px'}}>Premium</p>
                        <img alt="Premium credit card option" src={premiumCard}/>
                        <p>Get our premium card and get unlimited 1.5% cash back on all purchases with 20% APR and no annual fees.</p>
                        <button>View Info</button>
                    </div>
                    <div data-aos="fade-up" data-aos-delay={400} className="creditCards">
                        <p style={{fontSize: '40px'}}>Gold</p>
                        <img alt="Gold credit card option" src={goldCard}/>
                        <p>Get our gold card and get unlimited 2% cash back on all purchases with 17% APR and no annual fees.</p>
                        <button>View Info</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreditCards;