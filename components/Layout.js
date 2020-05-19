import Head from 'next/head';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer'

const Layout = (props) => (
  <div className="container">
    <Head>
      <title>Commsworth</title>
    </Head>
    <Navbar />

    {props.children}
    
    <Footer />
   

   
  </div>
);

export default Layout;