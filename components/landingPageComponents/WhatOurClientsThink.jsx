import React, { Component } from 'react'

class WhatOurClientsThink extends Component {

    constructor(props) {
        super(props);

        this.state = {
            words: {
                mission: "I like Commsworth",
                name: "Pesky",
                position: "Frontend Web Developer",
                company: "Commsworth",
                class: "circle1",
            },
        }
    }
    hover = (object) => {
        this.setState({ words: object })
    }

    render() {

        return (
            <div>
                    <div className="div4">
                        <div className="center2">
                            <br />
                            <br />
                            <img id="div4-top-img" src="/img-div4/comma.png" alt="" srcset="" />
                            <h3 id="what-our-clients">What Our Clients Think <br /> About Us</h3>
                            <p id="mission" style={{ fontSize: "30px", lineHeight: "130%", marginBottom: "46px", marginTop: "31px" }}>"{this.state.words.mission}"</p>
                            <h3 id="name" style={{ fontSize: "24px", lineHeight: "178.5%", marginBottom: "0", marginTop: "46px" }}>{this.state.words.name}</h3>
                            <p id="position" style={{ fontSize: "16px", lineHeight: "178.5%" }}>-{this.state.words.position}, {this.state.words.company}</p>
                        </div>
                        <div className="img-flx">
                            <div className="pf1" onMouseEnter={() => this.hover({ mission: "I like Commsworth", name: "Pesky", position: "Frontend Web Developer", company: "Commsworth", class: "circle1" })}><img src="/landingPageImages/svgs/whatclients/Ellipse16.png" className={`${this.state.words.class}`} id="pf1" alt="" /></div>
                            <div className="pf2" onMouseEnter={() => this.hover({ mission: "I love Commsworth", name: "Pesky", position: "Frontend Web Developer", company: "Commsworth", class: "circle2" })}><img src="/landingPageImages/svgs/whatclients/Ellipse17.png" className={`${this.state.words.class}`} id="pf2" alt="" /></div>
                            <div className="pf3" onMouseEnter={() => this.hover({ mission: "I want Commsworth", name: "Pesky", position: "Frontend Web Developer", company: "Commsworth", class: "circle3" })}><img src="/landingPageImages/svgs/whatclients/Ellipse18.png" className={`${this.state.words.class}`} id="pf3" alt="" /></div>
                            <div className="pf4" onMouseEnter={() => this.hover({ mission: "I need Commsworth", name: "Pesky", position: "Frontend Web Developer", company: "Commsworth", class: "circle4" })}><img src="/landingPageImages/svgs/whatclients/Ellipse19.png" className={`${this.state.words.class}`} id="pf4" alt="" /></div>
                            <div className="pf5" onMouseEnter={() => this.hover({ mission: "I admire Commsworth", name: "Pesky", position: "Frontend Web Developer", company: "Commsworth", class: "circle5" })}><img src="/landingPageImages/svgs/whatclients/Ellipse19.png" className={`${this.state.words.class}`} id="pf5" alt="" /></div>
                        </div>
                    </div>
                    <style jsx>
                        {`
 .div4 {
	 display: flex;
	 flex-direction: column;
	 justify-content: center;
	 align-items: center;
	 padding-bottom: 20vh;
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
	 top: -10rem;
	 left: -5rem;
}
 .pf2 {
	 position: relative;
	 top: -10rem;
	 left: 30rem;
}
 .pf3 {
	 position: relative;
	 top: 1rem;
	 left: 15rem;
}
 .pf4 {
	 position: relative;
	 left: -20rem;
	 bottom: -2rem;
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
		 margin: 0vh 0vw;
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
		 margin: auto;
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
		 font-size: 20px;
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
