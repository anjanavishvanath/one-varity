import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import './App.css';

function App() {
    return (
        <>
            <div className="hero">

            </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <header>
            <Link to="/"><img src="#" alt="Logo" /></Link>
            <nav>
                <Link to="/" className="tab">Home</Link>
                <Link to="/about" className="tab">About</Link>
                <Link to="/features" className='tab'>Features</Link>
                <Link to="/pricing" className='tab'>Pricing</Link>
            </nav>
        </header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
)
