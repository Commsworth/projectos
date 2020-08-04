import Head from 'next/head';
import Heading from '../components/extraPageComponents/Heading';
import CardDiv from '../components/portfolioPageComponents/CardDiv';
import ArrowLink from '../components/extraPageComponents/ArrowLink';

export default function Services() {
  return (
    <div className="landing-container">
      <Head>
        <title>Commsworth Portfolio Page</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>


      <main>
          <CardDiv
          title="We build"
          subtitle="digital products"
          content="We are focused on developing data-oriented applications tailored to solve a vast array of business requirements."
          link=""
          image="/portfolioPageImages/pngs/imagecard/SIWP.png"
          />
          <CardDiv
          title="SIWP"
          subIcon="/portfolioPageImages/pngs/carddiv/semicircle.png"
          content="We implement network security solutions designed to dynamically adapt to the evolving IT Infrastructure in order to defend its rapidly changing attack surface. Primary focus is given to the edge of the network as every packet must be certified as non-malicious before entry to the network. "
          link={<ArrowLink text="Visit Web App"/>}
          image="/portfolioPageImages/pngs/imagecard/SIWP.png"
          background="white"
          />
          <CardDiv
          title="SIWP"
          subIcon="/portfolioPageImages/pngs/carddiv/semicircle.png"
          content="We implement network security solutions designed to dynamically adapt to the evolving IT Infrastructure in order to defend its rapidly changing attack surface. Primary focus is given to the edge of the network as every packet must be certified as non-malicious before entry to the network. "
          link={<ArrowLink text="Visit Web App"/>}
          image="/portfolioPageImages/pngs/imagecard/SIWP.png"
          background="white"
          reverse
          />
          <CardDiv
          title="SIWP"
          subIcon="/portfolioPageImages/pngs/carddiv/semicircle.png"
          content="We implement network security solutions designed to dynamically adapt to the evolving IT Infrastructure in order to defend its rapidly changing attack surface. Primary focus is given to the edge of the network as every packet must be certified as non-malicious before entry to the network. "
          link={<ArrowLink text="Visit Web App"/>}
          image="/portfolioPageImages/pngs/imagecard/SIWP.png"
          background="white"
          />
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
