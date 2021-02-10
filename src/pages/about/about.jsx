import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Heading from '../../components/extraPageComponents/heading/heading';
import Button from '../../components/extraPageComponents/Button/button';
import './about.scss';
import AboutCard from '../../components/aboutPageComponents/aboutCard/aboutCard';
import FeatureHeading from '../../components/extraPageComponents/featureHeading/featureHeading';
import Screen from '../../components/landingPageComponents/screen/screen';
import AboutScreenCard from '../../components/aboutPageComponents/aboutScreenCard/aboutScreenCard';
import img1 from '../../components/aboutPageComponents/images/img1.svg';
import img2 from '../../components/aboutPageComponents/images/img2.svg';
import img3 from '../../components/aboutPageComponents/images/img3.svg';
import img4 from '../../components/aboutPageComponents/images/img4.svg';
import img5 from '../../components/aboutPageComponents/images/img5.svg';
import { navbarColoursAction } from '../../redux/app/app.actions';

const About = ({ navbarColours, navbarColoursDispatch }) => {
    useEffect(()=>{
        if(navbarColours !== "primary"){
            navbarColoursDispatch("primary")
        }
    })
    return (
        <div className="about">
            <Heading fontSize="36px" heading="Traditional Project Management can’t endure"/>
            <Button text="Request Demo" width="210px" height="60px" fontSize="14px"/>
            <section className="about-cards">
                <AboutCard image={img1} title="Budget Tracking" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque accumsan, adipiscing consectetur netus tristique. Gravida elementum."/>
                <AboutCard image={img2} title="Project Tracking" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque accumsan, adipiscing consectetur netus tristique. Gravida elementum."/>
                <AboutCard image={img3} title="Geo-tracking" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque accumsan, adipiscing consectetur netus tristique. Gravida elementum."/>
                <AboutCard image={img4} title="Contract Manager" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque accumsan, adipiscing consectetur netus tristique. Gravida elementum."/>
                <AboutCard image={img5} title="Performance Insights" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque accumsan, adipiscing consectetur netus tristique. Gravida elementum."/>
            </section>
            <section className="about-bottom">
            <FeatureHeading heading="How it Works" fontSize="18px"/>
            <Heading heading="Use ProjectOS without stress"/>
            <section className="screen-section">
                <Screen/>
                <section className="screen-section-cards">
                    <AboutScreenCard title="1. Unified Project Tracking" content="The project management system unifies every aspect required to execute projects into one single glass pane."/>
                    <AboutScreenCard title="2. Unified Project Tracking" content="The project management system unifies every aspect required to execute projects into one single glass pane."/>
                    <AboutScreenCard title="3. Unified Project Tracking" content="The project management system unifies every aspect required to execute projects into one single glass pane."/>
                </section>
            </section>
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

export default connect(mapStateToProps,mapDispatchToProps) (About);