import React from 'react';
import  LandingPage from './pages/landing/LandingPage';
import './App.css';
import Nav from './component/header/navbar/NavBar'
import Portfolio from './pages/Portfolio/Portfolio.component';
import Footer from './component/footer/Footer';
import { Route, Switch } from 'react-router-dom';
// import M from 'materialize-css';

function App() {
  return (
    <div>
      <Nav/>
      <Switch>
      <Route exact path="/" render={(props) => <LandingPage {...props} />} />
      <Route exact path="/portfolio" render={(props) => <Portfolio {...props} />} />
      </Switch>
      <Footer/>
    </div>
    );
}

export default App;