import React from 'react';
import { PRISMIC_heading, PRISMIC_image } from '../../prismic-configuration';
import PhotoGallery from '../extraPageComponents/PhotoGallery';


const TrustedBy = ({primary,images}) => {
    return (
        <div className="cli">
            <h5>{PRISMIC_heading(primary)}</h5>
            <div className="brand">
                <PhotoGallery 
                top={images.slice(0,Math.round(images.length/2)).map(item=>PRISMIC_image(item))} 
                bottom={images.slice(Math.round(images.length/2)).map(item=>PRISMIC_image(item))} />
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
                    max-width:550px
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