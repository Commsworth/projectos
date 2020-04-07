import React from 'react';
import './portfolioDesc.styles.scss';

const PortfolioDesc = (props) => (
    <div className="portfolio-desc">
        <div className="image"></div>
        <div>
        <p>{props.title}</p>
        <h3>{props.subTitle}</h3>
        </div>
        <div className="second">
        <p>{props.info}</p>
        <a href="#">{props.link}</a>
        </div>
    </div>
)

export default PortfolioDesc;