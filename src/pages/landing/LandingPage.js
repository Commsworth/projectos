import React, { Fragment } from 'react';
import Hero from '../../component/extraPageComponents/header/hero/Hero';
import './LandingPage.css';
// import About from '../../component/main/about/About';
// import Solution from '../../component/main/solution/Solution';
// import Partner from '../../component/main/partner/Partner';
// import Footer from '../../component/footer/Footer';
import Card from '../../component/extraPageComponents/card/card.component';
import Div1 from '../../component/landingPageComponents/div1/div1.component';
import Div2 from '../../component/landingPageComponents/div2/div2.component';
import Div3 from '../../component/landingPageComponents/div3/div3.component'
import Div4 from '../../component/landingPageComponents/div4/div4.component';
import CarouselDiv from '../../component/landingPageComponents/carouselDiv/carouselDiv.component';
import TitleDiv from '../../component/extraPageComponents/titleDiv/titleDiv.component';
import BlueLine from '../../asset/svg/titleLine.svg'
import Bluecircle from '../../asset/svg/titlecircle.svg'
import mission from '../../asset/svg/mission.svg'
import vision from '../../asset/svg/vision.svg'
import core from '../../asset/svg/core.svg'
import services from '../../asset/svg/services.svg'
import cyber from '../../asset/svg/cyber.svg'
import devops2 from '../../asset/img/devops2.png';
import about from '../../asset/img/about.png';
import business2 from '../../asset/img/business2.png';
import product2 from '../../asset/img/product2.png';
import strategy2 from '../../asset/img/strategy2.png';
import tunnel from '../../asset/img/Tunnel.png';
import { Link } from 'react-router-dom';
import Arrow from '../../component/extraPageComponents/arrow/arrow.component';


class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.setState({ loaded: true });
    }
    render() {
        return (
            <Fragment>
                {/* <Nav/> */}
                <Hero />
                <main>
                    <TitleDiv title="Featured" subTitle="Our latest trends tailored for you" />
                    <CarouselDiv
                        background={about}
                    />
                    <TitleDiv title="Strategic Partners" subTitle="We partner with industry leading OEMs to deliver value.​" />
                    <br />
                    <br />
                    <br />
                    <br />
                    <TitleDiv title="About Us" subTitle="A premium ICT consultancy partner with dedicated specialty in delivering business productivity solutions to its clients
                "/>
                    {this.state.loaded && window.scrollY>500 && <Div1
                        large={<Card background={tunnel} title="Who we are" subTitle={<img src={Bluecircle} alt="Blue line" />}
                            content='Commsworth is a premium ICT consultancy partner with dedicated specialty in delivering end to end tech-driven business initiatives and solutions to her teeming clients.'
                            content1='The Commsworth arsenal comprises of a school of top-tier ICT experts with seasoned competencies across various technologies, including Infastructure, Cybersecurity, DevOps and Analytics, Business Automation and Productivity, Business Continuity, Product and Digital Strategy and Managed Services'
                        />}
                        small1={<Card background={core} title="Core Values" subTitle={<img src={Bluecircle} alt="Blue line" />} content="To enable our partners maximize best-in-class technology in attaining business goals at the minimal budgets" />}
                        medium={<Card background={vision} title="Our Vision" subTitle={<img src={Bluecircle} alt="Blue line" />} content="To enable our partners maximize best-in-class technology in attaining business goals at the minimal budgets" />}
                        small2={<Card background={mission} title="Our Mission" subTitle={<img src={Bluecircle} alt="Blue line" />} content="​To enable our partners maximize best-in-class technology in attaining business goals at the minimal budgets" />}
                    />}
                    <br />
                    <br />
                    <TitleDiv title="Our Solutions" />
                    {this.state.loaded && window.scrollY>500 && <Div2
                        one={<Card
                            title={<img src={devops2} alt="devops" />}
                            subTitle="DevOps & Analytics"
                            content="Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                            link={<Link to="/commsworth/explore1">
                                Contact Us →
                                    </Link>}
                        />}
                        two={<Card
                            title={<img src={strategy2} alt="devops" />}
                            subTitle="Business Automation and Productivity"
                            content="Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                            link={<Link to="/commsworth/explore2">
                                Contact Us →
                                    </Link>}
                        />}
                        three={<Card
                            title={<img src={business2} alt="devops" />}
                            subTitle="Business Continuity"
                            content="Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                            link={<Link to="/commsworth/explore3">
                                Contact Us →
                                    </Link>}
                        />}
                        four={<Card
                            title={<img src={product2} alt="devops" />}
                            subTitle="Product & Digital"
                            content="Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                            link={<Link to="/commsworth/explore4">
                                {<Arrow text="Contact Us" />}
                            </Link>}
                        />}
                        five={<Card
                            title={<img src={services} alt="devops" />}
                            subTitle="Strategy"
                            content="Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                            link={<Link to="/commsworth/explore5">
                                Contact Us →
                                    </Link>}
                        />}
                        six={<Card
                            title={<img src={cyber} alt="devops" />}
                            subTitle="Strategy"
                            content="Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                            link={<Link to="/commsworth/explore5">
                                Contact Us →
                                    </Link>}
                        />}
                    />}

                    {this.state.loaded && window.scrollY>500 && <Div3
                        smallTitle={<div><img src={BlueLine} alt="Blue line" /> <span>The Academy</span></div>}
                        normalTitle="Learn from the best at"
                        boldTitle="Commsworth Academy"
                        one={<Card title="Learn" subTitle="Web Design" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis sit." link="Enroll →" />}
                        two={<Card title="Learn" subTitle="FrontEnd Dev" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis sit." link="Enroll →" />}
                        three={<Card title="Learn" subTitle="BackEnd Dev" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis sit." link="Enroll →" />}
                        four={<Card title="Learn" subTitle="Python" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis sit." link="Enroll →" />}
                        five={<Card title="Learn" subTitle="Python" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis sit." link="Enroll →" />}
                    />}

                    <TitleDiv title="Our Clients and Stories" />
                    {this.state.loaded && window.scrollY>500 && <Div4

                        about="What our clients think about us"
                        mission='"Commsworth deliver value and helped grow microsoft in Nigeria, working with them has been a revelation"'
                        name="JAMES BOND"
                        position="MD, Microsoft Nigeria"
                    />}
                </main>
            </Fragment>
        )
    }
}
export default LandingPage;