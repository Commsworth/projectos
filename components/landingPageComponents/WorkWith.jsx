import React from 'react';
import ArrowLink from '../extraPageComponents/ArrowLink';

const WorkWith = () => {
    return (
        <div className="work-with">
        <ArrowLink text="Work with us" />
            <style jsx>
                {`
                .work-with{
                    margin: 40px auto;
                    display: flex;
                    justify-content: center;
                }
                .work-with :global(.arrow-div){
                color: #208FFF !important;
                font-weight: bold;
                font-size: 30px;
                line-height: 109%;
                text-align: center !important;
                //color: white;
                font-family: 'Nunito', sans-serif;
                cursor: pointer;
                }
                `}
            </style>
        </div>
    );
};

export default WorkWith;