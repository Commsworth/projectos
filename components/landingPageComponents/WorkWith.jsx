import Link from 'next/link';
import React from 'react';
import ArrowLink from '../extraPageComponents/ArrowLink';

const WorkWith = ({ href="", text }) => {
    return (
        <div className="work-with">
            <Link href={href}>
                <a>
                    <ArrowLink text={text} />
                </a>
            </Link>
            <style jsx>
                {`
                .work-with{
                    margin: 80px auto 112px;
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