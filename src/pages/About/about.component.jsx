import React from 'react';
import './about.styles.scss';
import Card from '../../component/extraPageComponents/card/card.component';
import DevOps from '../../asset/svg/devops.svg'
import Support from '../../asset/svg/support.svg'
import Business from '../../asset/svg/business.svg'
import Product from '../../asset/svg/product.svg'
import Strategy from '../../asset/svg/strategy.svg'
import AboutHero from '../../asset/img/aboutHero.png'
import Why from '../../component/aboutPageComponents/why/Why';
import Contact from '../contact/Contact';
import {Link} from 'react-router-dom';
import Nav from '../../component/extraPageComponents/header/navbar/Nav';

class About extends React.Component{
    // constructor(){
    //     super();
    // this.state = {
        // 
    // }
    // }

    componentDidMount(){
        window.scrollTo(0,0)
    }
    render(){
        return(
            <div className="about">
                {/* <Nav/> */}
                <div className="about-hero">
                <Card
                title="Digital solutions for business growth"
                content= {<img src={AboutHero} alt="devops"/>}
                />
                <h3>Services on Offer</h3>
                </div>


            <div className="about-cards">
                <Card
                title = {<img src={DevOps} alt="devops"/>}
                subTitle="DevOps & Analytics"
                content= "Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                link={<Link to="/commsworth/explore1">
                    Explore →
                </Link>}
                />
                <Card
                title = {<img src={Support} alt="devops"/>}
                subTitle="Support"
                content= "Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                link={<Link to="/commsworth/explore2">
                    Explore →
                </Link>}
                />
                <Card
                title = {<img src={Business} alt="devops"/>}
                subTitle="Business Continuity"
                content= "Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                link={<Link to="/commsworth/explore3">
                    Explore →
                </Link>}
                />
                <Card
                title = {<img src={Product} alt="devops"/>}
                subTitle="Product & Digital"
                content= "Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                link={<Link to="/commsworth/explore4">
                    Explore →
                </Link>}
                />
                <Card
                title = {<img src={Strategy} alt="devops"/>}
                subTitle="Strategy"
                content= "Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                link={<Link to="/commsworth/explore5">
                    Explore →
                </Link>}
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
