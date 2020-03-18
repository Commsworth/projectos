import React from 'react';
import './licensing.styles.scss';
import List from '../../components/list/list.component';
import { TickLicense } from '../../components/svgs/commsworth';
import Button from '../../components/button/button.component';
// const license = 



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
                        <br/>
                        {/* <br/> */}
                        <tr>
                            <th style={{borderBottom: "1px solid"}}> </th>
                            <th style={{borderBottom: "1px solid"}}>Standard</th>
                            <th style={{borderBottom: "1px solid"}}>Premium</th>
                        </tr>
                        {/* <br/> */}
                        <br/>
                        <tr>
                            <th style={{borderBottom: "1px solid"}}>Features</th>
                            <th style={{borderBottom: "1px solid"}}> </th>
                            <th style={{borderBottom: "1px solid"}}> </th>
                        </tr>
                        </thead>
                        <tbody>
                        <List title="Budget tracker" normal={<TickLicense />} premium={<TickLicense />} content="Lorem Ipsum" color="" />
                        <List title="Project tracker" normal={<TickLicense />} premium={<TickLicense />} content="Lorem Ipsum" color="grey" />
                        <List title="Milestone manager" normal={<TickLicense />} premium={<TickLicense />} content="Lorem Ipsum" color="" />
                        <List title="Geotracking" normal={<TickLicense />} premium={<TickLicense />} content="Lorem Ipsum" color="grey" />
                        <List title="Milestone manager" normal={<TickLicense />} premium={<TickLicense />} content="Lorem Ipsum" color="" />
                        <List title="Geotracking" normal={<TickLicense />} premium={<TickLicense />} content="Lorem Ipsum" color="grey" />
                        <List title="Data I/O service" normal={<TickLicense />} premium={<TickLicense />} content="Lorem Ipsum" color="" />
                        <List title="Performance Insights" normal={<TickLicense />} premium={<TickLicense />} content="Lorem Ipsum" color="grey" />
                        <List title="Contractor Manager" normal={<TickLicense />} premium={<TickLicense />} content="Lorem Ipsum" color="" />
                        <List title="Geo-track mobile" normal={<TickLicense />} premium={<TickLicense />} content="Lorem Ipsum" color="grey" />
                        <List title="KPI Manager license" normal={<TickLicense />} premium={<TickLicense />} content="Lorem Ipsum" color="" />
                        <List title="" normal={<Button text="Try Standard" color="white" />} premium={<Button text="Try Premium" color="blue" />} content="Lorem Ipsum" color="" />
                        </tbody>
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