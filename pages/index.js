import Head from 'next/head';
import Heading from '../components/extraPageComponents/Heading'
import TitleDiv from '../components/extraPageComponents/TitleDiv';
import CarouselDiv from '../components/landingPageComponents/CarouselDiv';
import ArrowLink from '../components/extraPageComponents/ArrowLink';
import AboutUs from '../components/landingPageComponents/AboutUs';
import OurServices from '../components/landingPageComponents/OurServices';
import TheAcademy from '../components/landingPageComponents/TheAcademy';
import WhatOurClientsThink from '../components/landingPageComponents/WhatOurClientsThink';
import TrustedBy from '../components/landingPageComponents/TrustedBy';
import TechPart from '../components/landingPageComponents/TechPart';

export default function Home() {
  return (
    <div className="landing-container">
      <Head>
        <title>Commsworth</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <Heading text="Heading"/>
        {/* <BlueButton/> */}
        {/* <Map/> */}
        <TitleDiv top="" bottom=""/>
        <CarouselDiv/>
        <TechPart/>
        <TitleDiv top="About Us" bottom=""/>
        <AboutUs/>
        <ArrowLink text="Work with us"/>
        <TitleDiv top="Our Services" bottom=""/>
        <OurServices/>
        <TheAcademy/>
        <TrustedBy/>
        <WhatOurClientsThink/>
      </main>

      <style jsx>{`
        .landing-container{
          background: #111517;
          min-height: 100vh;
        }
      `}</style>
    </div>
  )
}
