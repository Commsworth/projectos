import Head from 'next/head';
import Heading from '../components/extraPageComponents/Heading'
import TitleDiv from '../components/extraPageComponents/TitleDiv';
import BlueButton from '../components/extraPageComponents/BlueButton';
import { useState } from 'react';
import ServicesWeOffer from '../components/servicesPageComponents/ServicesWeOffer';
import { WhyChooseUs } from '../components/servicesPageComponents/WhyChooseUs';
import Socials from '../components/extraPageComponents/Socials';

export default function Services() {
  return (
    <div className="landing-container">
      <Head>
        <title>Commsworth Services Page</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>


      <main>
        <Heading text="Digital Solutions to accelerate your business."/>
        <h3 className="offer">Services on Offer</h3>
        <ServicesWeOffer/>
        <WhyChooseUs/>
        <Socials/>
      </main>

      <style jsx>{`
        .landing-container{
            background: #111517;
            min-height: 100vh;
        }
        .offer{
            font-size: 40px;
            line-height: 126.5%;
            text-align: center;
            color: #f4f4f4 !important;
            }
      `}</style>
    </div>
  )
}
