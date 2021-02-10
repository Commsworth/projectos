import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '../../components/extraPageComponents/Button/button';
import Heading from '../../components/extraPageComponents/heading/heading';
import LicensingBlockRow from '../../components/licensingPageComponents/licensingBlockRow/licensingBlockRow';
import LicensingFeatureCard from '../../components/licensingPageComponents/licensingFeatureCard/licensingFeatureCard';
import { navbarColoursAction } from '../../redux/app/app.actions';
import './licensing.scss';

const Licensing = ({ navbarColours, navbarColoursDispatch }) => {
    let arrayDB = [
        { text: "Budget Tracker", option1: "tick", option2: "tick" },
        { text: "Project tracker", option1: "tick", option2: "tick" },
        { text: "Milestone manager", option1: "tick", option2: "tick" },
        { text: "Geotracking", option1: "tick", option2: "tick" },
        { text: "Milestone manager", option1: "tick", option2: "tick" },
        { text: "Geotracking", option1: "tick", option2: "tick" },
        { text: "Data I/O service", option1: "", option2: "tick" },
        { text: "Performance Insights", option1: "", option2: "tick" },
        { text: "Contractor Manager", option1: "", option2: "tick" },
        { text: "Geo-track mobile", option1: "", option2: "tick" },
        { text: "KPI Manager license", option1: "", option2: "tick" },
    ];
    let points = [
        "Use Rights to develop your own ProjectOS code",
        "Use Rights to develop your own ProjectOS code",
        "Use Rights to develop your own ProjectOS code"
    ];
    let points1 = [
        "Optimized for Onsite GPS project tracking",
        "Use Rights to develop your own ProjectOS code",
        "Use Rights to develop your own ProjectOS code"
    ];
    useEffect(()=>{
        if(navbarColours === "primary"){
            navbarColoursDispatch("secondary")
        }
    })
    return (
        <div className="licensing">
            <section className="licensing-heading">
                <Heading heading="Plans that wont break the bank" color="#1B1B1B" />
            </section>
            <section className="block">
                <section className="block-heading">
                    <h3>Standard</h3>
                    <h3>Premium</h3>
                </section>
                <section className="block-subheading">
                    <h3>Features</h3>
                </section>
                {arrayDB.map(each => {
                    if (arrayDB.indexOf(each) % 2 !== 0) {
                        return <LicensingBlockRow key={arrayDB.indexOf(each)} text={each.text} option1={each.option1} option2={each.option2} background="#F4F4F4" />
                    }
                    return <LicensingBlockRow key={arrayDB.indexOf(each)} text={each.text} option1={each.option1} option2={each.option2} />
                })}
                <section className="block-heading">
                    <Button text="Try Standard" width="249px" height="67px" secondary />
                    <Button text="Try Premium" width="249px" height="67px" />
                </section>
            </section>
            <Heading heading="Add-on Licensing" subheading="Get even more control of projectOS with add-on licensing" />
            <section className="feature-cards">
                <LicensingFeatureCard points={points} title="Developer License" />
                <LicensingFeatureCard points={points1} title="ProjectOS Mobile" />
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

export default connect(mapStateToProps,mapDispatchToProps)(Licensing);