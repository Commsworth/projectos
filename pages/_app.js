import '../components/extra/card/card.styles.scss';
import Nav from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import {Fragment} from 'react';
import '../public/css/global.css'

export default function MyApp({ Component, pageProps }) {
    return(
      <Fragment>
        <Nav/>
        <Component {...pageProps} />
        <Footer/>
      </Fragment>
      )
  }