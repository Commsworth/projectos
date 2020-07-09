import React from 'react'
import './cardoffer.scss'

const CardOffer =({img,about,link, title}) => {
    return (
       
        <div className="card-offer">
          <div className='card-offer-img'>
                <img src={img} alt='events' />
              </div>
            <div className='card-offer-content'>
                <h3>{title}</h3>
                <p>{about}</p>
                <a>{link}</a>
            </div>
        </div>
       
    )
}

export default CardOffer;