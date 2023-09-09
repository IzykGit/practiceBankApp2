import React from "react";
import 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/css/LoginSignup.css'
import bankIcon from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/bankIcon.png';
import {Link} from 'react-router-dom';


const Login = () => {
    return (
        <div>
            <div className="extraOptions">
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
            
            <div className="navbarContainer">
                <ul className="navbar">
                    <Link to="/" className="navLink">Main Page</Link>
                    <Link to="/Checking" className="navLink">Checking</Link>
                    <Link to="/Savings" className="navLink">Savings</Link>
                    <Link to="/CreditCards" className="navLink">Credit Cards</Link>
                    <Link to="/Home" className="navLink">Home</Link>
                    <Link to="/Auto" className="navLink">Auto</Link>
                </ul>
            </div>
            <div className="firstSectionInfo">
                <div data-aos="fade-up" className="accountCard">
                    <form>
                        <p className="loginCardTitle">Login</p>
                        <input id="phoneLoginInput" type="text" placeholder="Phone Number"/>
                            <br />
                        <input id="passwordLoginInput" type="text" placeholder="Password"/>
                            <br />
                    </form>
                    <p>Don't have an account with us? <br /> <Link style={{color: "blue", cursor: "pointer", textDecoration: "none"}} to="/SignUp">Sign up</Link> to get started.</p>
                    <br />
                    <p>Forgot password? <span style={{color: "blue", cursor: "pointer", paddingTop: "20px"}}>Click here.</span></p>
                </div>
            </div>
        </div>
    )
}

export default Login