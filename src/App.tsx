import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Nav from './components/nav';
import Home from './pages/home';
import Marketplace from './pages/marketplace/market';
import Login from './pages/users/login';
import SignUp from './pages/users/signup';
import Footer from './components/footer';
import Account from './pages/accountView/account';
import Buy from './pages/buy/buy';
import About from './pages/aboutUs/about';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path = "/" element ={<Home />} />
          <Route path = "/signup" element ={<SignUp />} />
          <Route path = "/login" element ={<Login />} />
          <Route path = "/marketplace" element ={<Marketplace />} />
          <Route path = "/about-us" element = {<About />} />
          <Route path = "/account/explore" element = {<Account />} />
          <Route path = "/account/buy" element = {<Buy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
