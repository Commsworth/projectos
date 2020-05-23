import Card from '../components/extra/card/card.component';
// import DevOps from '../static/assets/svgs/devops.svg'
// import Support from '../static/assets/svgs/support.svg'
// import Business from '../static/assets/svgs/business.svg'
// import Product from '../static/assets/svgs/product.svg'
// import Strategy from '../static/assets/svgs/strategy.svg'
import Link from 'next/link';
import { Why } from '../components/services/why';
// import AboutHero from '../../asset/img/aboutHero.png'


export default function Services() {
    return (
        <div className="container">
            <main>
                <div className="heading">
                    <h3 className="heading-text">Digital Solutions to <br /> accelerate your business. </h3>
                    {/* <button className="heading-button">Learn More</button> */}
                </div>
                <br />
                <br />
                <h3 className="offer">Services on Offer</h3>
                    <div className="about-cards ">
                        <Card
                            title={<img src="../static/assets/svgs/devops.svg" alt="devops" />}
                            subTitle="DevOps & Analytics"
                            content="Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                            
                        />
                        <Card
                            title={<img src="../static/assets/svgs/support.svg" alt="devops" />}
                            subTitle="Support"
                            content="Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                            
                        />
                        <Card
                            title={<img src="../static/assets/svgs/business.svg" alt="devops" />}
                            subTitle="Business Continuity"
                            content="Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                            
                        />
                        <Card
                            title={<img src="../static/assets/svgs/product.svg" alt="devops" />}
                            subTitle="Product & Digital"
                            content="Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                            
                        />
                        <Card
                            title={<img src="../static/assets/svgs/strategy.svg" alt="devops" />}
                            subTitle="Strategy"
                            content="Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                            
                        />
                        <Card
                            title={<img src="../static/assets/svgs/strategy.svg" alt="devops" />}
                            subTitle="Cybersecurity"
                            content="Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                            
                        />
                        <Card
                            title={<img src="../static/assets/svgs/strategy.svg" alt="devops" />}
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
                    padding-top: 10vh;
                  }
                  .heading-text{
                    text-align: center;
                    font-weight: bold;
                    font-size: 46px;
                    line-height: 114%;
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
                      width: 30%;
                      margin: 1.65%;
                      min-width: 355px;
                      height: 347px;
                      background: #1C2124 !important;
                      // border: 1px solid #208FFF;
                      box-sizing: border-box;
                      color: white;
                      padding: 20px;
                      
                    }
                    .about-cards :global(.card .title){
                        position: relative;
                        bottom: 100px;
                        height: 100px;
                    }
                `}
            </style>
        </div>
    )
}