import Layout from '../components/Layout'
import '../scss/devops.scss'
import Head from 'next/head'
import CarouselDiv from '../components/landing/carouselDiv/carouselDiv.component'
import Explore from '../components/Explore/Explore'
import Card from '../components/extra/card/card.component'
import { blueSemiCircle, drawingArrow } from '../static/assets/svgs';
import ArrowLink from '../components/extra/arrow';
import CarouselExp from '../components/CarouselExp/CarouselExp'
import Option from '../components/option/Option.component'
// import Card from '../components/extra/card/card.component'
// import { blueSemiCircle, drawingArrow } from '../../../static/assets/svgs';
import Scroll from '../components/CarouselOffer/Scroll'
import CardOfferList from '../components/CarouselOffer/CardOffer/CardOfferList'
import {events} from '../components/CarouselOffer/events'
import DevopsOffer from '../components/subpage-offer/devops-offer/DevopsOffer.component';


class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
             web: true,
             devops: false,
             analytics: false,
             pm: false,
             offer: true,
             res: false
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }

     handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        })
    }

    onDisplayOffer = event =>{
         this.setState({
             offer: true,
             res: false
            })
    }
    onDisplayRes = event =>  {
         this.setState({
             offer: false,
             res: true
            })
    }

    onDisplayWeb = event => {
        this.setState({
            web: true, 
            devops: false,
             analytics: false,
             pm: false,
            })
    }
    onDisplayDevops = event => {
        this.setState({
            web: false,
             devops: true,
             analytics: false,
             pm: false,
        })
    }
    onDisplayAnalytics = event => {
        this.setState({
            web: false,
             devops:false,
             analytics: true,
             pm: false,
        })
    }
    onDisplayAi = event => {
        this.setState({
            web: false,
             devops: false,
             analytics: false,
             pm: false,
        })
    }
    onDisplayPm = event => {
        this.setState({
            web: false,
             devops: false,
             analytics: false,
             pm: true,
        })
    }

    render() {
        return (
            <Layout >
                <Head>
                      <meta   name="viewport"
      content="width=device-width, initial-scale=1, user-scalable=no"
    />
                </Head>
                
              
                <div className="box dark-bg">
                    <div className='container'>
                    <div className='tp-wrapper'>
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
                </div>            
                               <div className="exp">
                <ul className="exp-head">
                    <li onClick={this.onDisplayWeb} className={this.state.web? "exp-head-style" : null}>Web | Mobile Apps</li>
                    <li onClick={this.onDisplayDevops} className={this.state.devops? "exp-head-style" : null}>DevOps</li>
                    <li onClick={this.onDisplayAnalytics} className={this.state.analytics? "exp-head-style" : null}>Analytics</li>
                    <li onClick={this.onDisplayPm} className={this.state.pm? "exp-head-style" : null}>Project Management</li>
                </ul>

            <div  className="exp-head-opt">
                 <select id="opt" name="opt" value={this.state.scope} value={this.state.opt}  onChange={this.handleChange}>
                    <option value={this.onDisplayWeb} className={this.state.web? "exp-head-style" : null}>Web | Mobile Apps</option>
                    <option value={this.onDisplayDevops} className={this.state.devops? "exp-head-style" : null}>DevOps</option>
                    <option value={this.onDisplayAnalytics} className={this.state.analytics? "exp-head-style" : null}>Analytics</option>
                    <option value={this.onDisplayAi} className={this.state.ai? "exp-head-style" : null}>Artificial Intellicence</option>
                    <option value={this.onDisplayPm} className={this.state.pm? "exp-head-style" : null}>Project Management</option>
                </select>
                </div>

                {this.state.web?                
                 <CarouselExp 
                 cardImg1 ={<Card  background="/static/subexplore/img1.svg" />} 
                 cardContent1={<Card title="Ultra-Responsive Apps" subTitle={blueSemiCircle} content="We deploy blazing fast, low-code web and mobile apps and websites powered by robust business logic engines tailored to address key business challenges. Our mobile-first approach ensures a responsive user experience as today’s consumers are driven by convenient yet immersive digital interactions." link={<ArrowLink text="Work with us"/> } />} /> 
                : null
                 }               

                {this.state.devops?
                <div>
                devops
                </div> : null
                 }

                {this.state.analytics?
                <div>
                     Analytics
                </div> : null
                 }

                {this.state.pm?
                <div>
                    Project Management
                </div> : null
                 }
                     <ul className="offer-options">
                         <li onClick={this.onDisplayOffer} className={this.state.offer? "offer-options-style" : null}>Offers</li>
                         <li onClick={this.onDisplayRes} className={this.state.res? "offer-options-style" : null}>Resources</li>
                     </ul>

                     {this.state.offer?
                        <div>
                 <div className="offer-grid">
                <Card title={"Game changing offers"} subTitle={blueSemiCircle} content={"Here are a few more reasons why you should choose use"}/>
                 
                <Scroll>                   
                <CardOfferList events={events} />
                  </Scroll>
                
                  </div>
                <div style={{display: "flex", justifyContent: "center", zIndex: 1000}}>

    </div>
    <Option />
    </div>
     : null }

    {this.state.res?<div>Resources</div>:null}
    </div>    
           
            </Layout>
        )
    }
}

export default Contact;

 