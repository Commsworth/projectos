import React from 'react';
import './Portfolio.styles.scss';
import PortfolioDiv2 from '../../component/portfolioPageComponents/portfolioDiv2/portfolioDiv2.component';
import PortfolioDesc from '../../component/portfolioPageComponents/portfolioDesc/portfolioDesc.component';
import Top from '../../component/portfolioPageComponents/portfolio/top/top';
import Div4 from '../../component/landingPageComponents/div4/div4.component';
// import { render } from '@testing-library/react';

const LoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo nibh orci, id diam consequat orci, ut enim non. Feugiat amet vitae tortor at in mauris. Consectetur in volutpat dictum ultrices. Quisque sit purus sit elementum velit."

class Portfolio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        return (

            <div className="portfolio text-center">
                <h3 className="h3">We build <br /> digital products</h3>
                <Top />
                <PortfolioDiv2
                    one={<PortfolioDesc
                        title="siwp.ng"
                        subTitle="Building the SIWP web application"
                        info={LoremIpsum}
                        link="Visit Website →"
                    />}
                />
                <PortfolioDiv2
                    one={<PortfolioDesc
                        title="siwp.ng"
                        subTitle="Building the SIWP web application"
                        info={LoremIpsum}
                        link="Visit Website →"
                    />}
                />
                <PortfolioDiv2
                    one={<PortfolioDesc
                        title="siwp.ng"
                        subTitle="Building the SIWP web application"
                        info={LoremIpsum}
                        link="Visit Website →"
                    />}
                />
                <PortfolioDiv2
                    one={<PortfolioDesc
                        title="siwp.ng"
                        subTitle="Building the SIWP web application"
                        info={LoremIpsum}
                        link="Visit Website →"
                    />}
                />
                <PortfolioDiv2
                    one={<PortfolioDesc
                        title="siwp.ng"
                        subTitle="Building the SIWP web application"
                        info={LoremIpsum}
                        link="Visit Website →"
                    />}
                />
                <PortfolioDiv2
                    one={<PortfolioDesc
                        title="siwp.ng"
                        subTitle="Building the SIWP web application"
                        info={LoremIpsum}
                        link="Visit Website →"
                    />}
                />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Div4
                    Logo={null}
                    about="What our clients think about us"
                    mission='"Commsworth deliver value and helped grow microsoft in Nigeria, working with them has been a revelation"'
                    name="JAMES BOND"
                    position="MD, Microsoft Nigeria"
                />
            </div>
        )
    }
}

export default Portfolio;