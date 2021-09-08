import React, { useState } from "react";
import Link from "next/link";
import Prismic from "prismic-javascript";
import Card from '../components/extraPageComponents/Card'
import ArrowLink from '../components/extraPageComponents/ArrowLink';
import CarouselExpList from '../components/servicesSubpageComponent/CarouselExp/CarouselExpList'
import CardOfferList from '../components/servicesSubpageComponent/CarouselOffer/CardOffer/CardOfferList'
import {events} from '../components/servicesSubpageComponent/CarouselOffer/events'
import { FaBars } from 'react-icons/fa'
import Dropdownn from '../components/servicesSubpageComponent/Dropdown'
import {
  Client,
  PRISMIC_heading,
  PRISMIC_title,
  PRISMIC_image,
  PRISMIC_text,
  PRISMIC_text2
} from "../prismic-configuration";

const Subpage = ({ subpage, carousel, tabs, offers }) => {
  const [tab, setTab] = useState(0);
  return (
    <div style={{width: '100%'}} className="main">
              <div className="box  dark-bg">
                    <div className='tp-wrapper'>
                    <Dropdownn active="Devops and Analytics" id='select' />
                <div className="tp">
                    <div className="tp1">
                        <Card title={PRISMIC_heading(subpage.primary)} 
                        subIcon='/static/svg/semi-circle.svg' 
                        content= {PRISMIC_text(subpage.primary)}
                          link={<ArrowLink text="Learn More" />}
                          content2={PRISMIC_text2(subpage.primary)} />
                    </div>
                    <div className="tp2">
                        <img src={PRISMIC_image(subpage.primary)} />
                    </div>
                    </div>
                </div>
                </div>

      <ul className="topnav" id="myTopnav">
      {tabs.map((item) => {
        return (
        <li onClick={() => setTab(item.id)}>{item.title}</li>
      )
      })}
      </ul>
      <CarouselExpList items={carousel[tab].items} />
      <div style={{border:'1px solid #C0C0C0', margin: '60px 0px'}}></div>
                    
                    <div>
                     <ul className="offer-options">
                         <li className={"offer-options-style"}>Offers</li>
                         <li className={"offer-options-style"}>Resources</li>
                     </ul>

              
                        
                 <div className="offer-grid">
                <Card title={PRISMIC_heading(offers[0].primary)} subIcon='/static/svg/semi-circle.svg' content={PRISMIC_text(offers[0].primary)}/>
                                  
                <CardOfferList events= {events} offers={offers[0].items} />                
                </div>
                </div>
    </div>
  );
};

export default Subpage;

export async function getServerSideProps(context) {
  const { id } = context.query;

  let subpage = await Client().query(
    Prismic.Predicates.at("document.id", `${id}`)
  );

  let carousel = subpage.results[0].data.body.filter(
    (item) => item.slice_type === "carousel"
  );
  let offers = subpage.results[0].data.body.filter(
    (item) => item.slice_type === "offers"
  );
  let tabs = carousel.map((item, index) => {
    return { title: PRISMIC_title(item.primary), id: index };
  });

  // let body = post.results[0].data;
  // console.log(offertabs);

  return {
    props: {
      subpage: subpage.results[0].data.body[0],
      carousel: carousel,
      tabs,
      offers
    },
  };
}
