import React, {useEffect} from "react";
import bankIcon from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/bankIcon.png';
import cardIcon from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/cardIcon.png';
import ratingVector from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/ratingVector.png'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import  '@splidejs/react-splide/css';
import 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/App.css';
import {Link} from 'react-router-dom';

const HomePage = () => {

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
                    <li>Checking</li>
                    <li>Savings</li>
                    <li>Credit Cards</li>
                    <li>Auto</li>
                    <Link to="/LogIn" className="navLink">LogIn/SignUp</Link>
                </ul>
            </div>
            <div className="firstSection">
                <div data-aos="fade-right" className="introductionContainer">
                    <h1 className="introduction">Get started with <span style={{color: '#4F6D7A'}}>Best Bank</span> today.</h1>
                    <p className="subIntroduction"><Link to="/SignUp" style={{color: "blue", cursor: "pointer", textDecoration: "none"}}>Sign Up</Link> today and enjoy $250 with 5% APY.</p>
                </div>
                <div data-aos="fade-left" className="cardOfferContainer">
                    <p className="creditCardInfo"><span style={{color: "blue", cursor: "pointer"}}>See about getting</span> a card with <br /> 1.5% cash back and no annual fee.</p>
                    <img className="cardIcon" src={cardIcon} alt="credit card icon"/>
                </div>
            </div>
            <section data-aos="fade-up" className="splideContainer">
                <Splide tag="section" options={{
                    perMove: 1,
                    perPage: 1,
                    drag: 'free',
                    snap: true,
                    pagination: false,
                    type: 'loop'
                }} className="reviewSlider">
                    <SplideSlide className="ratingContainer">
                            <img className="ratingVector" alt="5 star rating" src={ratingVector}/>
                            <p className="ratingReview">Best customer service I've had in years!</p>
                    </SplideSlide>
                    <SplideSlide className="ratingContainer">
                            <img className="ratingVector" alt="5 star rating" src={ratingVector}/>
                            <p className="ratingReview">defintely the best bank</p>
                    </SplideSlide>
                    <SplideSlide className="ratingContainer">
                            <img className="ratingVector" alt="5 star rating" src={ratingVector}/>
                            <p className="ratingReview">Another happy customer</p>
                    </SplideSlide>
                    <SplideSlide className="ratingContainer">
                            <img className="ratingVector" alt="5 star rating" src={ratingVector}/>
                            <p className="ratingReview">great place for personal loans</p>
                    </SplideSlide>
                    <SplideSlide className="ratingContainer">
                            <img className="ratingVector" alt="5 star rating" src={ratingVector}/>
                            <p className="ratingReview">They really help you save.</p>
                    </SplideSlide>
                    <SplideSlide className="ratingContainer">
                            <img className="ratingVector" alt="5 star rating" src={ratingVector}/>
                            <p className="ratingReview">Excellent credit services</p>
                    </SplideSlide>
                    <SplideSlide className="ratingContainer">
                            <img className="ratingVector" alt="5 star rating" src={ratingVector}/>
                            <p className="ratingReview">Good service with no crazy fees</p>
                    </SplideSlide>
                    <SplideSlide className="ratingContainer">
                            <img className="ratingVector" alt="5 star rating" src={ratingVector}/>
                            <p className="ratingReview">Need a credit card? Go to best bank.</p>
                    </SplideSlide>
                    <SplideSlide className="ratingContainer">
                            <img className="ratingVector" alt="5 star rating" src={ratingVector}/>
                            <p className="ratingReview">They are always happy to answer all my questions</p>
                    </SplideSlide>
                </Splide>
            </section>
            <div className="slogansAndVectors">
                <p>placeholder</p>
            </div>
        </div>
    )
}

export default HomePage;