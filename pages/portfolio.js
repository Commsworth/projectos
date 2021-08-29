import Head from 'next/head';
import Heading from '../components/extraPageComponents/Heading';
import CardDiv from '../components/portfolioPageComponents/CardDiv';
import ArrowLink from '../components/extraPageComponents/ArrowLink';
import Socials from '../components/extraPageComponents/Socials';
import Prismic from 'prismic-javascript';
import { Client, PRISMIC_heading, PRISMIC_link, PRISMIC_link_text } from '../prismic-configuration';


export default function Portfolio({portfolio}) {
  const data = [
    {
      title:"Business Continuity Assessment Program (BCAP)",
      content:"Our Business Continuity assessment program is designed to prepare critical elements of your business to remain available in the event of an unplanned business disruption. This program takes into consideration, the most pertinent recovery objectives and availability metrics for all mission critical workloads within your business process while exposing an array of recovery options (on-premises and in cloud) to get your business back to operations within minutes of a disaster.",
      link:""
    },
    {
      title:"Project OS",
      content:"ProjectOS represents a suite of Project information and workflow management systems, designed for planning, budgeting, designing, monitoring, evaluation and tracking, of geographically distributed turnkey projects. The ProjectOS is pre-built with bespoke modules furnished with Project IQ to infuse actionable insights into the most critical elements and processes of your project lifecycle.",
      link:""
    },
    {
      title:"Credicity",
      content:"Credicity is a composable, intelligence driven credit automation ecosystem which rapidly unifies interdependent credit frameworks within a growing banking infrastructure. While untangling complex credit processes, Credicity empowers lenders to create modern customer experiences, allowing them to lead the competition while responding to business changes at the same instance.",
      link:""
    },
  ]
  return (
    <div className="landing-container">
      <Head>
        <title>Commsworth Portfolio Page</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      


      <main className="black-margin-top">
          <CardDiv
          title={portfolio.items[0].heading[0].text}
          // subtitle={}
          content={portfolio.items[0].text[0].text}
          link=""
          image={portfolio.items[0].image.url}
          />
          {portfolio.items.map((each, i)=>{
                if(portfolio.items.indexOf(each) > 0){ return(
          <CardDiv
          title={each.heading[0].text}
          subIcon="/portfolioPageImages/pngs/carddiv/semicircle.png"
          content={each.text[0].text}
          link={<ArrowLink sublink={""} text={each.link_text}/>}
          image={each.image.url}
          background="white"
          />
            )}
          })}
          <Socials/>
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

export async function getServerSideProps() {
  const portfolio = await Client().query(
    Prismic.Predicates.at("document.type", "portfolio")
  )

  // console.log(portfolio.results[0].data.body[0].items[0])

  return {
    props: {
      portfolio: portfolio.results[0].data.body[0]
    }
  }}
