import React from 'react'
// import './cardoffer.scss'
import Link from 'next/link';

const CardOffer =({img,about,link, title, href}) => {
    return (
       
        <div className="card-offer">
          <div className='card-offer-img'>
                <img src={img} alt='events' />
              </div>
            <div className='card-offer-content'>
                <h3>{title}</h3>
                <p>{about}</p>
                <Link href={href}>
                <a> <p className='link'>{link}</p>
                </a>
                </Link>
            </div>
            <style jsx global>
                {`
                .card-offer {
                    -webkit-box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.05);
                            box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.05);
                    width: 300px;
                    margin: auto;
                  }
                  
                  .card-offer img {
                    width: 295px;
                    margin: auto;
                    height: 100%;
                  }
                  
                  .card-offer h3 {
                    margin: 8px 18px;
                    font-size: 20px;
                  }
                  
                  .card-offer p {
                    margin: 8px 18px;
                    font-size: 16px;
                    line-height: 1.5;
                  }
                  
                  .card-offer a {
                    margin-top: 20px;
                    margin-left: 184px;
                  }
                  
                  .button__bar {
                    display: inline-block;
                    vertical-align: middle;
                    margin: auto;
                    padding: 0;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 40px;
                    width: 100%;
                    text-align: center;
                  }
                  
                  .button__bar li {
                    list-style: none;
                    cursor: pointer;
                    display: inline-block;
                    margin: 0 3px;
                    padding: 0;
                  }
                  
                  .button__bar li button {
                    border: none;
                    color: transparent;
                    cursor: pointer;
                    display: block;
                    height: 15px;
                    width: 15px;
                    border-radius: 7.5px;
                  }
                  
                  .button__bar li.slick-active button {
                    background-color: #208FFF;
                  }
                  
                  .button__bar li button:hover,
                  .button__bar li button:focus {
                    background: #208FFF;
                    outline: 0;
                  }
                  
                  .slick-slide img {
                    border: 5px solid #fff;
                    display: block;
                    margin: auto;
                  }
                `}
            </style>
        </div>
       
    )
}

export default CardOffer;