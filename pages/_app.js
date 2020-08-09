// import Nav from '../components/navbar/Navbar';
// import Footer from '../components/footer/Footer';
import '../public/css/global.css'
import Head from 'next/head'
import Navbar from '../components/extraPageComponents/Navbar'
import Footer from '../components/extraPageComponents/Footer'

export default function MyApp({ Component, pageProps }) {
    return(
      <div className="main-container">
        {/* <Nav/> */}
        <Head>
        <title>Commsworth</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet"></link>
      </Head>

      <Navbar/>
        <div>
        <Component {...pageProps} />
        </div>
        <Footer/>

        <style jsx>
            {`
            @import url('https://fonts.googleapis.com/css2?family=Muli:wght@400;600;700&display=swap');
            .main-container{
              min-height: 100vh;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              overflow-x: hidden;
            }
            h1,h2,h3,h4,h5,h6{
              font-family: 'Nunito', 'serif';
            }
            p{
              font-family: 'Muli', 'serif';
            }
            `}
        </style>
      </div>
      )
  }