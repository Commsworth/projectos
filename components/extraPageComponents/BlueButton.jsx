import React from 'react';
import Link from 'next/link';

const BlueButton = ({ text, href }) => {
  return (
    <div className="blue-button">
      <Link href={href}>
        <a>
        <button className="heading-button">{text}</button>
        </a>
      </Link>
      <style jsx>
        {`
        .blue-button{
          display: flex;
          justify-content: center;
        }
        .heading-button{
          background: #0e82f8;
          text-transform: none !important;
          font-weight: bold;
          font-family: "Nunito";
          font-size: 14px;
          line-height: 126.5%;
          width: 175px;
          border-radius: 5px;
          font-family: "Nunito", "sans-serif" !important;
          font-weight: bold;
          padding: 13.98px 35.1px;
          text-align: center;
          color: #ffffff;
          border: none;
          cursor: pointer;
        }
        .heading-button:hover{
          background-color: #5cadff;
        }
        `}
      </style>
    </div>
  );
};

export default BlueButton;