import React, {useEffect} from "react";
import 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/App.css';
import bankIcon from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/bankIcon.png';
import homeForSale from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/homeForSale.png';
import {Link} from 'react-router-dom';


const Home = () => {
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
                    <Link to="/Auto" className="navLink">Auto</Link>
                    <Link to="/LogIn" className="navLink">Login</Link>
                    <Link to="/SignUp" className="navLink">Sign Up</Link>
                </ul>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', height: "400px"}} className="firstSection">
                <div className="homeHeaderContainer">
                    <div  data-aos="fade-right">
                        <p>Need help with purchasing a home? Best Bank has you covered!</p>
                        <button>Get Prequalified</button>
                    </div>
                    <img data-aos="fade-left" alt="First time home owner? Get your loan at Best Bank!" src={homeForSale}/>
                </div>
            </div>
            <div className="homeOptions">
                <div>
                    <p style={{fontSize: 30, marginBottom: 25, color: "blue", textDecoration: "underline", cursor: "pointer"}}>First Time Home Owner?</p>
                    <p style={{fontSize: 17}}>If you are a first time home owner Best Bank has the knowledge and resources to help
                        teach you the right steps to owning a new home.
                    </p>
                </div>
                <div>
                    <p style={{fontSize: 30, marginBottom: 25, color: "blue", textDecoration: "underline", cursor: "pointer"}}>Experienced?</p>
                    <p style={{fontSize: 17}}>Best Bank has made it easy for those who have experienced buying a home.
                    </p>
                </div>
                <div>
                    <p style={{fontSize: 30, marginBottom: 25, color: "blue", textDecoration: "underline", cursor: "pointer"}}>Looking to invest in a property?</p>
                    <p>We offer the best rates and terms along with benefits for those looking to invest in properties. </p>
                </div>
            </div>
        </div>
    )
}

export default Home;