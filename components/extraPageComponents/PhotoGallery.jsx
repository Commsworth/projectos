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
            <div className="more-div">
                <button onClick={handleClick} className={`button ${more ? 'off' : 'more'}`}>+</button>
                <div className={`box ${more ? 'more' : 'off'}`}>
                {bottom.map((each, i)=>{
                    return(
                        <img src={`${each}`} alt="" srcSet="" className="img" key={i} />
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
                flex-direction: row;
                align-items: center;
                    text-align: center;
                    padding-bottom: 80px;
                    background: white;
                }
                .cli h5 {
                    color: #111517;
                    font-size: 24px;
                }
                .img {
                    padding: 0px 5vw;
                    margin: 20px 0px 0px 0px;
                    width: 15vw;
                    height: 50px;
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
                    .button {
                    display: none;
                }
            }
                @media only screen and (max-width: 570px) {
                    .img{
                        width: 30vw !important;
                        height: 25vw !important;
                        padding: 5vw 0px !important;
                    }
                }
                @media only screen and (max-width: 990px) {
                    .box {
                        border-bottom: none;
                        padding-bottom: 0;
                        display: flex;
                        flex-direction: column;
                    }
                    .img {
                        border-bottom: 1px solid #878787 !important;
                        margin: 13.5px auto !important;
                        padding: 27px 0px;
                        border-right: none;
                        width: 15vw;
                        height: 15vw;
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