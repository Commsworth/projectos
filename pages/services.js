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
        <div className="black-margin-top services-main-div">
        <Heading text="Digital Solutions to accelerate your business."/>
        <TitleDiv bottom="Digital Solutions tailored for your business"/>
        <BlueButton text="Learn More" href="/services"/>
        </div>
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
        .services-main-div{
          background: linear-gradient(29.74deg, #111517 0.11%, rgba(17, 21, 23, 0.89) 20.95%, rgba(17, 21, 23, 0.78) 103.14%, rgba(17, 21, 23, 0) 78.53%),url('/servicesPageImages/pngs/servicesbackground.png');
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        :global(.heading){
          margin: 0px !important;
        }
        :global(.title-div img){
          display: none;
        }
        :global(.title-div-main){
          margin: 0px auto 25px !important;
        }
        :global(.blue-button){
          padding-bottom: 232px;
        }
        .offer{
            font-size: 30px;
            line-height: 126.5%;
            text-align: center;
            color: #f4f4f4 !important;
            margin: 57px auto;
            }
      `}</style>
    </div>
  )
}
