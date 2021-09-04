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
                    margin-bottom: 20px;
                }
                .heading-text{
                    position: sticky;
                    z-index: 1;
                    width: 536px;
                    height: 104px;
                    font-family: Nunito;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 46px;
                    line-height: 114%;
                    /* or 52px */

                    text-align: center;
                    color: #F4F4F4;
                    margin: 0px auto;
                }
                .heading .img{
                margin: 0px;
                width: 500px;
                position:relative; 
                bottom:24px;
                right:20px;
                }
                .heading .img img{
                align-self: flex-start;
                z-index:0;
                width:220px;
                height: 10px;
                }

                @media screen and (max-width: 990px){

                }
                @media screen and (max-width: 570px){
                    .heading-text{
                        width: 281px;
                        height: 123px;
                        font-size: 36px;
                        line-height: 114%;
                    } 
                    .heading .img{
                        left: 187px;
                        bottom: 60px;
                    } 
                    .heading .img img{
                        width: 170px !important;
                    }
                }
                `}</style>
        </div>
    );
};

export default Heading;