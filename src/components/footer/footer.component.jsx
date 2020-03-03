import React from 'react';
import {Tick,CopyRight} from '../svgs/commsworth';
import './footer.styles.scss';

const foot = [
    ["PROJECT OS","About","Support","FAQs","Licensing"],
    ["FOLLOW US","Facebook","LinkedIn","Twitter"],
    ["LEGAL", "Privacy Policy","Terms of Service","Cookie Policy"],
    ["CONTACT","+2348180321046","support@projectos.com"]
]

const Footer = () =>(
    <div className="footer-grid">
        <div><ul>
            <li><Tick/></li>
            <li><CopyRight/></li>
            </ul></div>
        <div><ul>
<li><h4>{foot[0][0]}</h4></li>
<li><a href="">{foot[0][1]}</a></li>
<li><a href="">{foot[0][2]}</a></li>
<li><a href="">{foot[0][3]}</a></li>
<li><a href="">{foot[0][4]}</a></li>
            </ul></div>
        <div><ul>
            <li><h4>{foot[1][0]}</h4></li>
            <li><a href="">{foot[1][1]}</a></li>
            <li><a href="">{foot[1][2]}</a></li>
            <li><a href="">{foot[1][3]}</a></li>
            </ul></div>
        <div><ul>
            <li><h4>{foot[2][0]}</h4></li>
            <li><a href="">{foot[2][1]}</a></li>
            <li><a href="">{foot[2][2]}</a></li>
            <li><a href="">{foot[2][3]}</a></li>
            </ul></div>
        <div><ul>
            <li><h4>{foot[3][0]}</h4></li>
            <li><a href="">{foot[3][1]}</a></li>
            <li><a href="">{foot[3][2]}</a></li>
            </ul></div>
    </div>
)

export default Footer;