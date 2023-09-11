import React, {useEffect    } from "react";
import bankIcon from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/bankIcon.png';
import piggyBank from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/piggyBank.png';
import 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/css/Savings.css';
import { Link } from "react-router-dom";

const Savings = () => {

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
            <div className="extraOptions">
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
            <div className="mobileMenu">
                <Link to="/" className="navLink">Main Page</Link>
                <Link to="/Checking" className="navLink">Checking</Link>
                <Link to="/CreditCards" className="navLink">Credit Cards</Link>
                <Link to="/Home" className="navLink">Home</Link>
                <Link to="/Auto" className="navLink">Auto</Link>
                <Link to="/LogIn" className="navLink">Login</Link>
                <Link to="/SignUp" className="navLink">Sign Up</Link>
                <Link className="navLink">Customer Support</Link>
                <Link className="navLink">FAQs</Link>
                <Link className="navLink">ATM Locator</Link>
            </div>
            <div className="firstSectionSavings">
                <div className="mainSavingsContainer">
                    <div style={{textAlign: 'center'}}>
                        <p data-aos="fade-down" className="savingsHeader"><span style={{color: "#4F6D7A"}}>Best Bank</span> Savings</p>
                    </div>
                    <div className="whySaveMainContainer" >
                        <div data-aos="fade-right" className="whySaveContainer">
                            <p className="whySave">Why open a savings account with Best Bank?</p>
                            <p style={{fontSize: 20}}>Openening a savings account will allow you to earn interest on the money you've saved.
                                With Best Bank we will ensure that you maximize the money you save and earn. 
                            </p>
                        </div>
                        <img data-aos="fade-left" className="piggyBank" alt="Savings account with Best Bank" src={piggyBank}/>
                    </div>
                    <div data-aos="fade-down" style={{marginTop: 200, marginBottom: 40, width: "fit-content"}}>
                        <p className="savingsInfoHeader">What you get when you open an account with Best Bank</p>
                    </div>
                    <div className="savingsInfo">
                        <p data-aos-delay={200} data-aos="fade-down">Autosaving! Easy and automatic monthly saving into your savings account.</p>
                        <p data-aos-delay={200} data-aos="fade-down">Earn interst on the money you've saved. The more money you save the higher the interest!</p>
                        <p data-aos-delay={200} data-aos="fade-down">FDIC-insured</p>
                        <p data-aos-delay={200} data-aos="fade-down">No Monthly Fees</p>
                        <p data-aos-delay={200} data-aos="fade-down">No minimum to open an account</p>
                    </div>
                    <div data-aos-delay={200} data-aos="fade-down" className="openSavingsContainer">
                        <p className="openSavings">Open a savings account with Best Bank now!</p>
                        <button className="savingsAccountButton">Open Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Savings;