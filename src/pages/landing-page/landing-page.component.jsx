import React, { Component } from 'react';
import Header from '../../components/header/header.component';
import './landing-page.styles.scss';
import Card from '../../components/card/card.component';
import { Microsoft, Fortinet, Docker, BeniRatio, ScheduleADemo, SlideButton } from '../../components/svgs/commsworth';
import { SearchBox } from '../../components/search-box/search-box.component'

const TechPart = [<Microsoft />, <Fortinet />, <Docker />, <BeniRatio />]
const Features = ["Budget Tracking", "Project Tracking", "Geo-tracking", "Contract Manager", "Performace Insights"]
const FeatureList = [
    {
        title: "Unified Project Tracking",
        icon: <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="4" fill="url(#paint0_linear)" />
            <path d="M20.396 17.4479L20.2866 17.4375V17.5475V22.7491H8.99031V6.25582H12.3355V7.03004V7.13004H12.4355H16.8414H16.9414V7.03004V6.25582H20.2866V8.37623V8.4862L20.396 8.47578C20.5618 8.45999 20.7302 8.45209 20.8988 8.45209C21.0258 8.45209 21.1463 8.45219 21.2634 8.46492L21.3742 8.47696V8.3655V5.27087V5.17087H21.2742H8H7.9V5.27087V23.7341V23.8341H8H21.2742H21.3742V23.7341V17.5582V17.4582H21.2742C21.2096 17.4582 21.1449 17.4624 21.0836 17.4663L21.0811 17.4665C21.0179 17.4705 20.958 17.4743 20.8988 17.4743C20.7312 17.4743 20.5629 17.4638 20.396 17.4479Z" fill="white" stroke="white" strokeWidth="0.2" />
            <mask id="path-3-inside-1" fill="white">
                <path d="M13.3097 9.66859V7.90942H10.6548V10.5455H13.3097V9.66859ZM12.4247 9.66859H11.5398V8.78901H12.4247V9.66859Z" />
            </mask>
            <path d="M13.3097 9.66859V7.90942H10.6548V10.5455H13.3097V9.66859ZM12.4247 9.66859H11.5398V8.78901H12.4247V9.66859Z" fill="white" />
            <path d="M13.3097 7.90942H14.3097V6.90942H13.3097V7.90942ZM10.6548 7.90942V6.90942H9.65485V7.90942H10.6548ZM10.6548 10.5455H9.65485V11.5455H10.6548V10.5455ZM13.3097 10.5455V11.5455H14.3097V10.5455H13.3097ZM12.4247 9.66859V10.6686H13.4247V9.66859H12.4247ZM11.5398 9.66859H10.5398V10.6686H11.5398V9.66859ZM11.5398 8.78901V7.78901H10.5398V8.78901H11.5398ZM12.4247 8.78901H13.4247V7.78901H12.4247V8.78901ZM14.3097 9.66859V7.90942H12.3097V9.66859H14.3097ZM13.3097 6.90942H10.6548V8.90942H13.3097V6.90942ZM9.65485 7.90942V10.5455H11.6548V7.90942H9.65485ZM10.6548 11.5455H13.3097V9.54549H10.6548V11.5455ZM14.3097 10.5455V9.66859H12.3097V10.5455H14.3097ZM12.4247 8.66859H11.5398V10.6686H12.4247V8.66859ZM12.5398 9.66859V8.78901H10.5398V9.66859H12.5398ZM11.5398 9.78901H12.4247V7.78901H11.5398V9.78901ZM11.4247 8.78901V9.66859H13.4247V8.78901H11.4247Z" fill="white" mask="url(#path-3-inside-1)" />
            <mask id="path-5-inside-2" fill="white">
                <path d="M13.3097 14.9404V13.1813H10.6548V15.8173H13.3097V14.9404ZM12.4247 14.9404H11.5398V14.0635H12.4247V14.9404Z" />
            </mask>
            <path d="M13.3097 14.9404V13.1813H10.6548V15.8173H13.3097V14.9404ZM12.4247 14.9404H11.5398V14.0635H12.4247V14.9404Z" fill="white" />
            <path d="M13.3097 13.1813H14.3097V12.1813H13.3097V13.1813ZM10.6548 13.1813V12.1813H9.65485V13.1813H10.6548ZM10.6548 15.8173H9.65485V16.8173H10.6548V15.8173ZM13.3097 15.8173V16.8173H14.3097V15.8173H13.3097ZM12.4247 14.9404V15.9404H13.4247V14.9404H12.4247ZM11.5398 14.9404H10.5398V15.9404H11.5398V14.9404ZM11.5398 14.0635V13.0635H10.5398V14.0635H11.5398ZM12.4247 14.0635H13.4247V13.0635H12.4247V14.0635ZM14.3097 14.9404V13.1813H12.3097V14.9404H14.3097ZM13.3097 12.1813H10.6548V14.1813H13.3097V12.1813ZM9.65485 13.1813V15.8173H11.6548V13.1813H9.65485ZM10.6548 16.8173H13.3097V14.8173H10.6548V16.8173ZM14.3097 15.8173V14.9404H12.3097V15.8173H14.3097ZM12.4247 13.9404H11.5398V15.9404H12.4247V13.9404ZM12.5398 14.9404V14.0635H10.5398V14.9404H12.5398ZM11.5398 15.0635H12.4247V13.0635H11.5398V15.0635ZM11.4247 14.0635V14.9404H13.4247V14.0635H11.4247Z" fill="white" mask="url(#path-5-inside-2)" />
            <mask id="path-7-inside-3" fill="white">
                <path d="M11.5398 18.4591H10.6548V21.0952H13.3097V18.4591H11.5398ZM12.4247 20.2156H11.5398V19.3494H12.4247V20.2156Z" />
            </mask>
            <path d="M11.5398 18.4591H10.6548V21.0952H13.3097V18.4591H11.5398ZM12.4247 20.2156H11.5398V19.3494H12.4247V20.2156Z" fill="white" />
            <path d="M10.6548 18.4591V17.4591H9.65485V18.4591H10.6548ZM10.6548 21.0952H9.65485V22.0952H10.6548V21.0952ZM13.3097 21.0952V22.0952H14.3097V21.0952H13.3097ZM13.3097 18.4591H14.3097V17.4591H13.3097V18.4591ZM12.4247 20.2156V21.2156H13.4247V20.2156H12.4247ZM11.5398 20.2156H10.5398V21.2156H11.5398V20.2156ZM11.5398 19.3494V18.3494H10.5398V19.3494H11.5398ZM12.4247 19.3494H13.4247V18.3494H12.4247V19.3494ZM11.5398 17.4591H10.6548V19.4591H11.5398V17.4591ZM9.65485 18.4591V21.0952H11.6548V18.4591H9.65485ZM10.6548 22.0952H13.3097V20.0952H10.6548V22.0952ZM14.3097 21.0952V18.4591H12.3097V21.0952H14.3097ZM13.3097 17.4591H11.5398V19.4591H13.3097V17.4591ZM12.4247 19.2156H11.5398V21.2156H12.4247V19.2156ZM12.5398 20.2156V19.3494H10.5398V20.2156H12.5398ZM11.5398 20.3494H12.4247V18.3494H11.5398V20.3494ZM11.4247 19.3494V20.2156H13.4247V19.3494H11.4247Z" fill="white" mask="url(#path-7-inside-3)" />
            <mask id="path-9-inside-4" fill="white">
                <path d="M15.0789 4.64412C15.1925 4.64406 15.3017 4.68827 15.3833 4.76737C15.4649 4.84646 15.5125 4.95423 15.516 5.06782H16.4009C16.3856 4.72644 16.2392 4.40413 15.9922 4.16798C15.7451 3.93184 15.4166 3.80005 15.0749 3.80005C14.7331 3.80005 14.4046 3.93184 14.1576 4.16798C13.9106 4.40413 13.7641 4.72644 13.7488 5.06782H14.6391C14.6419 4.95354 14.6896 4.84497 14.772 4.76565C14.8543 4.68634 14.9646 4.64267 15.0789 4.64412Z" />
            </mask>
            <path d="M15.0789 4.64412C15.1925 4.64406 15.3017 4.68827 15.3833 4.76737C15.4649 4.84646 15.5125 4.95423 15.516 5.06782H16.4009C16.3856 4.72644 16.2392 4.40413 15.9922 4.16798C15.7451 3.93184 15.4166 3.80005 15.0749 3.80005C14.7331 3.80005 14.4046 3.93184 14.1576 4.16798C13.9106 4.40413 13.7641 4.72644 13.7488 5.06782H14.6391C14.6419 4.95354 14.6896 4.84497 14.772 4.76565C14.8543 4.68634 14.9646 4.64267 15.0789 4.64412Z" fill="white" />
            <path d="M15.516 5.06782L14.5165 5.09849L14.5462 6.06782H15.516V5.06782ZM16.4009 5.06782V6.06782H17.4469L17.3999 5.02288L16.4009 5.06782ZM15.0749 3.80005V4.80005V3.80005ZM13.7488 5.06782L12.7498 5.02288L12.7028 6.06782H13.7488V5.06782ZM14.6391 5.06782V6.06782H15.6148L15.6388 5.09243L14.6391 5.06782ZM15.0793 5.64412C14.933 5.64419 14.7924 5.58726 14.6873 5.4854L16.0793 4.04933C15.811 3.78929 15.452 3.64394 15.0784 3.64412L15.0793 5.64412ZM14.6873 5.4854C14.5822 5.38355 14.5209 5.24477 14.5165 5.09849L16.5155 5.03714C16.5041 4.66369 16.3476 4.30938 16.0793 4.04933L14.6873 5.4854ZM15.516 6.06782H16.4009V4.06782H15.516V6.06782ZM17.3999 5.02288C17.373 4.42433 17.1163 3.85921 16.6832 3.44516L15.3011 4.8908C15.362 4.94905 15.3982 5.02855 15.4019 5.11275L17.3999 5.02288ZM16.6832 3.44516C16.2501 3.03112 15.674 2.80005 15.0749 2.80005V4.80005C15.1591 4.80005 15.2402 4.83256 15.3011 4.8908L16.6832 3.44516ZM15.0749 2.80005C14.4757 2.80005 13.8996 3.03112 13.4665 3.44516L14.8486 4.8908C14.9095 4.83256 14.9906 4.80005 15.0749 4.80005V2.80005ZM13.4665 3.44516C13.0334 3.85921 12.7767 4.42433 12.7498 5.02288L14.7478 5.11275C14.7516 5.02855 14.7877 4.94905 14.8486 4.8908L13.4665 3.44516ZM13.7488 6.06782H14.6391V4.06782H13.7488V6.06782ZM15.6388 5.09243C15.6351 5.24121 15.573 5.38256 15.4658 5.48581L14.0782 4.0455C13.8063 4.30738 13.6487 4.66586 13.6394 5.04321L15.6388 5.09243ZM15.4658 5.48581C15.3586 5.58907 15.215 5.64592 15.0662 5.64404L15.0915 3.6442C14.7141 3.63942 14.35 3.78361 14.0782 4.0455L15.4658 5.48581Z" fill="white" mask="url(#path-9-inside-4)" />
            <path d="M25.8576 17.3316L23.7512 15.2252C24.2583 14.55 24.5321 13.7283 24.5312 12.8839C24.5312 10.7271 22.7765 8.97235 20.6197 8.97235C18.4629 8.97235 16.7081 10.7271 16.7081 12.8839C16.7081 15.0407 18.4629 16.7954 20.6197 16.7954C21.464 16.7963 22.2858 16.5226 22.9609 16.0154L25.0674 18.1219M25.8576 17.3316L25.846 17.342C25.8461 17.3421 25.8462 17.3422 25.8463 17.3423M25.8576 17.3316L25.8466 17.3426L25.8463 17.3423M25.8576 17.3316C25.953 17.4382 26.0038 17.5773 25.9998 17.7203C25.9958 17.8632 25.9373 17.9992 25.8361 18.1004C25.735 18.2015 25.599 18.2601 25.456 18.2641C25.3131 18.2681 25.174 18.2172 25.0674 18.1219M25.8463 17.3423L23.7402 15.2362L23.7306 15.2266L23.7387 15.2158C24.2438 14.5434 24.5165 13.7249 24.5156 12.8839V12.8839C24.5156 10.7357 22.7678 8.98798 20.6197 8.98798C18.4715 8.98798 16.7238 10.7357 16.7238 12.8839C16.7238 15.0321 18.4715 16.7798 20.6197 16.7798H20.6197C21.4607 16.7807 22.2791 16.508 22.9516 16.0029L22.9624 15.9948L22.972 16.0044L25.0781 18.1105M25.8463 17.3423C25.9388 17.4459 25.9881 17.581 25.9842 17.7198C25.9803 17.8588 25.9234 17.991 25.8251 18.0893C25.7268 18.1876 25.5946 18.2446 25.4556 18.2484C25.3168 18.2523 25.1817 18.203 25.0781 18.1105M25.0781 18.1105C25.078 18.1104 25.0779 18.1103 25.0778 18.1102L25.0674 18.1219M25.0781 18.1105L25.0784 18.1108L25.0674 18.1219M17.8101 12.8839V12.8839C17.811 13.6288 18.1073 14.3429 18.634 14.8696C19.1607 15.3963 19.8748 15.6926 20.6196 15.6935H20.6197C21.1753 15.6935 21.7185 15.5287 22.1806 15.22C22.6426 14.9112 23.0027 14.4724 23.2154 13.9591C23.428 13.4457 23.4837 12.8808 23.3752 12.3358C23.2668 11.7908 22.9993 11.2901 22.6063 10.8972C22.2134 10.5043 21.7128 10.2367 21.1678 10.1283C20.6228 10.0199 20.0579 10.0755 19.5445 10.2882C19.0311 10.5008 18.5923 10.8609 18.2836 11.323C17.9749 11.785 17.8101 12.3282 17.8101 12.8839Z" fill="white" stroke="white" strokeWidth="0.03125" />
            <defs>
                <linearGradient id="paint0_linear" x1="1.5" y1="-1.22935e-07" x2="28.5" y2="30" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#B223FF" />
                    <stop offset="1" stopColor="#CD71FF" />
                </linearGradient>
            </defs>
        </svg>

        ,
        content: "The project management system unifies every aspect required to execute projects into one single glass pane.",
    },
    {
        title: "Seamless Navigation",
        icon: <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="4" fill="url(#paint0_linear)" />
            <path d="M7.00124 13.1528C6.98312 13.4767 7.16438 13.7786 7.45913 13.9142L13.373 16.627L16.0857 22.5405C16.2149 22.8211 16.4955 23 16.8021 23L16.847 22.9984C17.0052 22.9896 17.157 22.9332 17.2827 22.8368C17.4084 22.7403 17.5021 22.6082 17.5515 22.4578L21.961 9.03392C22.0532 8.75176 21.9791 8.44044 21.7695 8.23C21.5598 8.01956 21.2493 7.94784 20.9656 8.03848L7.54188 12.449C7.39134 12.4982 7.25917 12.5917 7.16269 12.7173C7.06621 12.8429 7.00994 12.9947 7.00124 13.1528Z" fill="white" />
            <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="27" y2="30" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#102BBB" />
                    <stop offset="1" stopColor="#5E74ED" />
                </linearGradient>
            </defs>
        </svg>


        ,
        content: "The intuitive navigation allows for easy sorting, filtering and search for projects.",
    },
    {
        title: "Detail View",
        icon: <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="4" fill="url(#paint0_linear)" />
            <path d="M11.6667 13.75V16.25C11.6667 16.6642 11.3309 17 10.9167 17H7.75C7.33578 17 7 16.6642 7 16.25V13.75C7 13.3358 7.33578 13 7.75 13H10.9167C11.3309 13 11.6667 13.3358 11.6667 13.75ZM7 18.75V21.25C7 21.6642 7.33578 22 7.75 22H10.9167C11.3309 22 11.6667 21.6642 11.6667 21.25V18.75C11.6667 18.3358 11.3309 18 10.9167 18H7.75C7.33578 18 7 18.3358 7 18.75ZM10.9167 8H7.75C7.33578 8 7 8.33578 7 8.75V11.25C7 11.6642 7.33578 12 7.75 12H10.9167C11.3309 12 11.6667 11.6642 11.6667 11.25V8.75C11.6667 8.33578 11.3309 8 10.9167 8ZM13.4167 22H22.25C22.6642 22 23 21.6642 23 21.25V18.75C23 18.3358 22.6642 18 22.25 18H13.4167C13.0024 18 12.6667 18.3358 12.6667 18.75V21.25C12.6667 21.6642 13.0024 22 13.4167 22ZM12.6667 8.75V11.25C12.6667 11.6642 13.0024 12 13.4167 12H22.25C22.6642 12 23 11.6642 23 11.25V8.75C23 8.33578 22.6642 8 22.25 8H13.4167C13.0024 8 12.6667 8.33578 12.6667 8.75ZM13.4167 17H22.25C22.6642 17 23 16.6642 23 16.25V13.75C23 13.3358 22.6642 13 22.25 13H13.4167C13.0024 13 12.6667 13.3358 12.6667 13.75V16.25C12.6667 16.6642 13.0024 17 13.4167 17Z" fill="white" />
            <defs>
                <linearGradient id="paint0_linear" x1="2.45869e-07" y1="1.5" x2="28" y2="29" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF7246" />
                    <stop offset="1" stopColor="#FFB198" />
                </linearGradient>
            </defs>
        </svg>

        ,
        content: "Collectively view all granular details about projects in real time from multiple data sources",
    },
]
let num = 0;

class LandingPage extends Component {
    constructor() {
        super();

        this.state = {
            activeButton1: false,
            activeButton2: false,
            activeButton3: false,
            activeButton4: false,
            activeButton5: false,
        }
    }

    setActive = (num) => {
        switch (num){
            case 1:
                this.setState({activeButton1:true,activeButton2:false,activeButton3:false,activeButton4:false,activeButton5:false})
                break;
            case 2:
                this.setState({activeButton1:false,activeButton2:true,activeButton3:false,activeButton4:false,activeButton5:false})
                break;
            case 3:
                this.setState({activeButton1:false,activeButton2:false,activeButton3:true,activeButton4:false,activeButton5:false})
                break;
            case 4:
                this.setState({activeButton1:false,activeButton2:false,activeButton3:false,activeButton4:true,activeButton5:false})
                break;
            case 5:
                this.setState({activeButton1:false,activeButton2:false,activeButton3:false,activeButton4:false,activeButton5:true})
                break;
        }
    }

    render() {
        return (
            <div className="main-div">
                <div className="midtop">
                    <br />
                    <br />
                    <br />
                    <h1>Let’s help you build</h1>
                    <p>Redefine your Project Management lifecycle with ProjectOS</p>
                    <p>Enterprise-Class Project Management Platform</p>
                    <button className="two-buttons">Request Demo</button>
                    <button className="two-buttons">Learn More</button>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                </div>

                <div>
                    <h6 className="title-color">Technical Partners</h6>
                    <div className="card-grid">
                        {
                            TechPart.map(tp => (
                                <Card key={Math.round((Math.random() * 1392929))} display={tp} />
                            ))
                        }
                    </div>
                    <h2><button className="slide-button"><SlideButton/></button ><button className="slide-button"><SlideButton/></button></h2>

                    <div>
                        <h6 className="title-color">Features</h6>
                        <h2>Solutions on Offer</h2>
                    </div>

                </div>
                <div className="feature-grid">
                    <button key={Math.round((Math.random() * 1392929))} className={this.state.activeButton1 ? "feature-buttons active" : "feature-buttons"} 
                    onClick={() => {
                            num = 0;
                            this.setActive(1)
                        }
                        }>
                        {Features[0]}
                    </button>
                    <button key={Math.round((Math.random() * 1392929))} className={this.state.activeButton2 ? "feature-buttons active" : "feature-buttons"} 
                    onClick={() => {
                            num = 0;
                            this.setActive(2)
                        }
                        }>
                        {Features[1]}
                    </button>
                    <button key={Math.round((Math.random() * 1392929))} className={this.state.activeButton3 ? "feature-buttons active" : "feature-buttons"} 
                    onClick={() => {
                            num = 0;
                            this.setActive(3)
                        }
                        }>
                        {Features[2]}
                    </button>
                    <button key={Math.round((Math.random() * 1392929))} className={this.state.activeButton4 ? "feature-buttons active" : "feature-buttons"} 
                    onClick={() => {
                            num = 0;
                            this.setActive(4)
                        }
                        }>
                        {Features[3]}
                    </button>
                    <button key={Math.round((Math.random() * 1392929))} className={this.state.activeButton5 ? "feature-buttons active" : "feature-buttons"} 
                    onClick={() => {
                            num = 0;
                            this.setActive(5)
                        }
                        }>
                        {Features[4]}
                    </button>
                </div>
                <div className="features">
                    <div>
                    <h2>We handle budget</h2>
                    <h2>tracking</h2>
                    <div className="feature-blue-line"></div>
                    {
                        FeatureList.map(featlist => (
                            <div key={Math.round((Math.random() * 1392929))} className="feature-flex">
                                <div>
                                    <h4>{featlist.icon}</h4>
                                </div>
                                <div className="featurelist">
                                    <h4>{featlist.title}</h4>
                                    <p>{featlist.content}</p>

                                </div>

                            </div>
                        ))
                    }
                    <ScheduleADemo className="schedule-a-demo" />
                </div>
                <div>
                    </div>                        
                    </div>
                <div className="search-center">
                    <h2>Ready to be amazed? Schedule a demo</h2>
                    <div className="search">
                        <SearchBox placeholder="Email Address" />

                        <small>Don't worry, we'll only send you messages concerning product launch</small>
                    </div>
                </div>
                <div>
                </div>
            </div>
        )
    }

}

export default LandingPage;