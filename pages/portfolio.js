import React, { Component } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import '../scss/portfolio.scss';
import PortfolioDiv2 from '../components/portfolioPageComponents/portfolioDiv2/portfoliodiv';
import PortfolioDesc from '../components/portfolioPageComponents/portfolioDesc/portfolioDesc';
import Top from '../components/portfolioPageComponents/portfolio/top/top';
import Div4 from '../components/div4/div4'
const LoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo nibh orci, id diam consequat orci, ut enim non. Feugiat amet vitae tortor at in mauris. Consectetur in volutpat dictum ultrices. Quisque sit purus sit elementum velit."

class Portfolio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (


           
                <Layout>
                    <Head>
                        <meta   name="viewport"
      content="width=device-width, initial-scale=1, user-scalable=no"
    />
                    </Head>
                <div className="portfolio text-center">
                    <h3 className="h3"> We build <br /> digital product </h3>
                    <span className="line2"></span>
                    <div className="center-div">
                        <Top />
                    </div>
                    <div className="top">
                        <img src="/static/scroll.svg" style={{cursor: "pointer"}} alt="" onClick={()=>window.scrollTo(0,650)}/>
                    </div>
                    <div>

                        <PortfolioDiv2
                            one={<PortfolioDesc
                                title="siwp.ng"
                                subTitle="Building the SIWP web application"
                                info={LoremIpsum}
                                link="Visit Website →"
                            />}
                            two={<PortfolioDesc
                                title="siwp.ng"
                                subTitle="Building the SIWP web application"
                                info={LoremIpsum}
                                link="Visit Website →"
                            />}
                            three={<PortfolioDesc
                                title="siwp.ng"
                                subTitle="Building the SIWP web application"
                                info={LoremIpsum}
                                link="Visit Website →"
                            />}
                            four={<PortfolioDesc
                                title="siwp.ng"
                                subTitle="Building the SIWP web application"
                                info={LoremIpsum}
                                link="Visit Website →"
                            />}
                            five={<PortfolioDesc
                                title="siwp.ng"
                                subTitle="Building the SIWP web application"
                                info={LoremIpsum}
                                link="Visit Website →"
                            />}
                            six={<PortfolioDesc
                                title="siwp.ng"
                                subTitle="Building the SIWP web application"
                                info={LoremIpsum}
                                link="Visit Website →"
                            />}
                        />
                    </div>
                </div>
                 <Div4
                    Logo={null}
                    about="What our clients think about us"
                    mission='"Commsworth deliver value and helped grow microsoft in Nigeria, working with them has been a revelation"'
                    name="JAMES BOND"
                    position="MD, Microsoft Nigeria"
                />
            </Layout>
            )
    }
}

export default Portfolio;
