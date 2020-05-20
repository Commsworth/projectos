import '../components/extra/card/card.styles.scss';
import Nav from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

export default function MyApp({ Component, pageProps }) {
    return(
      <div>
        <Nav/>
        <Component {...pageProps} />
        <Footer/>
      </div>
      )
  }