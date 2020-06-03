import React from 'react';
import Link from 'next/link';

const ArrowLink = (props) => {
    return (
        <>
            {props.href ?
                <Link href={`${props.href}`}>
                    <div className="arrow-div">
                        {props.text}
                        <svg width="39" height="16" viewBox="0 0 39 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M38.7071 8.70711C39.0976 8.31658 39.0976 7.68342 38.7071 7.29289L32.3431 0.928932C31.9526 0.538408 31.3195 0.538408 30.9289 0.928932C30.5384 1.31946 30.5384 1.95262 30.9289 2.34315L36.5858 8L30.9289 13.6569C30.5384 14.0474 30.5384 14.6805 30.9289 15.0711C31.3195 15.4616 31.9526 15.4616 32.3431 15.0711L38.7071 8.70711ZM0 9H38V7H0V9Z" />
                        </svg>
                    </div>
                </Link>
                :
                <div className="arrow-div">
                    {props.text}
                    <svg width="39" height="16" viewBox="0 0 39 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38.7071 8.70711C39.0976 8.31658 39.0976 7.68342 38.7071 7.29289L32.3431 0.928932C31.9526 0.538408 31.3195 0.538408 30.9289 0.928932C30.5384 1.31946 30.5384 1.95262 30.9289 2.34315L36.5858 8L30.9289 13.6569C30.5384 14.0474 30.5384 14.6805 30.9289 15.0711C31.3195 15.4616 31.9526 15.4616 32.3431 15.0711L38.7071 8.70711ZM0 9H38V7H0V9Z" />
                    </svg>
                </div>
            }

            <style jsx>{`
                .arrow-div{
                    display: flex;
                    align-items: center;
                    width: fit-content;
                    padding-right: 10px;
                }
                svg{
                    margin-left: 10px;
                    width: 25px;
                    height: 20px;
                    transition:transform 0.5s ease;
                    transform-origin: left;
                    overflow: visible;
                    fill: #0E82F8;
                    }
                .arrow-div:hover svg{
                    transition:transform 0.5s ease;
                    //height: 20px;
                    transform-origin: left;
                    transform: scaleX(1.4);
                    }
            `}
            </style>
        </>
    );
};

export default ArrowLink;