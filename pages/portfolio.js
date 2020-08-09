import Head from 'next/head';
import Heading from '../components/extraPageComponents/Heading';
import CardDiv from '../components/portfolioPageComponents/CardDiv';
import ArrowLink from '../components/extraPageComponents/ArrowLink';
import Socials from '../components/extraPageComponents/Socials';

export default function Portfolio() {
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
          title="We build"
          subtitle="digital products"
          content="We are focused on developing data-oriented applications tailored to solve a vast array of business requirements."
          link=""
          image="/portfolioPageImages/pngs/imagecard/SIWP.png"
          />
          {data.map(each=>{
            return(
          <CardDiv
          title={each.title}
          subIcon="/portfolioPageImages/pngs/carddiv/semicircle.png"
          content={each.content}
          link={<ArrowLink sublink={each.link} text="Visit Web App"/>}
          image="/portfolioPageImages/pngs/imagecard/SIWP.png"
          background="white"
          />
            )
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
