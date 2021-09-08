import React, { Component } from "react";
import Head from "next/head";
// import Socials from '../components/extraPageComponents/Socials'
// import ContactForm from '../components/offerResourcesComponents/ContactForm'
import Prismic from "prismic-javascript";
import {
  Client,
  PRISMIC_heading,
  PRISMIC_link,
  PRISMIC_link_text,
  PRISMIC_heading2,
  PRISMIC_icon,
  PRISMIC_text,
} from "../../prismic-configuration";
import { RichText } from "prismic-reactjs";
import { useRouter } from "next/router";
import ContactForm from "../../components/offerResourcesComponents/ContactForm";
import TitleDiv from "../../components/extraPageComponents/TitleDiv";

const Event = ({ event, contact }) => {
  const router = useRouter();
  // const { event } = router.query
  const [intro] = event;
  const [cards] = contact;
  let contactCards = cards.items.filter((item) => item.icon.url);
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="ct">
        <div className="contact-head">
          <div className="overlay">
            <div className="wrapper">
              <h1>{PRISMIC_heading(intro.primary)}</h1>
            </div>
          </div>
        </div>
      </div>

      <div style={{ paddingBottom: 200, background: "white" }}>
        <div className="wrapper">
          <div>
            <TitleDiv color="black" position="left" top="Upcoming Event"/>
            <h1>{PRISMIC_heading(intro.primary)}</h1>
            <h1>{PRISMIC_heading2(intro.primary)}</h1>
            <RichText render={intro.primary.text} />
          </div>
          <div className="button_flx">
            <ContactForm isContact={true} />
            <div className="event_flx">
              {contactCards.map((item) => {
                return (
                  <div className="contacts-ct">
                    <img src={PRISMIC_icon(item)} alt="" />
                    <h1>{[PRISMIC_heading(item)]}</h1>
                    <p>{PRISMIC_text(item)}</p>
                    <a href={PRISMIC_link(item)}>{PRISMIC_link_text(item)}</a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <Socials/> */}
      <style jsx>{`
        .event_flx {
          display: flex;
          justify-content: space-between;
          padding-top: 25px;
          flex-wrap: wrap;
          width:40%;
        }
        .button_flx{
          display: flex;
          justify-content: space-between;
          padding-top: 25px;
          flex-wrap: wrap;
          width:100%
        }
        .event_flx .contacts-ct {
          width: 200px;
          margin: 15px 0px;
        }
        .event_flx img {
          height: 50px;
        }
        .event_flx h1 {
          font-weight: bold;
          font-size: 24px !important;
        }
        .event_flx a {
          border-bottom: 1px solid;
          color: #0e82f8;
        }
        .wrapper {
          width: 80%;
          margin: 0px auto;
          display: flex;
          flex-wrap:wrap
        }
        .wrapper .ct1 {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 1000px !important;
          padding-top: 20px;
          margin: 0 auto;
        }
        .wrapper .pad {
          align-self: start;
          justify-content: end;
          width: 50%;
          color: white;
        }
        .wrapper .pad h1 {
          color: black;
          line-height: 1;
          font-family: Nunito;
          font-style: normal;
          font-weight: bold;
          font-size: 34px;
        }
        .wrapper .pad p {
          color: black;
          line-height: 30px;
          padding-right: 34px;
          margin-top: 14px !important;
        }
        .ct {
          width: 100% !important;
          /* contact section */
        }
        .ct .contact-head {
          margin: 0px;
          font-weight: 900;
          font-size: 48px;
          color: white;
          background: #242525;
          background-image: url(/static/ct-bkg.png) !important;
          height: 316px;
        }
        .ct .overlay {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: start;
          align-items: center;
          height: 100%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.8);
          z-index: 3;
          cursor: pointer;
        }
        .ct .overlay h1 {
          width: 1000px !important;
          font-size: 48px;
          margin: 0px auto;
        }
        .ct .pad2 {
          width: 50%;
        }
        .ct .pad2 h1 {
          color: black;
          line-height: 5px;
          font-family: Nunito;
          font-style: normal;
          font-weight: bold;
          font-size: 34px;
        }
        @media only screen and (max-width: 1000px) and (min-width: 700px) {
          .event_flx {
            flex-wrap: wrap;
          min-width: 320px;
          }
        @media only screen and (max-width: 700px) {
          .wrapper .ct1 {
            flex-direction: column;
          }
        }
        @media only screen and (max-width: 400px) {
          .event_flx {
            flex-direction: column;
          min-width: 320px;
          }
        }
        @media only screen and (max-width: 1400px) {
          .wrapper {
            width: 80% !important;
          }
          .wrapper .ct1 {
            width: 100% !important;
          }
          .ct {
            width: 100% !important;
          }
          .ct .overlay h1 {
            width: 100% !important;
          }
        }
        @media only screen and (max-width: 800px) {
          .wrapper {
            width: 80%;
          }
          .wrapper .ct1 {
            width: 100% !important;
          }
          .wrapper .pad {
            width: 100%;
          }
          .ct {
            width: 100% !important;
            /* contact section */
          }
          .ct .overlay h1 {
            width: 100% !important;
            font-size: 48px;
            margin: 0px auto;
          }
          .ct .overlay .pad2 {
            width: 100%;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Event;

export async function getServerSideProps({ query }) {
  const event = await Client().query(
    Prismic.Predicates.at("my.event.uid", query.title)
  );
  // console.log(event.results[0].data.body)
  const contact = await Client().query(
    Prismic.Predicates.at("document.type", "contact")
  );

  // console.log(contact.results[0].data.body);
  // console.log(event.results[0].data.body);
  if (event.results[0]?.data.body) {
    return {
      props: {
        event: event.results[0]?.data.body || [],
        contact: contact.results[0]?.data.body || [],
      },
    };
  } else {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}
