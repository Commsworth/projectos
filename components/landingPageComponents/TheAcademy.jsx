import React from 'react';
import TitleDiv from '../extraPageComponents/TitleDiv';
import Card from '../extraPageComponents/Card';
import ArrowLink from '../extraPageComponents/ArrowLink';


const TheAcademy = () => {
    return (
        <div className="div3">
            <h3><TitleDiv top="The Academy" position="left" /></h3>
            <h3 style={{ fontWeight: "normal" }}>Learn from the best at</h3>
            <h3 style={{ fontWeight: "bold" }}>Commsworth Academy</h3>
            <div className="div3-grid">
                <Card title="Learn" subTitle="Web Design" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis sit." link={<ArrowLink text="Enroll" />} />
                <Card title="Learn" subTitle="FrontEnd Dev" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis sit." link={<ArrowLink text="Enroll" />} />
                <Card title="Learn" subTitle="BackEnd Dev" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis sit." link={<ArrowLink text="Enroll" />} />
                <Card title="Learn" subTitle="Python" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis sit." link={<ArrowLink text="Enroll" />} />
            </div>
            <div className="mobile-tablet">
              <p style={{fontSize: "15px", color: 'white', textAlign: 'center'}}>◀ Swipe to see more ▶</p>
            </div>


            <style jsx>
                {`
            .div3{
          background: linear-gradient(29.74deg, #111517 0.11%, rgba(17, 21, 23, 0.89) 20.95%, rgba(17, 21, 23, 0.78) 43.14%, rgba(17, 21, 23, 0) 78.53%), url('/landingPageImages/pngs/academy.png');
          background-size: cover;
          background-position: center;
          padding: 0px 70px;
        }
        :global(.title-div-main){
          padding: 60px 0px 0px !important;
          margin: 0px !important;
        }
        .div3 h3{
          margin: 0px auto !important;
          font-family: Nunito;
          font-style: normal;
          font-weight: normal;
          font-size: 54px;
          line-height: 126.5%;
          /* or 68px */

          /* White */
          color: #FFFFFF;
          width: 80vw;

        }
        .div3-grid{
          width: 80vw;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin: 58px auto 32px;
          padding: 0px 0px 90px;
        }
        .div3-grid :global(.card){
          width: 255px;
          height: 238px;
          margin: 0% 1%;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border-radius: 5px;
        }
        .div3-grid :global(.card h3){
          padding: 0px 20px;
          font-size: 24px;
          line-height: 126.5%;
          //width: 152px;
        }
        .div3-grid :global(.card .link){
          padding: 0px 20px;
          font-size: 16px;
          line-height: 109%;
          align-self: flex-end;
        }
        .div3-grid :global(.card .sub-title){
          font-weight: bold !important;
          padding: 0px 20px;
        }
        .div3-grid :global(.card .title){
          font-weight: normal !important;
          padding: 0px 20px;
        }
        .div3-grid :global(.card .content2){
        }
        .div3-grid :global(.card p){
          padding: 0px 20px;
          font-size: 12px;
          line-height: 145%;
          letter-spacing: 0.01em;
          //width: 216px;
                  }
        .div3-grid :global(.card:hover){
          background: #208FFF !important;
        }
        .div3-grid :global(.card:hover .link .arrow-div){
          color: #ffffff !important;
        }
        .div3-grid :global(.card:hover .link svg){
          fill: #ffffff !important;
        }
        @media only screen and (max-width: 990px) {
          .div3{
            padding: 0px;
          }
          .div3 h3{
            width: 90vw;
            margin: auto;
            font-family: Nunito;
            font-style: normal;
            font-weight: normal;
            font-size: 40px;
            line-height: 139%;
            /* or 42px */
          }
        .div3-grid{
          width: 90vw;
          display: flex;
          flex-wrap: nowrap;
          justify-content: flex-start;
          margin: 58px auto;
          display: flex !important;
          overflow-x: scroll;
          overflow-y: hidden;
          scroll-snap-type: x mandatory;
        }
        .div3-grid :global(.card){
          min-width: 255px;
          height: 238px;
          margin: 1% 1%;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border-radius: 5px;
          padding: 0px 0px;
        }
        }
        @media only screen and (max-width: 570px) {
            .div3{
            //max-width: 320px;
            //padding: 0vw !important;
            //padding-top: 50px !important;
            //margin: auto;
            }
            .div3 h3{
            //font-size: 18px;
            //line-height: 119%;
            //font-size: 26px !important;
            //line-height: 139% !important;
            //width: 90vw !important;
            //margin: 0vh 5vw !important;
            }
            .div3 :global(.card){
              //margin: 19px 0px !important;
            }
        }
            `}
            </style>
        </div>
    );
};

export default TheAcademy;