import Nav from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import '../public/css/global.css'

export default function MyApp({ Component, pageProps }) {
    return(
      <div className="main-container">
        <Nav/>
        <Component {...pageProps} />
        <Footer/>
      </div>
      )
  }