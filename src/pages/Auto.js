import React from "react";
import bankIcon from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/bankIcon.png';
import carVector from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/carVector.png';
import getQualified from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/getQualified.png';
import getFinanced from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/getFinanced.png';
import driveOff from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/driveOff.png';
import 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/App.css';
import {Link} from 'react-router-dom';


const Auto = () => {
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
                    <Link to="/CreditCards" className="navLink">Credit Cards</Link>
                    <Link to="/Home" className="navLink">Home</Link>
                    <Link to="/LogIn" className="navLink">Login</Link>
                    <Link to="/SignUp" className="navLink">Sign Up</Link>
                </ul>
            </div>
            <div style={{display: "flex", justifyContent: "space-evenly"}} className="firstSection">
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
                <div>
                    <img alt="Get qualified for your auto loan!" src={getQualified}/>
                    <p>placeholder</p>
                </div>
                <div className="middleStepContainer">
                    <img alt="Get financed for your auto loan!" src={getFinanced} />
                    <p>Placeholder</p>
                </div>
                <div>
                    <img alt="Drive off with your new car!" src={driveOff} />
                    <p>Placeholder</p>
                </div>
            </div>
        </div>
    )
}

export default Auto;