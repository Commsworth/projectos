import React from 'react';
import './licensing.styles.scss';
import List from '../../components/list/list.component';
import { TickLicense } from '../../components/svgs/commsworth';
import Button from '../../components/button/button.component';
// const license = 


const inside = [[
    ["Create Projects", true, false],
    ["Unified Project Tracking", true, false],
    ["Project Archival ", true, false],
],
[
    ["Realtime Budget Disbursement ", true, false],
    ["Expenditure Reporting ", true, false],
    ["Budget Compliance  ", true, false],
],
[
    ["Milestone Manager ", true, false],
    ["Milestone Auto-weight algorithm", true, false],
    ["Milestone Timestamp", true, false],
],
[
    ["ProjectsOS Map-View", true, false],
    ["Project Geo-location services. ", true, false],
    ["Geo-Track GO (Mobile Tracking for Onsite Project Officers)", true, false],
],
[
    ["Contractor Indicator", true, false],
    ["Contractor Profiling", true, false],
    ["Contractor Milestone Compliance", true, false],
    ["Contractor Competency History", true, false],
],
[
    ["Data Import Service", true, false],
    ["Data Export Service", true, false],
],
[
    ["Standard Visualization Dashboard", true, false],
    ["Custom Insights Visualizations", true, false],
    ["Module Based Visualizations", true, false],
    ["Personalized Data Widgets", true, false],
    ["Predictive AI Recommendations (Preview)", true, false],
]
]
const groups = [["Budget Tracker",inside[1]],["Project Tracker",inside[0]],["Milestones",inside[2]],["Geo-Track",inside[3]],["Contract Manager",inside[4]],["Data I/O Service",inside[5]], ["Perfomance Insights",inside[6]]]




class Licensing extends React.Component {
    constructor() {
        super();

        this.state = {

        }
    }


    render() {
        return (
            <div className="licensing">
                <h1 className="">Plans that won't break</h1>
                <h1>the bank</h1>
                {/* shadow-2 class below is a tachyons class for shadowns */}
                <div className="shadow-2 list">
                    <table>
                        <thead>
                            {/* <br/>
                        <br/> */}
                            {/* <br/> */}
                            {/* <br/> */}
                            <tr>
                                <th style={{ borderBottom: "1px solid" }}> </th>
                                <th style={{ borderBottom: "1px solid" }}>Features</th>
                                {/* <th style={{ borderBottom: "1px solid" }}> </th>
                                <th style={{ borderBottom: "1px solid" }}> </th>
                            </tr>
                            <tr>
                                <th style={{ borderBottom: "1px solid" }}> </th>
                                <th style={{ borderBottom: "1px solid" }}> </th> */}
                                <th style={{ borderBottom: "1px solid" }}>Standard</th>
                                <th style={{ borderBottom: "1px solid" }}>Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                groups.map(group=>(
                                    <List title={<h4>{group[0]}</h4>} content={
                                    group[1].map((ins1) =>(
                                        <List title={ins1[0]}
                                         normal={<TickLicense />} premium={<TickLicense />} className="grey cursor" />
                                            // ins1.map(ins2=>(
                                            // ))
                                            )
                                            )}
                                        collapsible={true} color=""/>
                                ))
                            }
                        </tbody>
                        <tfoot>
                            <List title="" normal={<Button text="Try Standard" color="white" />} premium={<Button text="Try Premium" color="blue" />} />
                        </tfoot>
                    </table>

                </div>

                <div className="add-on">
                    <h1>Add-on Licensing</h1>
                    <small><p>Get even more control of projectOS with add-on licensing</p></small>
                </div>

                <div className="card-grid">
                    {/* Classes below are tachyons classes */}
                    <div className="licensing-card">
                        <div className="licensing-card-title">
                            <h2>Developer License</h2>
                        </div>
                        {/* <hr /> */}
                        {/* Classes below except 'tick-grid' are tachyons classes */}
                        <div className="tick-grid">
                            <div>
                                <TickLicense />
                            </div>
                            <div>
                                <p>Use Rights to develop your own ProjectOS code</p>
                            </div>
                        </div>
                        <br />
                        <div className="tick-grid">
                            <div>
                                <TickLicense />
                            </div>
                            <div>
                                <p>Use Rights to develop your own ProjectOS code</p>
                            </div>
                        </div>
                        <br />
                        <div className="tick-grid">
                            <div>
                                <TickLicense />
                            </div>
                            <div>
                                <p>Use Rights to develop your own ProjectOS code</p>
                            </div>
                        </div>

                        <div>
                            {/* All classes except 'card-button' and 'learn-more' are tachyons classes */}
                            <h1><button className="card-button">Contact Us</button></h1>
                            <a href="#"><p className="learn-more">Learn more</p></a>
                        </div>
                    </div>

                    <div className="licensing-card">
                        <div className="licensing-card-title">
                            <h2>ProjectOS Mobile</h2>
                        </div>
                        {/* <hr /> */}
                        <div className="tick-grid">
                            <div>
                                <TickLicense />
                            </div>
                            <div>
                                <p>Optimized for Onsite GPS project tracking</p>
                            </div>
                        </div>
                        <br />
                        <div className="tick-grid">
                            <div>
                                <TickLicense />
                            </div>
                            <div>
                                <p>Use Rights to develop your own ProjectOS code</p>
                            </div>
                        </div>
                        <br />
                        <div className="tick-grid">
                            <div>
                                <TickLicense />
                            </div>
                            <div>
                                <p>Use Rights to develop your own ProjectOS code</p>
                            </div>
                        </div>

                        <div>
                            <h1><button className=" card-button">Contact Us</button></h1>
                            <a href="#"><p className="learn-more">Learn more</p></a>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>
            </div>

        )
    }
}

export default Licensing;