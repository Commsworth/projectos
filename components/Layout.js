import Head from 'next/head';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer'

const Layout = (props) => (
  <div className="container">
    <Head>
      <title>Commsworth</title>
<<<<<<< HEAD
    </Head>
    <Navbar />

    {props.children}
    
    <Footer />
=======
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" rel="stylesheet"></link>
    </Head>
    {/* <Navbar />
 */}
    {props.children}
{/*     
    <Footer /> */}
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
   

   
  </div>
);

export default Layout;