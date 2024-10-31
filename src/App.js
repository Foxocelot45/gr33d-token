import React from 'react';
import './App.css';
import './components/AboutUs/AboutUs.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Home from './components/Home';
import Roadmap from './components/Roadmap';
import Staking from './components/Staking';
import Contacts from './components/Contacts';
import Whitepaper from './components/Whitepaper';
import logoImage from './assets/The-Greedy-s-Club-31-10-2024.png';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <img src={logoImage} alt="The Greedy's Club Logo" className="header-logo" />
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/roadmap">Roadmap</Link>
            <Link to="/whitepaper">Whitepaper</Link>
            <Link to="/dex" className="disabled">DEX/AMM (Soon)</Link>
            <Link to="/staking">Staking</Link>
            <Link to="/contacts">Contacts</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
          </Routes>
        </main>

        <footer>
          <a href="https://x.com/TheGr33dyzClub" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://t.co/e6Z9lyHC2k" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://t.me/+XWXpQfDJoUhmZDlk" target="_blank" rel="noopener noreferrer">Telegram</a>
        </footer>
      </div>
    </Router>
  );
}

export default App;
