import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePage from './pages/HomePage'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Checking from './pages/Checking';
import Savings from './pages/Savings';
import CreditCards from './pages/CreditCards';
import Home from './pages/Home';
import Auto from './pages/Auto';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

    AOS.init({duration: 800})
    useEffect(() => {
        AOS.init();
    }, [    ])

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="Login" element={<Login />}></Route>
            <Route path="SignUp" element={<SignUp />}></Route>
            <Route path="Checking" element={<Checking />}></Route>
            <Route path="Savings" element={<Savings />}></Route>
            <Route path="CreditCards" element={<CreditCards />}></Route>
            <Route path="Home" element={<Home />}></Route>
            <Route path="Auto" element={<Auto />}></Route>
            <Route path="*" element={<div>Error</div>}></Route>
        </Routes>
    </BrowserRouter>
};

export default App;