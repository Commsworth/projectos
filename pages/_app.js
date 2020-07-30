// import Nav from '../components/navbar/Navbar';
// import Footer from '../components/footer/Footer';
import '../public/css/global.css'

export default function MyApp({ Component, pageProps }) {
    return(
      <div className="main-container">
        {/* <Nav/> */}
        <Head>
        <title>Commsworth</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet"></link>
      </Head>
        <Component {...pageProps} />
        {/* <Footer/> */}
      </div>
      )
  }