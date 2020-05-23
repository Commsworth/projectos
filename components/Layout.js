import Head from 'next/head';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer'

const Layout = (props) => (
  <div className="container">
    <Head>
      <title>Commsworth</title>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" rel="stylesheet"></link>
    </Head>
    {/* <Navbar />
 */}
    {props.children}
{/*     
    <Footer /> */}
   

   
  </div>
);

export default Layout;