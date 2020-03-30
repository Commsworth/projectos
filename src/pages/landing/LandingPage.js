import React, { Fragment } from 'react';
import Hero from '../../component/header/hero/Hero';
import './LandingPage.css';
import About from '../../component/main/about/About';
import Solution from '../../component/main/solution/Solution';
import Partner from '../../component/main/partner/Partner';
import Footer from '../../component/footer/Footer';
import Card from '../../component/card/card.component';
import Card2 from '../../component/card2/card2.component';
import Div1 from '../../component/div1/div1.component';
import Div2 from '../../component/div2/div2.component';
import Div3 from '../../component/div3/div3.component'
import Div4 from '../../component/div4/div4.component';
import CarouselDiv from '../../component/carouselDiv/carouselDiv.component';
// import CardDiv1 from '../../component/cardDiv1/cardDiv1.component';
// import CardDiv2 from '../../component/cardDiv2/cardDiv2.component';
// import CardDiv3 from '../../component/cardDiv3/cardDiv3.component';
// import CardDiv4 from '../../component/cardDiv4/cardDiv4.component';

const LoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies turpis ridiculus et id mauris tincidunt facilisi duis. Fermentum amet vestibulum elit ac vel eget. Lobortis maecenas sit faucibus congue volutpat aenean sit. Donec in."
const QualityAssurance = "We are committed to ensuring that our products, services and solutions are highly potent and well reputed to be adopted across major business verticals. We ensure they are based on IT best practices and are backed by OEMs SLA support. All our products are top trend and sourced directly from OEMs (Original Equipment Manufacturers) ensuring manufacturer’s warranty covers our entire portfolio, thus protecting your investment from the start. "

const LandingPage = () => {

    return (
        <Fragment>
            <Hero />
            <main>
                <CarouselDiv
                background="https://images.adsttc.com/media/images/5de3/1ca6/3312/fda8/2a00/00b3/large_jpg/001.jpg?1575165037"
                />
                <Div1
                    large={<Card title="1" subTitle="2" content={LoremIpsum} link="Read More →" />}
                    medium={<Card title="1" subTitle="2" content={LoremIpsum} link="Read More →" />}
                    small1={<Card title="1" subTitle="2" content={LoremIpsum} link="Read More →" />}
                    small2={<Card title="1" subTitle="2" content={LoremIpsum} link="Read More →" />}
                />
                <Div2
                    one={<Card title="1" subTitle="2" content={LoremIpsum} link="Read More →" />}
                    two={<Card title="1" subTitle="2" content={LoremIpsum} link="Read More →" />}
                    three={<Card title="1" subTitle="2" content={LoremIpsum} link="Read More →" />}
                    four={<Card title="1" subTitle="2" content={LoremIpsum} link="Read More →" />}
                    five={<Card title="1" subTitle="2" content={LoremIpsum} link="Read More →" />}
                    six={<Card title="1" subTitle="2" content={LoremIpsum} link="Read More →" />}
                />

                <Div3
                    smallTitle="The Academy"
                    normalTitle="Learn from the best at"
                    boldTitle="Commsworth Academy"
                    one={<Card title="1" subTitle="2" content={LoremIpsum} link="Read More →" />}
                    two={<Card title="1" subTitle="2" content={LoremIpsum} link="Read More →" />}
                    three={<Card title="1" subTitle="2" content={LoremIpsum} link="Read More →" />}
                    four={<Card title="1" subTitle="2" content={LoremIpsum} link="Read More →" />}
                />

                <Div4
                    Logo={null}
                    about="What our clients thinks about us"
                    mission="Commsworth deliver value and helped grow microsoft in Nigeria, working with them has been a revelation "
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
                <Footer />
            </main>
        </Fragment>
    )
}
export default LandingPage;