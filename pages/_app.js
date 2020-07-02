import '../components/extra/card/card.styles.scss'
import '../public/css/global.css'
import Nav from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import {Fragment} from 'react'

export default function MyApp({ Component, pageProps }) {
    return(
      <Fragment>
        <Nav/>
        <Component {...pageProps} />
        <Footer/>
      </Fragment>
      )
  }