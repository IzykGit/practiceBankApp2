import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePage from './pages/HomePage'
import LogIn from './pages/LogIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

    AOS.init({duration: 1200})
    useEffect(() => {
        AOS.init();
    }, [    ])

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="Login" element={<LogIn />}></Route>
            <Route path="*" element={<div>Error</div>}></Route>
        </Routes>
    </BrowserRouter>
};

export default App;