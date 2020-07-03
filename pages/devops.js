import Layout from '../components/Layout'
import '../scss/explore.scss'
import Head from 'next/head'
import CarouselDiv from '../components/landing/carouselDiv/carouselDiv.component'
import Explore from '../components/Explore/Explore'
import Card from '../components/extra/card/card.component'
import { blueSemiCircle, drawingArrow } from '../static/assets/svgs';
import ArrowLink from '../components/extra/arrow';
class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <Layout className="explore">
                <Head>
                      <meta   name="viewport"
      content="width=device-width, initial-scale=1, user-scalable=no"
    />
                </Head>
                
              
                <div className="box dark-bg">
                    <div className='container'>
                    <div id="select">
                    <select name="explore" id="explore">
                    <option value="devops">DevOps and Analytics</option>
                    <option value="">Cybersecurity</option>
                    <option value="">Business Continuity</option>
                    <option value="">Managed Services</option>
                    </select>
                    </div>
                <div className="tp">
                    <div className="tp1">
                        <Card title="DevOps & Analytics" 
                        subTitle={blueSemiCircle} 
                        content=" Businesses are empowered to 
                        meet today’s industry challenges through
                         adoption of intelligent automation
                          initiatives." 
                          link={<ArrowLink text="Learn More" />}
                          content2="Our agile, data-driven application
                           development framework equips organizations 
                           to disruptively solve a vast array of problems
                            while infusing insights to intelligently 
                            optimize business decisions on the go." />
                    </div>
                    <div className="tp2">
                        <img src="/static/exploreimg/big1.svg" alt="" />
                    </div>
                </div>
                </div>
                </div>
                <main className="container">
                    <Explore />
               </main>
            </Layout>
        )
    }
}

export default Contact;

 