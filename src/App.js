// import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/extraPageComponents/footer/footer';
import Navbar from './components/extraPageComponents/navbar/navbar';
import Social from './components/extraPageComponents/socials/social';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import FAQ from './pages/faq/faq';
import Landing from './pages/landing/landing';
import Licensing from './pages/licensing/licensing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="top">
          <Navbar />
        </section>
        <section className="middle">
          <Switch>
          <Route component={Landing} exact path="/"/>
          <Route component={Licensing} exact path="/licensing"/>
          <Route component={Contact} exact path="/contact"/>
          <Route component={FAQ} exact path="/faq"/>
          <Route component={About} exact path="/about"/>
          {/* <Landing/>
          <Licensing />
          <Contact/>
          <FAQ/>
          <About/> */}
          </Switch>
        </section>
        <section className="bottom">
          <Social />
          <Footer />
        </section>
      </header>
    </div>
  );
}

export default App;
