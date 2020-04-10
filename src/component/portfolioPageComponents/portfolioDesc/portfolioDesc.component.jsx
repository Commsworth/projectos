import React from 'react';
import './portfolioDesc.styles.scss';

const PortfolioDesc = (props) => (
    <div>
        <div className="portfolio-desc">
            <div className="words">
                <p>{props.title}</p>
                <h3>{props.subTitle}</h3>
            </div>
            <div className="second">
                <p>{props.info}</p>
                <a href="#"> {props.link} </a>
            </div>
            <div className="background">
            </div>
        </div>
    </div>
)

export default PortfolioDesc;