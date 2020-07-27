import React from 'react';

const Heading = ({ text }) => {
    return (
        <div>
            <h3 className="heading-text">{text}</h3>
            <img src="/extraPageImages/blueline.png" />
            <style jsx>{`
                .heading-text{
                    font-family: Nunito;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 46px;
                    line-height: 114%;
                    /* or 52px */

                    text-align: center;

                    color: #F4F4F4;
                }
                `}</style>
        </div>
    );
};

export default Heading;