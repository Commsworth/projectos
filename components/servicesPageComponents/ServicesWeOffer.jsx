import React, { useState } from 'react';
import { PRISMIC_heading, PRISMIC_icon, PRISMIC_link, PRISMIC_link_text, PRISMIC_text } from '../../prismic-configuration';
import ArrowLink from '../extraPageComponents/ArrowLink';
import Card from '../extraPageComponents/Card';


const ServicesWeOffer = ({cards}) => {
    const [display, setDisplay] = useState(true);
    return (
        <div>
            <div className="about-cards ">
                {
                    cards.map(item => {
                        return <Card
                            title={<img src={PRISMIC_icon(item)} alt="service icon" />}
                            subTitle={PRISMIC_heading(item)}
                            content={PRISMIC_text(item)}
                            link={<ArrowLink sublink={PRISMIC_link(item)} text={PRISMIC_link_text(item)} />}
                        />
                    })
                }
            </div>
            <div className='serv'>
                <svg className={display ? 'services-svg' : ''} onClick={() => setDisplay(true)} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="5.5" stroke="#208FFF" />
                </svg>

                <svg className={display ? ' ' : 'services-svg'} onClick={() => setDisplay(false)} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="5.5" stroke="#208FFF" />
                </svg>


            </div>
            <style jsx>
                {`
                        .about-cards{
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        width: 80vw;
                        margin: 0vh auto    ;
                      }
                      .about-cards :global(.card){
                          text-align: center;
                          align-items: center;
                          margin: 1.65%;
                          width: 355px;
                          height: 347px;
                          background: #1C2124 !important;
                          // border: 1px solid #208FFF;
                          box-sizing: border-box;
                          color: white;
                          padding: 30px;
                          
                        }
                        
                        .about-cards :global(.card .title){
                            position: relative;
                            bottom: 80px;
                            height: 100px;
                            
                        }
                        .about-cards :global(.card .sub-title){
                            width: 243px;
                            height: 62px;
                            left: 1008px;
                            top: 1141px;
    
                            font-family: Nunito;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 24px;
                            line-height: 130%;
                            /* identical to box height, or 29px */
    
    
                            /* White */
    
                            color: #FFFFFF;
    
                        }
                        .about-cards :global(.card .content){
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
                        .about-cards :global(.card .content2){
                            display:none;
                        }
                        .about-cards :global(.card .link){
                            align-self: flex-end;
                            height: 20px;
                            font-weight: bold;
                            font-size: 18px;
                            line-height: 109%;
                        }
                        .serv{
                            display:flex;
                            justify-content: center;
                            padding: 60px 0px;
                        }
                        .serv svg{
                        margin: 0px 5px 0px 5px;
                        cursor: pointer;
                            }
                        .services-svg{
                            fill: #208FFF; 
                            margin-left: 10px 10px;
                        }
                        @media only screen and (max-width: 570px) {
                        .about-cards :global(.card){
                            width: 300px;
                            margin: 5vw auto;
                        }
                        }
                        `}
            </style>
        </div>
    );
};

export default ServicesWeOffer;