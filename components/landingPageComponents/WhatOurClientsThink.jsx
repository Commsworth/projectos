import React, { Component } from 'react'
import { PRISMIC_heading, PRISMIC_message, PRISMIC_name, PRISMIC_role, PRISMIC_text } from '../../prismic-configuration';

class WhatOurClientsThink extends Component {

	constructor(props) {
		super(props);

		this.state = {
			words: {
				mission: PRISMIC_message(props.items[0]),
				name: PRISMIC_name(props.items[0]),
				position: PRISMIC_name(props.items[0]),
				company: PRISMIC_role(props.items[0]).split(",")[1] && PRISMIC_role(props.items[0]).split(",")[1] || "",
				class: "circle1",
			},
		}
	}
	hover = (object) => {
		this.setState({ words: object })
	}

	render(props) {

		return (
			<div>
				<div className="div4">
					<div className="center2">
						<br />
						<br />
						<img id="div4-top-img" src="/landingPageImages/pngs/whatclients/yin-yang.png" alt="" srcset="" />
						<h3 id="what-our-clients">{PRISMIC_heading(this.props.primary)}</h3>
						<p id="mission" style={{ fontSize: "24px", lineHeight: "130%", marginBottom: "46px", marginTop: "64px", height: "120px" }}>"{this.state.words.mission}"</p>
						<h3 id="name" style={{ fontSize: "24px", lineHeight: "178.5%", marginBottom: "0", marginTop: "46px" }}>{this.state.words.name}</h3>
						<p id="position" style={{ fontSize: "16px", lineHeight: "178.5%", margin: "0px" }}>- {this.state.words.position}, {this.state.words.company}</p>
					</div>
					<div className="img-flx">
						{this.props.items.map((item, index) => {
							return <div className={`pf${index+1}`} onMouseEnter={() => this.hover({
								mission: PRISMIC_message(item),
								name: PRISMIC_name(item),
								position: PRISMIC_name(item),
								company: PRISMIC_role(item).split(",")[1] && PRISMIC_role(item).split(",")[1] || "",
								class: `circle${index+1}`,
							})}><img src="/landingPageImages/svgs/whatclients/Ellipse16.png"
								className={`${this.state.words.class}`}
								id={`pf${index}`}
								alt="" />
							</div>
						})}

					</div>
				</div>
				<style jsx>
					{`
 .div4 {
	 display: flex;
	 flex-direction: column;
	 justify-content: center;
	 align-items: center;
	 padding-bottom: 174px;
	 color: white;
}
 .div4 .pf1 .circle1 {
	 border: 5px solid #208fff;
	 border-radius: 50%;
}
 .div4 .pf2 .circle2 {
	 border: 5px solid #208fff;
	 border-radius: 50%;
}
 .div4 .pf3 .circle3 {
	 border: 5px solid #208fff;
	 border-radius: 50%;
}
 .div4 .pf4 .circle4 {
	 border: 5px solid #208fff;
	 border-radius: 50%;
}
 .div4 .pf5 .circle5 {
	 border: 5px solid #208fff;
	 border-radius: 50%;
}
 .div4 img {
	 width: 100px;
	 height: 100px;
	 border-radius: 50%;
	 border: 5px solid transparent;
}
 .div4 .center2 {
	 text-align: center;
	 margin: 0vh 35vw;
}
 .div4 .center2 h3 {
	 font-size: 24px;
	 font-weight: bold;
}
 .div4 .center2 h4 {
	 font-size: 30px;
	 line-height: 130%;
	 font-weight: bold;
}
 .div4 .center2 p {
	 font-size: 16px;
}
 .pf1 {
	 position: relative;
	 top: -8rem;
	 left: -5rem;
}
 .pf2 {
	 position: relative;
	 top: -8rem;
	 left: 25rem;
}
 .pf3 {
	 position: relative;
	 top: 1rem;
	 left: 12rem;
}
 .pf4 {
	 position: relative;
	 left: -18rem;
	 bottom: -1rem;
}
 .pf5 {
	 position: relative;
	 left: -13rem;
	 top: 5rem;
}
 .img-flx {
	 display: flex;
}
 @media only screen and (max-width: 990px) {
	 .div4 {
		 display: flex;
		 flex-direction: column;
		 justify-content: center;
		 height: 40rem;
		 margin: 100px 0vw 0vh;
	}
	 .pf1 {
		 position: relative;
		 top: 0rem;
		 left: 0rem;
	}
	 .pf2 {
		 position: relative;
		 top: 2.5rem;
		 left: 0rem;
	}
	 .pf3 {
		 position: relative;
		 top: 5rem;
		 left: 0rem;
	}
	 .pf4 {
		 position: relative;
		 left: 0rem;
		 bottom: -2.5rem;
	}
	 .pf5 {
		 position: relative;
		 left: 0rem;
		 top: 0rem;
	}
	 #mission {
		 width: 90vw;
		 font-family: Muli;
		 font-style: normal;
		 font-weight: 600;
		 font-size: 22px;
		 line-height: 212%;
		/* or 47px */
		 text-align: center;
	}
	 #what-our-clients {
		 font-family: Nunito;
		 font-style: normal;
		 font-weight: bold;
		 font-size: 24px;
		 line-height: 126.5%;
		/* or 25px */
		 text-align: center;
	}
	 #div4-top-img {
		 width: 66px !important;
		 height: 66px !important;
	}
	 .img-flx {
		 display: flex;
		 flex-direction: row;
		 justify-content: center;
		 margin-bottom: 70px;
	}
	 .img-flx img {
		 margin-right: 5px;
		 width: 45px;
		 height: 45px;
	}
}
 
                        `}

				</style>
			</div>
		)
	}
}

export default WhatOurClientsThink;
