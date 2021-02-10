import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Heading from '../../components/extraPageComponents/heading/heading';
import Demo from '../../components/landingPageComponents/demo/demo';
import Features from '../../components/landingPageComponents/features/features';
import HeadingButtons from '../../components/landingPageComponents/headingButtons/headingButtons';
import Screen from '../../components/landingPageComponents/screen/screen';
import TechnicalPartners from '../../components/landingPageComponents/technicalPartners/technicalPartners';
import { navbarColoursAction } from '../../redux/app/app.actions';
import './landing.scss';

const Landing = ({ navbarColours, navbarColoursDispatch }) => {
    useEffect(()=>{
        if(navbarColours !== "primary"){
            navbarColoursDispatch('primary')
        }
    })
    return (
        <div className="landing">
            <section className="landing-black">
            <Heading heading="Let’s help you build" subheading="Redefine your Project Management lifecycle with ProjectOS Enterprise-Class Project Management Platform"/>
            <HeadingButtons/>
            <Screen/>
            </section>
            <section className="landing-white pc-only">
            <TechnicalPartners/>
            <Features/>
            <Heading heading="Ready to be amazed?. Schedule a Demo" fontSize="32px" color="#1B1B1B" />
            <Demo/>
            <small>Don't worry, we will only send messages concerning the product launch.</small>
            </section>
        </div>
    );
};

const mapStateToProps = state => ({
    navbarColours: state.app.navbarColours
})

const mapDispatchToProps = dispatch => ({
    navbarColoursDispatch: navbarColour=>(dispatch(navbarColoursAction(navbarColour)))
})

export default connect(mapStateToProps,mapDispatchToProps) (Landing);