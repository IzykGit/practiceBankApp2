import React, {useEffect} from "react";
import 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/css/LoginSignup.css'
import bankIcon from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/bankIcon.png';
import {Link} from 'react-router-dom';


const SignUp = () => {

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
                    <Link to="/CreditCards" className="navLink">Credit Cards</Link>
                    <Link to="/Home" className="navLink">Home</Link>
                    <Link to="/Auto" className="navLink">Auto</Link>
                </ul>
            </div>
            <div className="mobileMenu">
                <Link to="/" className="navLink">Main Page</Link>
                <Link to="/Checking" className="navLink">Checking</Link>
                <Link to="/Savings" className="navLink">Savings</Link>
                <Link to="/CreditCards" className="navLink">Credit Cards</Link>
                <Link to="/Home" className="navLink">Home</Link>
                <Link to="/Auto" className="navLink">Auto</Link>
                <Link to="/LogIn" className="navLink">Login</Link>
                <Link className="navLink">Customer Support</Link>
                <Link className="navLink">FAQs</Link>
                <Link className="navLink">ATM Locator</Link>
            </div>
            <div className="firstSectionInfo">
                <div data-aos="fade-up" className="accountCard">
                    <p className="loginCardTitle">Sign Up</p>
                    <input id="phoneLoginInput" type="text" placeholder="Enter Phone Number"/>
                    <br />
                    <input id="passwordLoginInput" type="text" placeholder="Create Password"/>
                    <br />
                    <input id="passwordLoginInput" type="text" placeholder="Confirm Password"/>
                    <br />
                    <p>Already have an account? <Link to="/Login" style={{color: "blue", cursor: "pointer", paddingTop: "20px", textDecoration: "none"}}>Click here</Link></p>
                </div>
            </div>
            
        </div>
    )
}

export default SignUp;