import React from 'react';
import  LandingPage from './pages/landing/LandingPage';
import './App.css';
import Nav from './component/header/navbar/NavBar'
import Portfolio from './pages/Portfolio/Portfolio.component';
// import M from 'materialize-css';

function App() {
  return (
    <div>
      <Nav/>
      <LandingPage />
      <Portfolio />
    </div>
    );
}

export default App;