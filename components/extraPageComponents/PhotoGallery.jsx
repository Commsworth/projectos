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
        <div>
            <div>

                {/* <img src="/img-div4/7up.svg" alt="" srcset="" />
                <div className="bor3"></div>
                <img src="/img-div4/mo.svg" alt="" srcset="" />
                <div className="bor3"></div>
                <img src="/img-div4/wa.svg" alt="" srcset="" />
                <div className="bor3"></div>
            <img src="/img-div4/ap.svg" alt="" srcset="" /> */}
            {top.map(each=>{
                return(
                    <div>
                    <img src={each} alt="" srcset="" />
                    <div className="bor3"></div>
                    </div>
                )
            }
            )}
            </div>
            <br />
            <div className="divide2"></div>
            <div className="more-div">
                <button onClick={handleClick} className={`button ${more ? 'off' : 'more'}`}>+</button>
                <div className={`brand ${more ? 'more' : 'off'}`}>
                {bottom.map(each=>{
                    return(
                        <div>
                        <img src={`${each}`} alt="" srcset="" />
                        <div className="bor3"></div>
                        </div>
                    )
                })}
                </div>
                <button onClick={handleClick} className={`button ${more ? 'more' : 'off'}`}>-</button>
            </div>
            <br />
            
            <style jsx>
            {`
            .cli {
                display: flex;
                flex-direction: column;
                align-items: center;
                    text-align: center;
                    padding-bottom: 80px;
                    background: white;
                }
                .cli h5 {
                    color: #111517;
                    font-size: 24px;
                }
                img {
                    padding-bottom: 47px;
                    border-bottom: 0.5px solid #c9c9c9;
                    margin: 20px 100px 0px 100px;
                    width: 80px;
                    height: 50px;
                }
                .bor3 {
                    display: inline-block;
                    width: 0px;
                    height: 54px;
                    border-right: 1px solid #878787;
                }
                @media screen and (min-width: 990px){
                    .button {
                    display: none;
                }
            }
                @media only screen and (max-width: 990px) {
                    .brand {
                        border-bottom: none;
                        padding-bottom: 0;
                        display: flex;
                        flex-direction: column;
                    }
                    .brand img {
                        //border-bottom: 1px solid #878787 !important;
                        margin: 13.5px auto !important;
                        padding-bottom: 54px;
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
                    .more-div .off {
                        display: none !important;
                    }
                    .more-div .button {
                        width: 68px;
                        height: 68px;
                        border-radius: 50%;
                        margin: 0px auto;
                        border: none;
                        background: #1c2124;
                        color: white;
                        font-size: 36px;
                        position: relative;
                        top: 30px;
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