import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePage from './pages/HomePage'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
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
            <Route path="*" element={<div>Error</div>}></Route>
        </Routes>
    </BrowserRouter>
};

export default App;