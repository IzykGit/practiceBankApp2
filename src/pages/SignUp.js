import React from "react";
import 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/App.css'
import bankIcon from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/bankIcon.png';
import 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/App.css'
import {Link} from 'react-router-dom';


const SignUp = () => {
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
                    <li>Checking</li>
                    <li>Savings</li>
                    <li>Credit Cards</li>
                    <li>Home</li>
                    <li>Auto</li>
                </ul>
            </div>
            <div className="firstSection" style={{display: 'flex', justifyContent: 'center'}}>
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