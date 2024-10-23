import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Game from './pages/Map';
import Payment from './pages/Payment';
import About from './pages/About';
import Login from './components/Login';
import './App.css';
import PreLoader from './components/Preloader';
import TranslateWidget from './components/TranslateWidget';
import Placess from './components/Placess';

const App = () => {
    const [showPopup, setShowPopup] = useState(true);
    const [showLogin, setShowLogin] = useState(false);

    const handleAccept = () => {
        setShowPopup(false);
    };

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const handleCloseLogin = () => {
        setShowLogin(false);
    };

    return (
        <>
            <PreLoader />
            <Router>
                <div>
                    <Nav onLoginClick={handleLoginClick} />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/doctors" element={<Payment />} />
                            <Route path="/Map" element={<Map />} />
                            <Route path="/about" element={<About />} />
                            
                        </Routes>
                    </main>
                </div>
            </Router>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>DR.GRANDMA</h2>
                        <TranslateWidget />
                        <p>In this chatbot only access for few questions is free. If you want to move further, please complete the login process.</p>
                        <button onClick={handleAccept}>Accept</button>
                    </div>
                </div>
            )}
            {showLogin && <Login onClose={handleCloseLogin} />}
        </>
    );
}

export default App;
