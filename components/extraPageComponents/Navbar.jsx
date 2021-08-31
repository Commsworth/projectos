import React, { useState, useEffect } from 'react';
import BlueButton from './BlueButton';
import Link from 'next/link';

const Navbar = ({navigation}) => {
    // console.log(navigation.items[0].link_text[0].text)
    const current = "ProjectOS"
    const [scroll, setScroll] = useState(0);
    const [dropdown, setDropdown] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => setScroll(window.pageYOffset));
        // window.addEventListener('click', (e) =>{
        //     if(e.target.alt==="logo" && dropdown===false){
        //         setDropdown(true);
        //     }
        //     else if(e.target.alt!=='logo'){
        //         setDropdown(false);
        //     }
        //     else if(e.target.alt==='logo' && dropdown===true){
        //         setDropdown(false);
        //     }
        // })
        }, [scroll, dropdown])

    return (
        <div className={`navbar ${scroll > 70 ? 'scroll' : ''}`}>
            <div>
                <ul className="navbar-left">
                    <li>
                        <img src={navigation.primary.logo.url} alt="logo" className="desktop" onClick={()=>!dropdown?setDropdown(true):setDropdown(false)} />
                        <Link href="/">
                        <img src={navigation.primary.logo.url} alt="mobile-logo"  className="mobile-logo mobile-tablet" />
                        </Link>
                        <div id="myDropdown" className={`dropdown-content desktop ${dropdown?'': 'off'}`}>
                            <ul>
                                <li><Link href="/">{navigation.items[0].link_text[0].text}</Link></li>
                                <li><Link href="#about">{navigation.items[1].link_text[0].text}</Link></li>
                                <li ><Link href="#contact">{navigation.items[2].link_text[0].text}</Link></li>
                                <li ><Link href="commsworth/contact">{navigation.items[3].link_text[0].text}</Link></li>
                                <li ><Link href="#contact">{navigation.items[4].link_text[0].text}</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className="desktop"><Link href="/"><a>{current}</a></Link><img src="extrapageimages/svgs/navbar/navbarline.png" alt="" className="navbar-underline desktop" /></li>
                    <li onClick={()=>setDropdown(true)} className={`dropdown-button mobile-tablet ${dropdown?'off':''}`}>≡</li>
                    <li onClick={()=>setDropdown(false)} className={`dropdown-button mobile-tablet ${dropdown?'':'off'}`}>X</li>
                </ul>
            </div>
            <ul className={`navbar-right ${dropdown?'': 'navbar-off'}`}>
                <li><Link href="/services"><a>{navigation.items[5].link_text[0].text}</a></Link><img src="extrapageimages/svgs/navbar/navbarline.png" alt="" className="navbar-underline desktop" /></li>
                <li><Link href="/portfolio"><a>{navigation.items[6].link_text[0].text}</a></Link><img src="extrapageimages/svgs/navbar/navbarline.png" alt="" className="navbar-underline desktop" /></li>
                <li><Link href="#"><a>{navigation.items[7].link_text[0].text}</a></Link><img src="extrapageimages/svgs/navbar/navbarline.png" alt="" className="navbar-underline desktop" /></li>
                <li className="mobile-tablet"><Link href="/contact"><a>{navigation.items[8].link_text[0].text}</a></Link><img src="extrapageimages/svgs/navbar/navbarline.png" alt="" className="navbar-underline desktop" /></li>
                <li className="desktop"><BlueButton text="Contact" href="/contact" /></li>
            </ul>

            <style jsx>
                {`
            .navbar{
                display: flex;
                justify-content: space-between;
                width: 100vw;
                margin: 0px auto !important;
                padding: 0px 5vw !important;
                height: 70px;
                position: fixed;
                z-index: 9999;
            }
            .scroll{
                background: #1C2124;
            }
            .off{
                display: none !important;
            }
            .navbar-left, .navbar-right{
                display: flex;
                justify-content: space-around;
                color: white;
            }
            .navbar-left a, .navbar-right a{
                text-decoration: none;
                color: white;
                font-size: 15px;
                text-align: center;
            }
            .navbar-left li, .navbar-right li{
                //margin: 0px 20px;
                padding: 17px 20px;
                padding: 17px 20px;
                display: flex;
                flex-direction: column;
                width: 150px;
                text-align: center;
                align-items: center;
                }
            .navbar-left li:first-of-type ul{
                padding: 30px 0px;
            }
            .navbar-left li:nth-of-type(2) {
                max-height: 38px;
            }
            .navbar-left li:first-of-type ul li{
                height: 34px;
                padding: 0px;
                margin: auto;
            }
            .navbar-left li:hover, .navbar-right li:hover{
                padding: 17px 20px;
                border-bottom: none;
            }
            .navbar-left li .navbar-underline, .navbar-right li .navbar-underline{
                display: none;
            }
            .navbar-left li:hover .navbar-underline, 
            .navbar-right li:hover .navbar-underline, 
            .navbar-left li .navbar-underline:first-of-type{
                margin : 5px 0px;
                display: block;
                width: 70px;
                height: 2px;
            }
            .navbar-left li:first-of-type,.navbar-right li:last-of-type{
                padding: 0px 20px;
            }
            .navbar-right li:last-of-type .navbar-underline{
                display: none;
                }
            .navbar-right li:last-of-type :global(.heading-button){
                padding: 13px 33px;
                width: inherit; 
            }
            .navbar .navbar-right li .navbar-underline{
                //display: none;
                }
            .navbar-left .dropdown-content{
                background: #f4f4f4;
                width: 200px;
            }
        @media only screen and (max-width: 990px) {
            .navbar, .navbar .navbar-right{
                flex-direction: column;
                background: #1C2124;
                padding: 0px;
                margin: 0px 0px 16px;
            }
            .navbar{
                height: fit-content;
            }
            .navbar-off{
                display: none;
            }
            .navbar .navbar-left{
                justify-content: space-between;
                align-items: center;
            }
            .navbar .navbar-right li a{
                font-size: 20px;
            }
            .navbar .navbar-right li{
                align-items: flex-start;
                padding: 10px 30px;
            }
            .navbar-left li:hover, .navbar-right li:hover{
                padding: 0px;
            }
            .navbar-left .dropdown-button{
                font-size: 42px;
                padding: 0px;
                width: 30px;
                margin: 0px !important;
                height: 50px;
            }
            .navbar-left .dropdown-button:last-of-type{
                font-size: 40px;
            }
        }
            `}
            </style>
        </div>
    );
};

export default Navbar;