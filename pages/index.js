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
import BlueButton from '../components/extraPageComponents/BlueButton';
import Map from '../components/landingPageComponents/Map';
import WorkWith from '../components/landingPageComponents/WorkWith';
import Navbar from '../components/extraPageComponents/Navbar';
import Socials from '../components/extraPageComponents/Socials';
import Prismic from 'prismic-javascript';
import { Client, PRISMIC_heading, PRISMIC_link, PRISMIC_link_text } from '../prismic-configuration';

export default function Home({ landing }) {
  console.log(landing[6], "landing")
  const [
    header,
    carousel,
    partners,
    about,
    services,
    academy,
    trusted,
    clients
  ] = landing;
  return (
    <div className="landing-container">
      <Head>
        <title>Commsworth || Home </title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="black-margin-top">
        <Heading text={header.primary.heading[0]?.text || ""} />
        <BlueButton text={header.primary.link_text || ""} href={header.primary.link?.url || ""} />
        <Map />
        <TitleDiv top={carousel.primary.heading[0]?.text || ""} bottom={carousel.primary.heading2[0]?.text || ""} />
        <CarouselDiv options={carousel.items} />
        <TechPart images={partners.items} />
        <TitleDiv top={about.primary.heading[0]?.text || ""} bottom="" />
        <AboutUs cards={about.items} />
        <WorkWith href={PRISMIC_link(about.primary)} text={PRISMIC_link_text(about.primary)} />
        <TitleDiv top={PRISMIC_heading(about.primary)} bottom="" />
        <OurServices cards={services.items} />
        <TheAcademy primary={academy.primary} cards={academy.items} />
        <TrustedBy primary={trusted.primary} images={trusted.items} />
        <WhatOurClientsThink  primary={clients.primary} items={clients.items}/>
        <Socials icons="white" />
      </main>

      <style jsx>{`
        .landing-container{
          //background: #111517;
          background: #111517;
          //min-height: 100vh;
        }
      `}</style>
    </div>
  )
}

export async function getServerSideProps() {
  const landing = await Client().query(
    Prismic.Predicates.at("document.type", "landing")
  )

  console.log(landing.results[0].data.body);

  return {
    props: {
      landing: landing.results[0].data.body
    }
  }
}
