import React, {useEffect} from "react";
import bankIcon from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/bankIcon.png';
import carVector from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/carVector.png';
import getQualified from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/getQualified.png';
import getFinanced from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/getFinanced.png';
import driveOff from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/driveOff.png';
import 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/css/Auto.css';
import {Link} from 'react-router-dom';


const Auto = () => {

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
                    <Link to="/LogIn" className="navLink">Login</Link>
                    <Link to="/SignUp" className="navLink">Sign Up</Link>
                </ul>
            </div>
            <div className="mobileMenu">
                <Link to="/" className="navLink">Main Page</Link>
                <Link to="/Checking" className="navLink">Checking</Link>
                <Link to="/Savings" className="navLink">Savings</Link>
                <Link to="/CreditCards" className="navLink">Credit Cards</Link>
                <Link to="/Home" className="navLink">Home</Link>
                <Link to="/LogIn" className="navLink">Login</Link>
                <Link to="/SignUp" className="navLink">Sign Up</Link>
                <Link className="navLink">Customer Support</Link>
                <Link className="navLink">FAQs</Link>
                <Link className="navLink">ATM Locator</Link>
            </div>
            <div className="firstSectionAuto">
                <div data-aos="fade-right" className="autoImageContainer">
                    <img  className="autoImage" alt="Need to finance a car?" src={carVector}/>
                </div>
                <div data-aos="fade-left" className="autoTitleContainer">
                    <p className="autoTitle"><span style={{color: "#4F6D7A   "}}>Best Bank</span> Drive</p>
                    <p className="autoSubTitle">Find financing that is best for you.</p>
                </div>
            </div>
            <div style={{textAlign: "center", margin: 55}}>
                <p style={{fontSize: 35}}>How to get started with Best Bank</p>
            </div>
            <div className="autoStepsContainer">
                <div data-aos="fade-up">
                    <img alt="Get qualified for your auto loan!" src={getQualified}/>
                    <p style={{fontSize: 30, marginBottom: 20, textDecoration: "underline", color: "#4F6D7A"}}>Apply with ease</p>
                    <p>Get started by giving us details such as the car you want along with dealer location to
                        get a credit decision. If anything changes along the way you can always let us know.
                    </p>
                </div>
                <div data-aos="fade-up" className="middleStepContainer">
                    <img alt="Get financed for your auto loan!" src={getFinanced} />
                    <p style={{fontSize: 30, marginBottom: 20, textDecoration: "underline", color: "#4F6D7A"}}>Get financed</p>
                    <p>Best Bank saves you time. If you're approved we will send your information and paperwork to you
                        and your car dealer.
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img alt="Drive off with your new car!" src={driveOff} />
                    <p style={{fontSize: 30, marginBottom: 20, textDecoration: "underline", color: "#4F6D7A"}}>Drive</p>
                    <p>Once you arrive at your dealer, choose your car with confidence and Best Bank will help you handle any
                         financial changes. With Best Bank you can drive off the lot happy with your choice.
                    </p>
                </div>
            </div>
            <div data-aos="fade-up" className="autoApplyButtonContainer">
                <button>Apple Now</button>
            </div>
        </div>
    )
}

export default Auto;