import React from 'react';
import './Portfolio.styles.scss';
import PortfolioDiv2 from '../../component/portfolioDiv2/portfolioDiv2.component';
import PortfolioDesc from '../../component/portfolioDesc/portfolioDesc.component';
import Top from '../../component/portfolio/top/top';
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
                <h3>We build <br /> digital product</h3>
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
                <PortfolioDiv2
                    one={<PortfolioDesc
                        title="siwp.ng"
                        subTitle="Building the SIWP web application"
                        info={LoremIpsum}
                        link="Visit Website →"
                    />}
                />
            </div>
        )
    }
}

export default Portfolio;