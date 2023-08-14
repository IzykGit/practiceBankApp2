import React, {useEffect} from "react";
import bankIcon from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/bankIcon.png';
import cardIcon from 'C:/Users/lance/Desktop/Developement/Coding/bank-app-2/src/assets/cardIcon.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'

const App = () => {

    AOS.init({duration: 1000})
    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <div>
            <div className="extraOptions">
                <ul className="extraOptionsNavbar">
                    <li>Placeholder</li>
                    <li>Placeholder</li>
                    <li>Placeholder</li>
                </ul>
            </div>
            <div className="headerAndImage">
                <h1 className="pageHeader">Best Bank</h1>
                <img className="navImage" alt="bankIcon" src={bankIcon}/>
            </div>
            
            <div className="navbarContainer">
                <ul className="navbar">
                    <li>Placeholder</li>
                    <li>Placeholder</li>
                    <li>Placeholder</li>
                    <li>Placeholder</li>
                    <li>Placeholder</li>
                </ul>
            </div>
            <div className="firstSection">
                <div className="introductionContainer">
                    <h1 className="introduction">Get started with <span style={{color: '#4F6D7A'}}>Best Bank</span> today.</h1>
                    <p className="subIntroduction">Sentence placeholder</p>
                </div>
                <div className="cardOfferContainer">
                    <p className="creditCardInfo"><span style={{color: "blue", cursor: "pointer"}}>Create an account today</span> and get a card with <br /> 1.5% cash back and no annual fee.</p>
                    <img className="cardIcon" src={cardIcon} alt="credit card icon"/>
                </div>
            </div>
            
        </div>
    )
}

export default App;