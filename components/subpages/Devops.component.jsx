import Layout from '../Layout'
import './devops.scss'
import Head from 'next/head'
// import CarouselDiv from '../landing/carouselDiv/carouselDiv.component'
// import Explore from '../Explore/Explore'
import Card from '../extra/card/card.component'
import { blueSemiCircle, drawingArrow } from '../../static/assets/svgs';
import ArrowLink from '../extra/arrow';
import CarouselExp from '../CarouselExp/CarouselExp'
// import Option from '../option/Option.component'
// import Card from '../extra/card/card.component'
// import { blueSemiCircle, drawingArrow } from '../../../static/assets/svgs';
// import Scroll from '../CarouselOffer/Scroll'
import CardOfferList from '../CarouselOffer/CardOffer/CardOfferList'
import {events} from '../CarouselOffer/events'
// import DevopsOffer from '../subpage-offer/devops-offer/DevopsOffer.component';
import { FaBars } from 'react-icons/fa'


class Devops extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
             web: true,
             devops: false,
             analytics: false,
             pm: false,
             offer: true,
             res: false,
             active: "Web | Mobile Apps"
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
              active:'Web | Mobile Apps'
            })
    }
    onDisplayDevops = event => {
        this.setState({
            web: false,
             devops: true,
             analytics: false,
             pm: false,
             active: 'DevOps'
        })
    }
    onDisplayAnalytics = event => {
        this.setState({
            web: false,
             devops:false,
             analytics: true,
             pm: false,
             active: 'Analytics'
        })
    }
    onDisplayPm = event => {
        this.setState({
            web: false,
             devops: false,
             analytics: false,
             pm: true,
             active: 'Project Management'
        })
    }

    myFunction= () =>  {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    }

    render() {
        return (
            <Layout >
                <Head>
                      <meta   name="viewport"
      content="width=device-width, initial-scale=1, user-scalable=no"
    />
                </Head>
                
              
                <div className="box  dark-bg">
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

                <div>
                 <ul class="topnav" id="myTopnav">
                            <li> {this.state.active} </li>
                    <li  onClick={this.onDisplayWeb} className={this.state.web? "exp-head-style" : null}>Web | Mobile Apps</li>
                    <li onClick={this.onDisplayDevops} className={this.state.devops? "exp-head-style" : null}>DevOps</li>
                    <li onClick={this.onDisplayAnalytics} className={this.state.analytics? "exp-head-style" : null}>Analytics</li>
                    <li onClick={this.onDisplayPm} className={this.state.pm? "exp-head-style" : null}>Project Management</li>
                    <li class="icon" onClick={this.myFunction}>
                        <FaBars />
                    </li>
                    </ul>
                {this.state.web?                
                 <CarouselExp 
                 cardImg1 ={<Card  background="/static/subexplore/img1.svg" />} 
                 cardContent1={<Card title="Ultra-Responsive Apps" subTitle={blueSemiCircle} content="We deploy blazing fast, low-code web and mobile apps and websites powered by robust business logic engines tailored to address key business challenges. Our mobile-first approach ensures a responsive user experience as today’s consumers are driven by convenient yet immersive digital interactions." link={<ArrowLink text="Work with us"/> } />} 
                 
                 cardImg2 ={<Card  background="/static/subexplore/img1.svg" />} 
                 cardContent2={<Card title="Seamless Delivery" subTitle={blueSemiCircle} content="App content delivery is auto-tuned to suit user location via a blend of traffic management metrics including caching, severless computing to provide the quickest response to web requests." link={<ArrowLink text="Work with us"/> } />}  

                 cardImg3 ={<Card  background="/static/subexplore/img1.svg" />} 
                 cardContent3={<Card title="Application Scalability" subTitle={blueSemiCircle} content="Our Micro-services architecture enables you to securely scale your app seamlessly from zero to planet-wide in a matter of minutes." link={<ArrowLink text="Work with us"/> } />}

                 cardImg4 ={<Card  background="/static/subexplore/img1.svg" />} 
                 cardContent4={<Card title="Broad Technology Stack" subTitle={blueSemiCircle} content="We support a wide array of development frameworks and technologies to suit your preferred flavor and functionality across mobile, front and back ends." link={<ArrowLink text="Work with us"/> } />} /> 
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
                </div>


                    <div>

                    <div style={{border:'1px solid #C0C0C0', margin: '60px 0px'}}></div>

                     <ul className="offer-options">
                         <li onClick={this.onDisplayOffer} className={this.state.offer? "offer-options-style" : null}>Offers</li>
                         <li onClick={this.onDisplayRes} className={this.state.res? "offer-options-style" : null}>Resources</li>
                     </ul>

                     {this.state.offer?
                        <div>
                 <div className="offer-grid">
                <Card title={"Game changing offers"} subTitle={blueSemiCircle} content={"Here are a few more reasons why you should choose use"}/>
                                  
                <CardOfferList events={events} />                
                </div>

    </div>
     : null }

    {this.state.res?<div>Resources</div>:null}
       </div>
            </Layout>
        )
    }
}

export default Devops;

 