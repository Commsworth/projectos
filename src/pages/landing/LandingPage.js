import React, { Fragment } from 'react';
import Hero from '../../component/extraPageComponents/header/hero/Hero';
import './LandingPage.css';
// import About from '../../component/main/about/About';
// import Solution from '../../component/main/solution/Solution';
// import Partner from '../../component/main/partner/Partner';
// import Footer from '../../component/footer/Footer';
import Card from '../../component/extraPageComponents/card/card.component';
import Card2 from '../../component/extraPageComponents/card2/card2.component';
import Div1 from '../../component/landingPageComponents/div1/div1.component';
import Div2 from '../../component/landingPageComponents/div2/div2.component';
import Div3 from '../../component/landingPageComponents/div3/div3.component'
import Div4 from '../../component/landingPageComponents/div4/div4.component';
import CarouselDiv from '../../component/landingPageComponents/carouselDiv/carouselDiv.component';
import TitleDiv from '../../component/extraPageComponents/titleDiv/titleDiv.component';
import BlueLine from '../../asset/svg/titleLine.svg'
import mission from '../../asset/svg/mission.svg'
import vision from '../../asset/svg/vision.svg'
import core from '../../asset/svg/core.svg'
import devops2 from '../../asset/img/devops2.png';
import support2 from '../../asset/img/support2.png';
import business2 from '../../asset/img/business2.png';
import product2 from '../../asset/img/product2.png';
import strategy2 from '../../asset/img/strategy2.png';
import QualityAssuranceBackground from '../../component/landingPageComponents/div1/rectangle55.png'
import {Link} from 'react-router-dom';

// import CardDiv1 from '../../component/cardDiv1/cardDiv1.component';
// import CardDiv2 from '../../component/cardDiv2/cardDiv2.component';
// import CardDiv3 from '../../component/cardDiv3/cardDiv3.component';
// import CardDiv4 from '../../component/cardDiv4/cardDiv4.component';

const LoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies turpis ridiculus et id mauris tincidunt facilisi duis. Fermentum amet vestibulum elit ac vel eget. Lobortis maecenas sit faucibus congue volutpat aenean sit. Donec in."

class LandingPage  extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    componentDidMount(){
        window.scrollTo(0,0)
    }
    render() {
    return (
        <Fragment>
            <Hero />
            <main>
            <TitleDiv title="Featured" subTitle="Find out what’s new with commsworth" />
                <CarouselDiv
                background="https://images.adsttc.com/media/images/5de3/1ca6/3312/fda8/2a00/00b3/large_jpg/001.jpg?1575165037"
                />
                <TitleDiv title="Strategic Partners" subTitle="We partner with industry leading OEMs to deliver value.​" />
                <br />
                <br />
                <br />
                <br />
                <TitleDiv title="About Us" subTitle="A premium ICT consultancy partner with dedicated specialty in delivering business productivity solutions to its clients
                "/>
                <Div1
                    large={<Card title="Quality Assurance" subTitle={<img src={BlueLine} alt="Blue line"/>} content='We are committed to ensuring that our products, services and solutions are highly potent and well reputed to be adopted across major business verticals. We ensure they are based on IT best practices and are backed by OEMs SLA support. All our products are top trend and sourced directly from OEMs (Original Equipment Manufacturers) ensuring manufacturer’s warranty covers our entire portfolio, thus protecting your investment from the start.' link="Read More →" link2="Read More——>" />}
                    small1={<Card background={core} title="Core Values" subTitle={<img src={BlueLine} alt="Blue line"/>} content="To enable our partners maximize best-in-class technology in attaining business goals at the minimal budgets" link="Read More →" />}
                    medium={<Card background={vision} title="Our Vision" subTitle={<img src={BlueLine } alt="Blue line"/>} content="To enable our partners maximize best-in-class technology in attaining business goals at the minimal budgets" link="Read More →" />}
                    small2={<Card background={mission} title="Our Mission" subTitle={<img src={BlueLine} alt="Blue line"/>} content="​To enable our partners maximize best-in-class technology in attaining business goals at the minimal budgets" link="Read More →" />}
                />
                        <TitleDiv title="Our Solutions"/>
                <Div2
                                    one={<Card
                                    title = {<img src={devops2} alt="devops"/>}
                                    subTitle="DevOps & Analytics"
                                    content= "Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                                    link={<Link to="/commsworth/explore1">
                                        Contact Us →
                                    </Link>}
                                    />}
                                    two={<Card
                                    title = {<img src={support2} alt="devops"/>}
                                    subTitle="Support"
                                    content= "Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                                    link={<Link to="/commsworth/explore2">
                                        Contact Us →
                                    </Link>}
                                    />}
                                    three={<Card
                                    title = {<img src={business2} alt="devops"/>}
                                    subTitle="Business Continuity"
                                    content= "Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                                    link={<Link to="/commsworth/explore3">
                                        Contact Us →
                                    </Link>}
                                    />}
                                    four={<Card
                                    title = {<img src={product2} alt="devops"/>}
                                    subTitle="Product & Digital"
                                    content= "Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                                    link={<Link to="/commsworth/explore4">
                                        Contact Us →
                                    </Link>}
                                    />}
                                    five={<Card
                                    title = {<img src={strategy2} alt="devops"/>}
                                    subTitle="Strategy"
                                    content= "Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                                    link={<Link to="/commsworth/explore5">
                                        Contact Us →
                                    </Link>}
                                    />}                 
                />

                <Div3
                    smallTitle={<div><img src={BlueLine} alt="Blue line"/> <span>The Academy</span></div>}
                    normalTitle="Learn from the best at"
                    boldTitle="Commsworth Academy"
                    one={<Card title="Learn" subTitle="Web Design" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis sit." link="Enroll →" />}
                    two={<Card title="Learn" subTitle="FrontEnd Dev" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis sit." link="Enroll →" />}
                    three={<Card title="Learn" subTitle="BackEnd Dev" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis sit." link="Enroll →" />}
                    four={<Card title="Learn" subTitle="Python" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis sit." link="Enroll →" />}
                />

                <Div4
                    Logo={null}
                    about="What our clients think about us"
                    mission='"Commsworth deliver value and helped grow microsoft in Nigeria, working with them has been a revelation"'
                    name="JAMES BOND"
                    position="MD, Microsoft Nigeria"
                />











                {/* <CardDiv1
                one={
                    // <Card title="Commsworth partners" subTitle="Microsoft" content={LoremIpsum} link="Read More →"/>
                    <Card2 title="Quality Assurance" background="https://c.ndtvimg.com/2019-08/k8519lf8_bugatti-centodieci-unveiled-at-pebble-beach-car-show_625x300_17_August_19.jpg" content="One Line" link={"Read More"} />
                }
                two={
                    <Card2 title="Quality Assurance" background="https://c.ndtvimg.com/2019-08/k8519lf8_bugatti-centodieci-unveiled-at-pebble-beach-car-show_625x300_17_August_19.jpg" content="One Line" link={"Read More"} />
                }
                three={
                    <Card2 title="Quality Assurance" background="https://c.ndtvimg.com/2019-08/k8519lf8_bugatti-centodieci-unveiled-at-pebble-beach-car-show_625x300_17_August_19.jpg" content="One Line" link={"Read More"} />
                }
                four={
                    <Card2 title="Quality Assurance" background="https://c.ndtvimg.com/2019-08/k8519lf8_bugatti-centodieci-unveiled-at-pebble-beach-car-show_625x300_17_August_19.jpg" content="One Line" link={"Read More"} />
                }
            />
            <CardDiv2
            one={
                <Card2 title="Quality Assurance" background="https://c.ndtvimg.com/2019-08/k8519lf8_bugatti-centodieci-unveiled-at-pebble-beach-car-show_625x300_17_August_19.jpg" content="One Line" link={"Read More"} />
            }
            two={
                <Card2 title="Quality Assurance" background="https://c.ndtvimg.com/2019-08/k8519lf8_bugatti-centodieci-unveiled-at-pebble-beach-car-show_625x300_17_August_19.jpg" content="One Line" link={"Read More"} />
            }
            three={
                <Card2 title="Quality Assurance" background="https://c.ndtvimg.com/2019-08/k8519lf8_bugatti-centodieci-unveiled-at-pebble-beach-car-show_625x300_17_August_19.jpg" content="One Line" link={"Read More"} />
            }
            four={
                <Card2 title="Quality Assurance" background="https://c.ndtvimg.com/2019-08/k8519lf8_bugatti-centodieci-unveiled-at-pebble-beach-car-show_625x300_17_August_19.jpg" content="One Line" link={"Read More"} />
            }
            five={
                <Card2 title="Quality Assurance" background="https://c.ndtvimg.com/2019-08/k8519lf8_bugatti-centodieci-unveiled-at-pebble-beach-car-show_625x300_17_August_19.jpg" content="One Line" link={"Read More"} />
            }
            six={
                <Card2 title="Quality Assurance" background="https://c.ndtvimg.com/2019-08/k8519lf8_bugatti-centodieci-unveiled-at-pebble-beach-car-show_625x300_17_August_19.jpg" content="One Line" link={"Read More"} />
            }
            style="three"
            />
            <CardDiv3
            smallTitle="The Academy"
            bigTitle="Learn from the best at"
            boldTitle="Commsworth Academy"
            cardDiv={<CardDiv2
                one={
                    <Card2 title="Quality Assurance" background="https://c.ndtvimg.com/2019-08/k8519lf8_bugatti-centodieci-unveiled-at-pebble-beach-car-show_625x300_17_August_19.jpg" content="One Line" link={"Read More"} />
                }
                two={
                    <Card2 title="Quality Assurance" background="https://c.ndtvimg.com/2019-08/k8519lf8_bugatti-centodieci-unveiled-at-pebble-beach-car-show_625x300_17_August_19.jpg" content="One Line" link={"Read More"} />
                }
                three={
                    <Card2 title="Quality Assurance" background="https://c.ndtvimg.com/2019-08/k8519lf8_bugatti-centodieci-unveiled-at-pebble-beach-car-show_625x300_17_August_19.jpg" content="One Line" link={"Read More"} />
                }
                four={
                    <Card2 title="Quality Assurance" background="https://c.ndtvimg.com/2019-08/k8519lf8_bugatti-centodieci-unveiled-at-pebble-beach-car-show_625x300_17_August_19.jpg" content="One Line" link={"Read More"} />
                }
                style="four"
            />}
            />
            <CardDiv4
            title="What Our Clients Think
            About Us"
            content='“Commworth deliver Value and helped grow Microsoft in Nigeria, working with them has been a revelation”'
            end1="JAMES BOND"
            end2="-MD, Microsoft Nigeria"
            /> */}
                {/* <About />
                <Solution />
                <Partner /> */}
                {/* <Footer /> */}
            </main>
        </Fragment>
    )
}
}
export default LandingPage;