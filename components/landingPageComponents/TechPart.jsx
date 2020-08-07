import React, { useState } from 'react';
import PhotoGallery from '../extraPageComponents/PhotoGallery';


const TechPart = () => {
    const [display, setDisplay] = useState("1")
    return (
        <div className="center">
            <div className="head-flx">
                <select name="techpart" id="techpart" className="mobile-tablet" onChange={(e) => setDisplay(e.target.value)}>
                    <option value="1">Technical Partners</option>
                    <option value="2">Business Partners</option>
                </select>
                <div className="link desktop" onClick={() => setDisplay(true )}><a className={display ? "active" : ""}>Technical Partners</a></div>
                <div className="link desktop" onClick={() => setDisplay(false)}><a className={display ? "" : "active"}>Business Partners</a></div>
            </div>
            {display==="1" && <div className="brand">
                <PhotoGallery top={["/landingpageimages/svgs/partners/dell.svg","/landingPageImages/svgs/partners/hp.svg","/landingPageImages/svgs/partners/dynatrace.svg","/landingPageImages/svgs/partners/lenovo.svg","/landingPageImages/svgs/partners/fortinet.svg"]} bottom={["/landingPageImages/svgs/partners/oracle.svg","/landingPageImages/svgs/partners/symantec.svg","/landingPageImages/svgs/partners/veeam.svg","/landingPageImages/svgs/partners/microsoft.svg","/landingPageImages/svgs/partners/vmware.svg"]} />
            </div>}
            {display!=="1" && <div className="brand">
                Rien à voir au moment
            </div>}

            <style jsx>
                {`
                .center {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                    -ms-flex-direction: row;
                        flex-direction: column;
                -webkit-box-pack: center;
                    -ms-flex-pack: center;
                        justify-content: center;
                -webkit-box-align: center;
                    -ms-flex-align: center;
                        align-items: center;
                background: white;
                margin: 30px auto;
                }

                .center .link {
                padding: 31px 17px;
                }

                .center .link a {
                color: #818181;
                cursor: pointer;
                padding-bottom: 5px;
                font-family: Nunito;
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                line-height: 126.5%;
                /* identical to box height, or 23px */
                /* Best grey */
                }

                .head-flx a:hover {
                color: #818181;
                border-bottom: 2px solid #818181;
                }

                .head-flx .active:hover {
                color: #0e82f8 !important;
                border-bottom: 2px solid #0e82f8 !important;
                }

                .head-flx {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                }
                .active {
                color: #0e82f8 !important;
                border-bottom: 2px solid #0e82f8;
                font-style: normal;
                font-weight: bold !important;
                font-size: 18px;
                line-height: 126.5%;
                /* identical to box height, or 23px */
                /* Project OS main */
                }
                @media only screen and (max-width: 990px) {
                    .center .link {
                    padding: 25px 10px !important;
                    }
                    .center .link a {
                    font-family: Nunito;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px !important;
                    line-height: 126.5%;
                    }
                    .center .head-flx {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    }
                    #techpart{
                        width: 50vw;
                        height: 40px;
                        color: black;
                        margin: 20px auto;
                    }
                }

                `}
            </style>
        </div>

    );
};

export default TechPart;