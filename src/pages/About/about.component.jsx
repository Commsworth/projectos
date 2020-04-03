import React from 'react';
import './about.styles.scss';
import Card from '../../component/card/card.component';
import DevOps from '../../asset/svg/devops.svg'
import Support from '../../asset/svg/support.svg'
import Business from '../../asset/svg/business.svg'
import Product from '../../asset/svg/product.svg'
import Strategy from '../../asset/svg/strategy.svg'
import AboutHero from '../../asset/svg/aboutHero.svg'
import Why from '../../component/why/Why';

class About extends React.Component{
    // constructor(){
    //     super();
    // }
    render(){
        return(
            <div className="about">
                <Card
                title="Digital solutions for business growth"
                content= {<img src={AboutHero} alt="devops"/>}
                />

                <h3>Services on Offer</h3>

            <div className="about-cards">
                <Card
                title = {<img src={DevOps} alt="devops"/>}
                subTitle="DevOps & Analytics"
                content= "Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                link="Explore →"
                />
                <Card
                title = {<img src={Support} alt="devops"/>}
                subTitle="Support"
                content= "Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                link="Explore →"
                />
                <Card
                title = {<img src={Business} alt="devops"/>}
                subTitle="Business Continuity"
                content= "Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                link="Explore →"
                />
                <Card
                title = {<img src={Product} alt="devops"/>}
                subTitle="Product & Digital"
                content= "Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                link="Explore →"
                />
                <Card
                title = {<img src={Strategy} alt="devops"/>}
                subTitle="Strategy"
                content= "Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                link="Explore →"
                />
                <Card
                title = {<img src={Product} alt="devops"/>}
                subTitle="Product & Digital"
                content= "Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                link="Explore →"
                />
            </div>
            <Why/>
            <div className="about-work">
            <Card
            link="Work with us →"
            />
            </div>
            </div>
        )
    }
}

export default About;
