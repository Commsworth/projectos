import React, { useState } from 'react';


const PhotoGallery = ({top, bottom}) => {
    const [more, setMore] = useState(false);
    const handleClick=()=>{
        if(more){
            setMore(false);
        }else{
            setMore(true);
        }
    }
    return (
        <div className="main-box">
            <div className="box">

                {/* <img src="/img-div4/7up.svg" alt="" srcset="" />
                <div className="bor3"></div>
                <img src="/img-div4/mo.svg" alt="" srcset="" />
                <div className="bor3"></div>
                <img src="/img-div4/wa.svg" alt="" srcset="" />
                <div className="bor3"></div>
            <img src="/img-div4/ap.svg" alt="" srcset="" /> */}
            {top.map((each, i)=>{
                return(
                    <img src={each} alt="" srcSet="" className="img" key={i} />
                )
            }
            )}
            </div>
            <br />
            <div className="divide2"></div>
            <div className={`more-div ${more ? 'more' : 'off'}`}>
                <div className='box'>
                    {bottom.map((each, i)=>{
                        return(
                            <img src={`${each}`} alt="" srcSet="" className="img" key={i} />
                            )
                        })}
                </div>
            </div>
                        <button onClick={handleClick} className="button"> {more ?'-':'+'}</button>
            <br />
            
            <style jsx>
            {`
            .cli {
                display: flex;
                flex-direction: row;
                align-items: center;
                    text-align: center;
                    padding-bottom: 160px;
                    background: white;
                }
                .cli h5 {
                    color: #111517;
                    font-size: 24px;
                }
                .img {
                    padding: 0px 14px;
                    margin: 20px 0px 0px 0px;
                    width: 200px;
                    height: 70px;
                    border-right: 1px solid #878787;
                }
                .img:last-of-type{
                        border-right: 0px;
                    }
                .bor3 {
                    display: inline-block;
                    width: 0px;
                    height: 54px;
                }
                .main-box{
                    display: flex;
                    flex-direction: column;
                }
                .box{
                    display: flex;
                }
                @media screen and (min-width: 990px){
                .box{
                    display: flex;
                }
                .main-box .box:first-of-type{
                    padding: 50px 0px !important;
                    border-bottom: 1px solid #C9C9C9;
                }
                .more-div .box:first-of-type{
                    padding: 0px 0px 120px 0px !important;
                    border-bottom: none;
                }
                    .button {
                    display: none;
                }
            }
                @media only screen and (max-width: 570px) {
                    .img{
                        width: 160px !important;
                        height: 100px !important;
                        padding: 10px 0px !important;
                    }
                }
                @media only screen and (max-width: 990px) {
                    .main-box{
                        max-height: 4000px;
                        overflow-y: hidden;
                        overflow-x: hidden;
                        //scroll-snap-type: y mandatory;
                        margin: 2vh auto;
                    }
                    .box {
                        border-bottom: none;
                        padding-bottom: 0;
                        display: flex;
                        flex-direction: column;
                        width: 90vw;
                        margin: 2vh auto;
                        transition: display 3s ease-in-out;
                    }
                    .img {
                        border-bottom: 1px solid #878787 !important;
                        margin: 13.5px auto !important;
                        padding: 27px 0px;
                        border-right: none;
                        width: 160px;
                        height: 100px;
                    }
                    .img:last-of-type{
                        border-bottom: 0px;
                    }
                    .cli {
                        padding: 0px !important;
                    }
                    .cli br {
                        display: none;
                    }
                    .more-div {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .off {
                        display: none !important;
                    }
                    .main-box .button {
                        width: 68px;
                        height: 68px !important;
                        border-radius: 50%;
                        margin: 0px auto;
                        border: none;
                        background: #1c2124;
                        color: white;
                        font-size: 36px;
                        position: relative;
                        top: 5px;
                    }
                    .bor3 {
                        border: none;
                        width: 54px !important;
                        display: none;
                    }
                }

                `}
            </style>
        </div>
        );
};

export default PhotoGallery;