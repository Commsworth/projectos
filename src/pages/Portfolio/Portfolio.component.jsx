import React from 'react';
import './Portfolio.styles.scss';
import PortfolioDiv2 from '../../component/portfolioPageComponents/portfolioDiv2/portfolioDiv2.component';
import PortfolioDesc from '../../component/portfolioPageComponents/portfolioDesc/portfolioDesc.component';
import Top from '../../component/portfolioPageComponents/portfolio/top/top';
import Div4 from '../../component/landingPageComponents/div4/div4.component';
import scroll from '../../asset/svg/scrollformore.svg'
// import { render } from '@testing-library/react';
import Nav from '../../component/extraPageComponents/header/navbar/Nav'

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

            <div>
                {/* <Nav/> */}
                <div className="portfolio text-center">
                    <h3 className="h3"> We build <br /> digital product </h3>
                    <span className="line2"></span>
                    <div className="center-div">
                        <Top />
                    </div>
                    <div className="top">
                        <img src={scroll} style={{cursor: "pointer"}} alt="" onClick={()=>window.scrollTo(0,650)}/>
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
            </div>)
    }
}

export default Portfolio;