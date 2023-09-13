import React, {useEffect} from "react";
import 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/css/CreditCards.css';
import bankIcon from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/bankIcon.png';
import standardCard from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/standardCard.png';
import premiumCard from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/premiumCard.png';
import goldCard from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/goldCard.png';
import { Link } from "react-router-dom";

const CreditCards = () => {

    useEffect(() => {
        const menu_btn = document.querySelector('.hamburger');
        const mobileMenu = document.querySelector('.mobileMenu');

        menu_btn.addEventListener('click', () => {
                menu_btn.classList.toggle('is-active')
                mobileMenu.classList.toggle('is-active')

                if (mobileMenu.classList.contains('is-active')) {
                    document.body.style.overflow = "hidden";
                } else {
                    document.body.style.overflow = "auto";
                }
            
        })
    }, [])

    return (
        <div>
            <div data-aos="fade-in" className="extraOptions">
                <ul className="extraOptionsNavbar">
                    <li>Customer Support</li>
                    <li>FAQs</li>
                    <li>ATM Locator</li>
                </ul>
            </div>
            <button className="hamburger">
                <div className="bar"></div>
            </button>
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
            <div className="mobileMenu">
                <Link to="/" className="navLink">Main Page</Link>
                <Link to="/Checking" className="navLink">Checking</Link>
                <Link to="/Savings" className="navLink">Savings</Link>
                <Link to="/Home" className="navLink">Home</Link>
                <Link to="/Auto" className="navLink">Auto</Link>
                <Link to="/LogIn" className="navLink">Login</Link>
                <Link to="/SignUp" className="navLink">Sign Up</Link>
                <Link className="navLink">Customer Support</Link>
                <Link className="navLink">FAQs</Link>
                <Link className="navLink">ATM Locator</Link>
            </div>
            <div className="firstSectionCredit">
                <div className="creditCardContainer">
                    <div data-aos="fade-up" className="creditCards">
                        <p style={{fontSize: '40px'}}>Standard</p>
                        <img alt="Stardard credit card option" src={standardCard}/>
                        <p>Get our standard card and get 1.5% cash for the
                         first $1,500 with select purchases and 23% APR.</p>
                        <button className="cardLink">View Info</button>
                    </div>


                    <div data-aos="fade-up" data-aos-delay={200} className="creditCards">
                        <p style={{fontSize: '40px'}}>Premium</p>
                        <img alt="Premium credit card option" src={premiumCard}/>
                        <p>Get our premium card and get unlimited 3% cash back on all purchases with 20% APR and no annual fees.</p>
                        <button className="cardLink">View Info</button>
                    </div>


                    <div data-aos="fade-up" data-aos-delay={400} className="creditCards">
                        <p style={{fontSize: '40px'}}>Gold</p>
                        <img alt="Gold credit card option" src={goldCard}/>
                        <p>Get our gold card and get unlimited 5% cash back on all purchases with 17% APR and no annual fees.</p>
                        <button className="cardLink">View Info</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreditCards;