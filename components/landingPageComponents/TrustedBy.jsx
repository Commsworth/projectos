import React from 'react';
import PhotoGallery from '../extraPageComponents/PhotoGallery';


const TrustedBy = () => {
    return (
        <div className="cli">
            <h5>Trusted by top brands across various industries, <br /> just to name a few</h5>
            <div className="brand">
                <PhotoGallery top={["/landingPageImages/svgs/trustedby/7up.svg","/landingPageImages/svgs/trustedby/mo.svg","/landingPageImages/svgs/trustedby/wa.svg","/landingPageImages/svgs/trustedby/ap.svg"]} bottom={["/landingPageImages/svgs/trustedby/waec.svg","/landingPageImages/svgs/trustedby/ns.svg","/landingPageImages/svgs/trustedby/nm.svg","/landingPageImages/svgs/trustedby/home.svg"]} />
            </div>

            <style jsx>
                {`
                .cli {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    //padding-bottom: 80px;
                    background: white;
                }
                .cli h5 {
                    color: #111517;
                    font-size: 24px;
                }
                .brand {
                    //padding-bottom: 47px;
                }
                @media only screen and (max-width: 990px) {
                    .brand {
                        border-bottom: none;
                        padding-bottom: 0;
                        display: flex;
                        flex-direction: column;
                    }
                    .cli {
                        padding: 0px !important;
                    }
                    .cli br {
                        display: none;
                    }
                }

                `}
            </style>
        </div>

    );
};

export default TrustedBy;