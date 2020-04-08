import React from 'react';
import  LandingPage from './pages/landing/LandingPage';
import './App.css';
import Nav from './component/extraPageComponents/header/navbar/NavBar'
import Portfolio from './pages/Portfolio/Portfolio.component';
import About from './pages/About/about.component';
import Footer from './component/extraPageComponents/footer/Footer';
import { Route, Switch } from 'react-router-dom';
import Contact from './pages/contact/Contact';
import big1 from './asset/svg/icons/big1.svg';
import big2 from './asset/svg/icons/big2.svg';
import big3 from './asset/svg/icons/big3.svg';
import big4 from './asset/svg/icons/big4.svg';
import big5 from './asset/svg/icons/big5.svg';

// import M from 'materialize-css';

function App() {
  return (
    <div>
      <Nav/>
      <Switch>
      <Route exact path="/commsworth/" component={LandingPage} />
      <Route exact path="/commsworth/portfolio" render={(props) => <Portfolio {...props} />} />
      <Route exact path="/commsworth/services" render={(props) => <About {...props} />} />
      <Route exact path="/commsworth/explore1" render={(props) => <Contact title1="DevOps & Analytics" content1="We are focused on developing data-oriented <br/>
                        applications tailored to solve a vast array of business <br/>
                        requiremenents while giving intuitive insights for <br/>
                        informed business decision making" image1={big1} title2="Cyber Security" content2="We implement network security solutions designed to <br/>
                        dynamically adapt to the evolving IT infrasture in<br/>
                        order to defend its rapidly changing attack surface.<br/>
                         Primary focus is given to the edge of the network as every<br/>
                         packet must be certified as non-malicious before entry to the network " image2="" title3="Cyber Security" content3="We implement network security solutions designed to <br/>
                        dynamically adapt to the evolving IT infrasture in<br/>
                        order to defend its rapidly changing attack surface.<br/>
                         Primary focus is given to the edge of the network as every<br/>
                         packet must be certified as non-malicious before entry to the network " image3="" title4="App Development" content4="We implement network security solutions designed to <br/>
                         dynamically adapt to the evolving IT infrasture in<br/>
                         order to defend its rapidly changing attack surface.<br/>
                          Primary focus is given to the edge of the network as every<br/>
                          packet must be certified as non-malicious before entry to the network" image4=""  {...props} />} />
      <Route exact path="/commsworth/explore2" render={(props) => <Contact title1="Support" content1="We are focused on developing data-oriented <br/>
                        applications tailored to solve a vast array of business <br/>
                        requiremenents while giving intuitive insights for <br/>
                        informed business decision making" image1={big2} title2="Cyber Security" content2="We implement network security solutions designed to <br/>
                        dynamically adapt to the evolving IT infrasture in<br/>
                        order to defend its rapidly changing attack surface.<br/>
                         Primary focus is given to the edge of the network as every<br/>
                         packet must be certified as non-malicious before entry to the network " image2="" title3="Cyber Security" content3="We implement network security solutions designed to <br/>
                        dynamically adapt to the evolving IT infrasture in<br/>
                        order to defend its rapidly changing attack surface.<br/>
                         Primary focus is given to the edge of the network as every<br/>
                         packet must be certified as non-malicious before entry to the network " image3="" title4="App Development" content4="We implement network security solutions designed to <br/>
                         dynamically adapt to the evolving IT infrasture in<br/>
                         order to defend its rapidly changing attack surface.<br/>
                          Primary focus is given to the edge of the network as every<br/>
                          packet must be certified as non-malicious before entry to the network" image4=""  {...props} />} />
      <Route exact path="/commsworth/explore3" render={(props) => <Contact title1="Business Continuity" content1="We are focused on developing data-oriented <br/>
                        applications tailored to solve a vast array of business <br/>
                        requiremenents while giving intuitive insights for <br/>
                        informed business decision making" image1={big3} title2="Cyber Security" content2="We implement network security solutions designed to <br/>
                        dynamically adapt to the evolving IT infrasture in<br/>
                        order to defend its rapidly changing attack surface.<br/>
                         Primary focus is given to the edge of the network as every<br/>
                         packet must be certified as non-malicious before entry to the network " image2="" title3="Cyber Security" content3="We implement network security solutions designed to <br/>
                        dynamically adapt to the evolving IT infrasture in<br/>
                        order to defend its rapidly changing attack surface.<br/>
                         Primary focus is given to the edge of the network as every<br/>
                         packet must be certified as non-malicious before entry to the network " image3="" title4="App Development" content4="We implement network security solutions designed to <br/>
                         dynamically adapt to the evolving IT infrasture in<br/>
                         order to defend its rapidly changing attack surface.<br/>
                          Primary focus is given to the edge of the network as every<br/>
                          packet must be certified as non-malicious before entry to the network" image4=""  {...props} />} />
      <Route exact path="/commsworth/explore4" render={(props) => <Contact title1="Product & Digital" content1="We are focused on developing data-oriented <br/>
                        applications tailored to solve a vast array of business <br/>
                        requiremenents while giving intuitive insights for <br/>
                        informed business decision making" image1={big4} title2="Cyber Security" content2="We implement network security solutions designed to <br/>
                        dynamically adapt to the evolving IT infrasture in<br/>
                        order to defend its rapidly changing attack surface.<br/>
                         Primary focus is given to the edge of the network as every<br/>
                         packet must be certified as non-malicious before entry to the network " image2="" title3="Cyber Security" content3="We implement network security solutions designed to <br/>
                        dynamically adapt to the evolving IT infrasture in<br/>
                        order to defend its rapidly changing attack surface.<br/>
                         Primary focus is given to the edge of the network as every<br/>
                         packet must be certified as non-malicious before entry to the network " image3="" title4="App Development" content4="We implement network security solutions designed to <br/>
                         dynamically adapt to the evolving IT infrasture in<br/>
                         order to defend its rapidly changing attack surface.<br/>
                          Primary focus is given to the edge of the network as every<br/>
                          packet must be certified as non-malicious before entry to the network" image4=""  {...props} />} />
      <Route exact path="/commsworth/explore5" render={(props) => <Contact title1="Strategy" content1="We are focused on developing data-oriented <br/>
                        applications tailored to solve a vast array of business <br/>
                        requiremenents while giving intuitive insights for <br/>
                        informed business decision making" image1={big5} title2="Cyber Security" content2="We implement network security solutions designed to <br/>
                        dynamically adapt to the evolving IT infrasture in<br/>
                        order to defend its rapidly changing attack surface.<br/>
                         Primary focus is given to the edge of the network as every<br/>
                         packet must be certified as non-malicious before entry to the network " image2="" title3="Cyber Security" content3="We implement network security solutions designed to <br/>
                        dynamically adapt to the evolving IT infrasture in<br/>
                        order to defend its rapidly changing attack surface.<br/>
                         Primary focus is given to the edge of the network as every<br/>
                         packet must be certified as non-malicious before entry to the network " image3="" title4="App Development" content4="We implement network security solutions designed to <br/>
                         dynamically adapt to the evolving IT infrasture in<br/>
                         order to defend its rapidly changing attack surface.<br/>
                          Primary focus is given to the edge of the network as every<br/>
                          packet must be certified as non-malicious before entry to the network" image4=""  {...props} />} />
      </Switch>
      <Footer/>
    </div>
    );
}

export default App;