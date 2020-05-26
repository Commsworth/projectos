import React, { Component } from 'react'
import CarouselDiv from '../landing/carouselDiv/carouselDiv.component'
import { blueSemiCircle, drawingArrow } from '../../static/assets/svgs';
import './explore.scss'

class Explore extends Component {
    render() {
        return (
            <div className="exp">
                <ul className="exp-head">
                    <li>Web | Mobile Apps</li>
                    <li>DevOps</li>
                    <li>Analytics</li>
                    <li>Artificial Intellicence</li>
                    <li>Project Management</li>
                </ul>
                <CarouselDiv blueSemiCircle={blueSemiCircle} drawingArrow={drawingArrow} />
            </div>
        )
    }
}

export default Explore