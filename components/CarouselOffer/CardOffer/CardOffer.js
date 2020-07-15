import React from 'react'
import './cardoffer.scss'
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
        </div>
       
    )
}

export default CardOffer;