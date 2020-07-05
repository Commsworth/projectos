import React from 'react'
import Option from '../../option/Option.component'
import Card from '../../extra/card/card.component'
import { blueSemiCircle, drawingArrow } from '../../../static/assets/svgs';
import Scroll from '../../CarouselOffer/Scroll'
import CardOfferList from '../../CarouselOffer/CardOffer/CardOfferList'
import {events} from '../../CarouselOffer/events'

function DevopsOffer() {
    return (
             <div>
                 <div className="offer-grid">
                <Card title={"Game changing offers"} subTitle={blueSemiCircle} content={"Here are a few more reasons why you should choose use"}/>
                 
                <Scroll>                   
                <CardOfferList events={events} />
                  </Scroll>
                
                  </div>
                <div style={{display: "flex", justifyContent: "center", zIndex: 1000}}>

    </div>
    <Option />
    </div>
    )
}

export default DevopsOffer
