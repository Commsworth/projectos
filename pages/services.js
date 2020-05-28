import Card from '../components/extra/card/card.component';
// import DevOps from 'assets/svgs/devops.svg'
// import Support from 'assets/svgs/support.svg'
// import Business from 'assets/svgs/business.svg'
// import Product from 'assets/svgs/product.svg'
// import Strategy from 'assets/svgs/strategy.svg'
import Link from 'next/link';
import { Why } from '../components/services/why';
// import AboutHero from '../../asset/img/aboutHero.png'


export default function Services() {
    return (
        <div className="container">
            <main>
                <div className="heading">
                <h3 className="heading-text">Digital Solutions to <br /> accelerate your business.</h3>
                <img src="/pngs/blueline.png" />
                    {/* <button className="heading-button">Learn More</button> */}
                </div>
                <br />
                <br />
                <div className="about-hero">
                <img src="pngs/aboutHero.png" alt=""/>
                </div>
                <br />
                <br />
                <h3 className="offer">Services on Offer</h3>
                <br/>
                <br/>
                    <div className="about-cards ">
                        <Card
                            title={<img src="assets/svgs/devops.svg" alt="devops" />}
                            subTitle="DevOps & Analytics"
                            content="Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                            
                        />
                        <Card
                            title={<img src="assets/svgs/support.svg" alt="devops" />}
                            subTitle="Support"
                            content="Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                            
                        />
                        <Card
                            title={<img src="assets/svgs/business.svg" alt="devops" />}
                            subTitle="Business Continuity"
                            content="Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                            
                        />
                        <Card
                            title={<img src="assets/svgs/product.svg" alt="devops" />}
                            subTitle="Product & Digital"
                            content="Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                            
                        />
                        <Card
                            title={<img src="assets/svgs/strategy.svg" alt="devops" />}
                            subTitle="Strategy"
                            content="Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                            
                        />
                        <Card
                            title={<img src="assets/svgs/strategy.svg" alt="devops" />}
                            subTitle="Cybersecurity"
                            content="Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                            
                        />
                        <Card
                            title={<img src="assets/svgs/strategy.svg" alt="devops" />}
                            subTitle="Infrastructure"
                            content="Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                            
                        />
                    </div>
                    <Why/>
            </main>
            <style jsx>
                {`
                .container {
                    min-height: 100vh;
                    // padding: 0 0.5rem;
                    // max-width: 97vw;
                    background: #111517;
                    color: white;
                  }
                  .offer{
                    font-size: 40px;
                    line-height: 126.5%;
                    text-align: center;
                  }
                  .map{
                    display: flex;
                    justify-content: center;
                  }
                  .heading{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 150px;
                    margin-bottom: 60px;
                  }
                  .heading-text{
                    text-align: center;
                    font-weight: bold;
                    font-size: 36px;
                    line-height: 114%;
                    text-align: center;
                    position:relative;
                    z-index:10;
                  }
                  .heading img{
                    position:relative; 
                    right:124px;
                    bottom:52px;
                    z-index:0;
                    width:170px;
                  }
                  .about-hero{
                    display: flex;
                    justify-content: center;
                  }
                  .about-hero img{
                    width: 80%;
                  }
                  .about-cards{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    width: 80vw;
                    margin: 0vh 10vw;
                  }
                  .about-cards :global(.card){
                      text-align: center;
                      align-items: center;
                      width: 30%;
                      margin: 1.65%;
                      width: 355px;
                      height: 347px;
                      background: #1C2124 !important;
                      // border: 1px solid #208FFF;
                      box-sizing: border-box;
                      color: white;
                      padding: 20px;
                      
                    }
                    .about-cards :global(.card .title){
                        position: relative;
                        bottom: 80px;
                        height: 100px;
                        
                    }
                    .about-cards :global(.card .sub-title){
                        width: 220px;
                        height: 29px;
                        left: 1008px;
                        top: 1141px;

                        font-family: Nunito;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 24px;
                        line-height: 119%;
                        /* identical to box height, or 29px */


                        /* White */

                        color: #FFFFFF;

                    }
                    .about-cards :global(.card p){
                        width: 281.07px;
                        height: 98.13px;
                        font-family: Muli;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 15px;
                        line-height: 190%;
                        /* or 28px */

                        text-align: center;

                        color: #FFFFFF;
                    }
                `}
            </style>
        </div>
    )
}