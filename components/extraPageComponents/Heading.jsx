import React from 'react';

const Heading = ({ text }) => {
    return (
        <div className="heading">
            <h3 className="heading-text">{text}</h3>
            <div className="img">
            <img src="/landingPageImages/pngs/icons/blueline.png" />
            </div>
            <style jsx>{`
                .heading{
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                }
                .heading-text{
                    width: 500px;
                    position: sticky;
                    z-index: 1;
                    font-family: Nunito;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 43px;
                    line-height: 114%;
                    /* or 52px */

                    text-align: center;

                    color: #F4F4F4;
                }
                .heading .img{
                width: 500px;
                position:relative; 
                bottom:67px;
                }
                .heading .img img{
                //right:0px;
                align-self: flex-start;
                z-index:0;
                width:210px;
                height: 10px;
                }

                @media screen and (max-width: 990px){
                    .heading-text, .heading .img{
                        width: 80vw;
                    }
                    .heading .img img{
                        display: none;
                    }
                }
                `}</style>
        </div>
    );
};

export default Heading;