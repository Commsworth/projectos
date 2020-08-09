import React from 'react';

const Map = () => {
    return (
        <div className="map">
        <img src="/landingPageImages/pngs/map.png" alt="" />
        <style jsx>
          {`
          .map{
            display: flex;
            justify-content: center;
            max-height: 391px;
            margin: auto;
            //width: 1441px;
            margin-top: 111px;
          }
          .map img{
            //width: 80%;
            height: 391px;
            width: 1441px;
            margin-left: 200px;
          }
        @media only screen and (max-width: 990px) {
          .map{
            overflow: hidden;
          }
          .map img{
            width: 1000px;
            height: 300px;
          }
        }
          `}
        </style>
      </div>
    );
};

export default Map;