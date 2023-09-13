import React, {useEffect} from "react";
import 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/css/Home.css';
import bankIcon from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/bankIcon.png';
import homeForSale from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/homeForSale.png';
import homeSold from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/homeSold.jpg';
import experienced from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/experienced.jpg';
import propertyInvestor from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/propertyInvestor.jpg';
import {Link} from 'react-router-dom';


const Home = () => {


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
                    <Link to="/Auto" className="navLink">Auto</Link>
                    <Link to="/LogIn" className="navLink">Login</Link>
                    <Link to="/SignUp" className="navLink">Sign Up</Link>
                </ul>
            </div>
            <div className="mobileMenu">
                <Link to="/" className="navLink">Main Page</Link>
                <Link to="/Checking" className="navLink">Checking</Link>
                <Link to="/Savings" className="navLink">Savings</Link>
                <Link to="/CreditCards" className="navLink">Credit Cards</Link>
                <Link to="/Auto" className="navLink">Auto</Link>
                <Link to="/LogIn" className="navLink">Login</Link>
                <Link to="/SignUp" className="navLink">Sign Up</Link>
                <Link className="navLink">Customer Support</Link>
                <Link className="navLink">FAQs</Link>
                <Link className="navLink">ATM Locator</Link>
            </div>
            <div className="firstSectionHome">
                <div className="homeHeaderContainer">
                    <div  data-aos="fade-right">
                        <p>Need help with purchasing a home? Best Bank has you covered!</p>
                        <button>Get Prequalified</button>
                    </div>
                    <img className="homeForSaleVector" data-aos="fade-left" alt="First time home owner? Get your loan at Best Bank!" src={homeForSale}/>
                </div>
            </div>
            <div className="homeOptions">
                <div data-aos="fade-up">
                    <img alt="New home owner?" src={homeSold}/>
                    <p className="homeOptionTag">First Time Home Owner?</p>
                    <p className="homeOptionSubTag">If you are a first time home owner Best Bank has the knowledge and resources to help
                        teach you the right steps to owning a new home.
                    </p>
                </div>
                <div style={{padding: "40px 0 40px 0"}} className="middleHomeOption" data-aos="fade-up">
                    <img alt="Experienced home owner?" src={experienced}/>
                    <p className="homeOptionTag">Experienced?</p>
                    <p className="homeOptionSubTag">Best Bank has made it easy for those who have experienced buying a home.
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img alt="Property Investor?" src={propertyInvestor} />
                    <p className="homeOptionTag">Looking to invest in a property?</p>
                    <p className="homeOptionSubTag">We offer the best rates and terms along with benefits for those looking to invest in properties. </p>
                </div>
            </div>
        </div>
    )
}

export default Home;