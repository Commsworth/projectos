// import './devops.scss'
import Card from '../../extraPageComponents/Card'
import ArrowLink from '../../extraPageComponents/ArrowLink';
import CarouselExp from '../CarouselExp/CarouselExp'
import CardOfferList from '../CarouselOffer/CardOffer/CardOfferList'
import {events} from '../CarouselOffer/events'
import { FaBars } from 'react-icons/fa'
import Dropdownn from '../Dropdown'

class BusinessContinuity extends React.Component {

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
            <React.Fragment>
                {/* <Head>
                     <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head> */}
                
              <div style={{width: '100%'}}>
                <div className="box  dark-bg">
                    <div className='tp-wrapper'>
                    <Dropdownn active="Business Continuity" id='select' />
                <div className="tp">
                    <div className="tp1">
                        <Card title="Business Continuity" 
                        subIcon='/static/svg/semi-circle.svg' 
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
                        <img src="/static/exploreimg/support.svg" alt="" />
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
                 cardContent1={<Card title="Ultra-Responsive Apps" subIcon='/static/svg/semi-circle.svg' content="We deploy blazing fast, low-code web and mobile apps and websites powered by robust business logic engines tailored to address key business challenges. Our mobile-first approach ensures a responsive user experience as today’s consumers are driven by convenient yet immersive digital interactions." link={<ArrowLink text="Work with us"/> } />} 
                 
                 cardImg2 ={<Card  background="/static/subexplore/img1.svg" />} 
                 cardContent2={<Card title="Seamless Delivery" subIcon='/static/svg/semi-circle.svg' content="App content delivery is auto-tuned to suit user location via a blend of traffic management metrics including caching, severless computing to provide the quickest response to web requests." link={<ArrowLink text="Work with us"/> } />}  

                 cardImg3 ={<Card  background="/static/subexplore/img1.svg" />} 
                 cardContent3={<Card title="Application Scalability" subIcon='/static/svg/semi-circle.svg' content="Our Micro-services architecture enables you to securely scale your app seamlessly from zero to planet-wide in a matter of minutes." link={<ArrowLink text="Work with us"/> } />}

                 cardImg4 ={<Card  background="/static/subexplore/img1.svg" />} 
                 cardContent4={<Card title="Broad Technology Stack" subIcon='/static/svg/semi-circle.svg' content="We support a wide array of development frameworks and technologies to suit your preferred flavor and functionality across mobile, front and back ends." link={<ArrowLink text="Work with us"/> } />} /> 
                : null
                 }               

                {this.state.devops?
                    <CarouselExp cardImg1 ={<Card  background="/static/subexplore/img1.svg" />} 
                 cardContent1={<Card title="DevOps" subIcon='/static/svg/semi-circle.svg' content="DevOps bridges the gap between the complex traditional Software development lifecycle and IT Operations required to provision applications through its lifetime. With DevOps you can easily test app changes in a secure environment and ship out updates with no hassles in a seamless automated process." link={<ArrowLink text="Work with us"/> } />} 
                
                 cardImg2 ={<Card  background="/static/subexplore/img1.svg" />} 
                 cardContent2={<Card title="Collaborative Development" subIcon='/static/svg/semi-circle.svg' content="With our Git powered version control workflow, all development events are well coordinated and hosted within repositories, allowing for native collaboration between engineers with easy code tracking and review in line with engineering playbooks." link={<ArrowLink text="Work with us"/> } />}

                  cardImg3 ={<Card  background="/static/subexplore/img1.svg" />} 
                 cardContent3={<Card title="Automation and Orchestration" subIcon='/static/svg/semi-circle.svg' content="We employ simplified Continuous Integration and Continuous Delivery (CI/CD) processes which ensures seamless application build, testing deployment and shipping in a structured delivery pipeline.
                    With Kubernetes automation, your apps are delivered in desired containerized states letting you scale from local to global in minutes with zero complexity.
                    " link={<ArrowLink text="Work with us"/> } />}

                  cardImg4 ={<Card  background="/static/subexplore/img1.svg" />} 
                 cardContent4={<Card title="Digital Experience Monitoring" subIcon='/static/svg/semi-circle.svg' content="Digital Experience Monitoring is an evolving approach to Application monitoring which brings the user’s experience and satisfaction to the forefront of digital performance benchmarking. 
                    Our DEM portfolio delivers Omni-Channel insights by analyzing your customers digital behavior while interacting with your applications in real-time, thus equipping your business with proactive application optimizations to instantaneously improve business outcomes.
                    " link={<ArrowLink text="Work with us"/> } />} />
                : null
                 }

                {this.state.analytics?
                     <CarouselExp cardImg1 ={<Card  background="/static/subexplore/img1.svg" />} 
                 cardContent1={<Card title="Broad Technology Stack" subIcon='/static/svg/semi-circle.svg' content="We support a wide array of development frameworks and technologies to suit your preferred flavor and functionality across mobile, front and back ends." link={<ArrowLink text="Work with us"/> } />} 
                
                 cardImg2 ={<Card  background="/static/subexplore/img1.svg" />} 
                 cardContent2={<Card title="Broad Technology Stack" subIcon='/static/svg/semi-circle.svg' content="We support a wide array of development frameworks and technologies to suit your preferred flavor and functionality across mobile, front and back ends." link={<ArrowLink text="Work with us"/> } />}

                  cardImg3 ={<Card  background="/static/subexplore/img1.svg" />} 
                 cardContent3={<Card title="Broad Technology Stack" subIcon='/static/svg/semi-circle.svg' content="We support a wide array of development frameworks and technologies to suit your preferred flavor and functionality across mobile, front and back ends." link={<ArrowLink text="Work with us"/> } />}

                  cardImg4 ={<Card  background="/static/subexplore/img1.svg" />} 
                 cardContent4={<Card title="Broad Technology Stack" subIcon='/static/svg/semi-circle.svg' content="We support a wide array of development frameworks and technologies to suit your preferred flavor and functionality across mobile, front and back ends." link={<ArrowLink text="Work with us"/> } />} />
                 : null
                 }

                {this.state.pm?
            
                    <CarouselExp cardImg1 ={<Card  background="/static/subexplore/img1.svg" />} 
                 cardContent1={<Card title="DevOps" subIcon='/static/svg/semi-circle.svg' content="DevOps bridges the gap between the complex traditional Software development lifecycle and IT Operations required to provision applications through its lifetime. With DevOps you can easily test app changes in a secure environment and ship out updates with no hassles in a seamless automated process." link={<ArrowLink text="Work with us"/> } />} 
                
                 cardImg2 ={<Card  background="/static/subexplore/img1.svg" />} 
                 cardContent2={<Card title="Collaborative Development" subIcon='/static/svg/semi-circle.svg' content="With our Git powered version control workflow, all development events are well coordinated and hosted within repositories, allowing for native collaboration between engineers with easy code tracking and review in line with engineering playbooks." link={<ArrowLink text="Work with us"/> } />}

                  cardImg3 ={<Card  background="/static/subexplore/img1.svg" />} 
                 cardContent3={<Card title="Broad Technology Stack" subIcon='/static/svg/semi-circle.svg' content="We support a wide array of development frameworks and technologies to suit your preferred flavor and functionality across mobile, front and back ends." link={<ArrowLink text="Work with us"/> } />}

                  cardImg4 ={<Card  background="/static/subexplore/img1.svg" />} 
                 cardContent4={<Card title="Broad Technology Stack" subIcon='/static/svg/semi-circle.svg' content="We support a wide array of development frameworks and technologies to suit your preferred flavor and functionality across mobile, front and back ends." link={<ArrowLink text="Work with us"/> } />} />
                : null
                 }
                </div>


                    <div style={{border:'1px solid #C0C0C0', margin: '60px 0px'}}></div>
                    
                    <div>
                     <ul className="offer-options">
                         <li onClick={this.onDisplayOffer} className={this.state.offer? "offer-options-style" : null}>Offers</li>
                         <li onClick={this.onDisplayRes} className={this.state.res? "offer-options-style" : null}>Resources</li>
                     </ul>

                     {this.state.offer?
                        
                 <div className="offer-grid">
                <Card title={"Game changing offers"} subIcon='/static/svg/semi-circle.svg' content={"Here are a few more reasons why you should choose use"}/>
                                  
                <CardOfferList events={events} />                
                </div>
     : null }

    {this.state.res?<div>Resources</div>:null}
       </div>

       </div>
            </React.Fragment>
        )
    }
}

export default BusinessContinuity;

 