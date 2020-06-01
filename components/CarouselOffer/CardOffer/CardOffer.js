import React from 'react'
import './cardoffer.scss'

const CardOffer =({img,about,link}) => {
    return (
       
        <div className="card-offer">
            <img src={img} alt='events' />
            <div>
                <p>{about}</p>
                <a>{link}</a>
            </div>
        </div>
       
    )
}

export default CardOffer;