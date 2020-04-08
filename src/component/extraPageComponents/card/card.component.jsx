import React from 'react';
import './card.styles.scss';
import Arrow from '../arrow/arrow.component';
// import arrow from '../../../asset/svg/arrow.svg';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            link: false,
        }
    }
    render() {
        return (

            <div className="card" style={{ backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(" + this.props.background + ")", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <h3 className="title">
                    {this.props.title}
                </h3>
                <h3>
                    {this.props.subTitle}
                </h3>
                <p>
                    {this.props.content}
                </p>
                <a>
                    <p onMouseOver={() => this.setState({ link: true })} onMouseOut={() => this.setState({ link: false })}
                    >
                        {/* {!this.state.link && <p>{this.props.link}   <img src={arrow} /></p>}
                        {this.state.link && <p>{this.props.link} <img src={arrow} /></p>} */}
                        {!this.state.link && <p>{this.props.link}</p>}
                        {this.state.link && <p>{this.props.link}</p>}
                    </p>
                </a>
            </div>
        )
    }



}

export default Card;