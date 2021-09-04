import React from 'react';
import Card from '../extraPageComponents/Card';
import ImageCard from './ImageCard';

const CardDiv = ({ title, subtitle, subIcon, content, link, image, reverse, background }) => {
    return (
        <div className="container" style={background?{background:background}:{background:'transparent'}}>
            <div className={` ${reverse?'reverse': ''} ${background?'black-text': ''} contact-card-main`} id="contact-heading">
                <Card title={title}
                    subTitle={subtitle}
                    subIcon={subIcon}
                    content={content}
                    link={link} />
                <ImageCard image={image} />
            </div>
            <style jsx>
                {`
                .container .contact-card-main {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-wrap: wrap;
                        flex-wrap: wrap;
                    -webkit-box-pack: center;
                        -ms-flex-pack: center;
                            justify-content: center;
                    margin: 0vw auto;
                    padding: 85px 0vw;
                }
                .reverse{
                    flex-direction: row-reverse !important;
                }
                .black-text :global(.card h3), .black-text :global(.card p){
                    color: #1B1B1B !important;
                }
                .container .contact-card-main :global(.card) {
                    width: 40%;
                    min-width: 400px;
                    -webkit-box-pack: center;
                        -ms-flex-pack: center;
                            justify-content: center;
                    //height: 465.41px;
                    margin: auto 25px;
                }
                .container .contact-card-main :global(.card h3) {
                    min-width: 450px;
                    width: 80%;
                    //height: 45px;
                    font-family: Nunito;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 48px;
                    line-height: 114%;
                    /* or 55px */
                    color: #f4f4f4;
                    margin: 0;
                    }

                    .container .contact-card-main :global(.card .content),
                    .container .contact-card-main :global(.card .content2),
                    .container .contact-card-main :global(.card .link) ,
                    .container .contact-card-main :global(.card .title),
                    .container .contact-card-main :global(.card .sub-title) {
                    -ms-flex-item-align: center;
                        -ms-grid-row-align: center;
                        align-self: center;
                    }

                    .container .contact-card-main :global(.card .content) {
                    //height: 130px;
                    font-family: Muli;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 190%;
                    min-width: 450px;
                    width: 80%;
                    /* or 38px */
                    /* Placeholder */
                    color: #f4f4f4;
                    }

                    .container .contact-card-main :global(.image-card) {
                    min-width: 450px;
                    width: 40% !important;
                    -webkit-box-shadow: 0px 0px 5px 0px;
                            box-shadow: 0px 0px 5px 0px;
                    margin: auto 25px;
                    }
                    .container .contact-card-main :global(.card .link) {
                    min-width: 450px;
                    width: 80%;
                    height: 33px;
                    font-family: Nunito;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 30px;
                    line-height: 109%;
                    }
                    @media only screen and (max-width: 990px) {
                    .container .contact-card-main :global(.image-card) {
                        display: none;
                    }
                    .container .contact-card-main :global(.card),.container .contact-card-main :global(.card h3),.container .contact-card-main :global(.card p),.container .contact-card-main :global(.card a   ) {
                        min-width: 90vw !important;
                        width: 90vw !important;
                    }
                    .container .contact-card-main :global(.card){
                        height: fit-content !important;
                    }
                    .container .contact-card-main{
                        padding: 50px;
                    }
                    }
            `}
            </style>
        </div>
    );
};

export default CardDiv;