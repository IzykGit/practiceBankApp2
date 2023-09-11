import React, {useEffect} from "react";
import 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/css/Checking.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bankIcon from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/bankIcon.png';
import { Link } from "react-router-dom";

const Checking = () => {

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
    
    useEffect(() => {
        AOS.init();
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
                    <Link to="/Savings" className="navLink">Savings</Link>
                    <Link to="/CreditCards" className="navLink">Credit Cards</Link>
                    <Link to="/Home" className="navLink">Home</Link>
                    <Link to="/Auto" className="navLink">Auto</Link>
                    <Link to="/LogIn" className="navLink">LogIn/SignUp</Link>
                </ul>
            </div>
            <div className="mobileMenu">
                <Link to="/" className="navLink">Main Page</Link>
                <Link to="/Savings" className="navLink">Savings</Link>
                <Link to="/CreditCards" className="navLink">Credit Cards</Link>
                <Link to="/Home" className="navLink">Home</Link>
                <Link to="/Auto" className="navLink">Auto</Link>
                <Link to="/LogIn" className="navLink">Login</Link>
                <Link to="/SignUp" className="navLink">Sign Up</Link>
                <Link className="navLink">Customer Support</Link>
                <Link className="navLink">FAQs</Link>
                <Link className="navLink">ATM Locator</Link>
            </div>
            <div className="firstSectionChecking">
                <div data-aos="fade-down" className="checkingHeaderContainer">
                    <h1>Best Bank Total Checking</h1>
                    <p>Enjoy $250 when opening a checking account with Best Bank.</p>
                </div>
                <div className="checkingSubTextContainer">
                    <div data-aos="fade-up" className="subTextSecondaryContainer">
                        <p className="checkingSubHeader">Best Bank Checking</p>
                        <p className="checkingSubText">Our most popular option with all the essentials.</p>
                        <button className="checkingButton">Open Account</button>
                    </div>
                    <div data-aos="fade-up" data-aos-delay={100} className="subTextSecondaryContainer">
                        <p className="checkingSubHeader">Best Bank Student</p>
                        <p className="checkingSubText">An option for college students who need a little extra.</p>
                        <button className="checkingButton">Open Account</button>
                    </div>
                    <div data-aos="fade-up" data-aos-delay={200} className="subTextSecondaryContainer">
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