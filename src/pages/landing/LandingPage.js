import React, { Fragment } from 'react';
import Hero from '../../component/header/hero/Hero';
import './LandingPage.css';
import About from '../../component/main/about/About';
import Solution from '../../component/main/solution/Solution';
import Partner from '../../component/main/partner/Partner';
import Footer from '../../component/footer/Footer';

const LandingPage = ()=>{

    return(
<Fragment>
     <Hero />
     <main>
     <About />
     <Solution />
     <Partner />
     <Footer />
     </main>
</Fragment>
    )
}
export default LandingPage;