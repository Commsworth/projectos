import React from 'react';
import {Twitter,Facebook,LinkedIn} from '../svgs/commsworth'
import './socials.styles.scss'

const Socials = () =>(
    <div className = "socials-div">
        <div className='social-flex'>
           <p>Follow us on:</p> <button><Twitter/></button> <button><Facebook/></button> <button><LinkedIn/></button>
        </div>

        <div className='social-flex'>
           <p>Share on:</p> <button><Twitter/></button> <button><Facebook/></button> <button><LinkedIn/></button>

        </div>
    </div>
)

export default Socials;