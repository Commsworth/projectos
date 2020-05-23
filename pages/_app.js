import '../components/extra/card/card.styles.scss';
<<<<<<< HEAD

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
=======
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
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
  }