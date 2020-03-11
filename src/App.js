//import React (and React.Component)
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//import pages
import Header from './components/header/header.component'
import LandingPage from './pages/landing-page/landing-page.component'
import Licensing from './pages/licensing/licensing.component';
import Contact from './pages/contact/contact.component';
import FAQ from './pages/faq/faq.component';
import About from './pages/about/about.component';
import Socials from './components/socials/socials.component';
import Footer from './components/footer/footer.component';


//import stylesheet
import './App.css';

//apollo client setup
// const client = new ApolloClient({
//   uri: 'http://localhost:4000/graphql'
// })


class App extends Component {
  constructor() {
    super();


    // this.state = {
    // }
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/projectos/" component={LandingPage} />
          <Route exact path="/projectos/licensing" render={(props) => <Licensing {...props} />} />
          <Route exact path="/projectos/contact" render={(props) => <Contact {...props} />} />
          <Route exact path="/projectos/faq" render={(props) => <FAQ {...props} />} />
          <Route exact path="/projectos/about" render={(props) => <About {...props} />} />
          {/* <Route exact path="/signup" render={(props) => <Register {...props} users={users} isSignedIn={this.state.isSignedIn} />} /> */}
        </Switch>
        <br />
        <br />
        <hr />
        <Socials />
        <div>
          <Footer />
        </div>

      </div>
    )
  }

}

export default App;
