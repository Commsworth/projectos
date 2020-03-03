import React from 'react';
import './about.styles.scss';
import Card from '../../components/card/card.component';
import { ScheduleADemo,BudgetTracking,ProjectTracking,GeoTracking,ContractManager,PerformanceInsights } from '../../components/svgs/commsworth';

class About extends React.Component{
    constructor(){
        super();

        // this.state = {
            
        // }
    }

    render(){
        return(
            <div className="about">
                <div className="about__heading-and-button">
                    <h1>Traditional Project Management can’t endure</h1>
                    <h1><button>Request Demo</button></h1>
                <br/>
                    <div className="about__3-cards">
                    <Card display={<div><BudgetTracking/><h3>Budget Tracking</h3><small><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque accumsan, adipiscing consectetur netus tristique. Gravida elementum.</p></small></div>} className="card-shadow"/>
                    <Card display={<div><ProjectTracking/><h3>Project Tracking</h3><small><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque accumsan, adipiscing consectetur netus tristique. Gravida elementum.</p></small></div>} className="card-shadow"/>
                    <Card display={<div><GeoTracking/><h3>Geo-tracking</h3><small><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque accumsan, adipiscing consectetur netus tristique. Gravida elementum.</p></small></div>} className="card-shadow"/>
                    </div>
                </div>
                <div className="about__card-div">
                    <div className="about__2-cards">
                    <Card display={<div><ContractManager/><h3>Contract Manager</h3><small><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque accumsan, adipiscing consectetur netus tristique. Gravida elementum.</p></small></div>} className="card-shadow"/>
                    <Card display={<div><PerformanceInsights/><h3>Performance Insights</h3><small><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque accumsan, adipiscing consectetur netus tristique. Gravida elementum.</p></small></div>} className="card-shadow"/>
                    </div>
                </div>

                <div className="about__info">
                    <h6>How it works</h6>
                    <h1>Use ProjectOS without stress</h1>
                </div>

                <div className="about__screen-and-features">
                    <div>

                    </div>
                    <div className="about__screen-and-features--button-grid">
                        <button>
                            <h1>1. Unified Project Tracking</h1>
                            <p>The project management system unifies every aspect required to execute projects into one single glass pane.</p>
                        </button>
                        <button>
                            <h1>2. Unified Project Tracking</h1>
                            <p>The project management system unifies every aspect required to execute projects into one single glass pane.</p>
                        </button>
                        <button>
                            <h1>3. Unified Project Tracking</h1>
                            <p>The project management system unifies every aspect required to execute projects into one single glass pane.</p>
                        </button>
                    </div>
                </div>

                <div className="about__link">
                    <p><ScheduleADemo/></p>
                </div>

            </div>
        )
    }
}

export default About;