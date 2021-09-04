const Socials = ( {social, icons} ) => {
  console.log(social[0].items)
    return (
        icons==="white"?
        <div className="sc" style={{background: "#111517"}}>
          <div className="socials">
        <div className="follow">
          <p>Follow us:</p>
          <img src={social[0].items[0].social_icon.url} alt="twitter"/>
          <img src={social[0].items[1].social_icon.url} alt="facebook"/>
          <img src={social[0].items[2].social_icon.url} alt="linkedin"/>
        </div>
        <div className="share">
          <p>Share on:</p>
          <img src={social[1].items[0].social_icon.url} alt="twitter"/>
          <img src={social[1].items[1].social_icon.url} alt="facebook"/>
          <img src={social[1].items[2].social_icon.url} alt="linkedin"/>
        </div>
      </div>
      <style jsx>{`
    .sc {
  border-top: 1px solid  #C1C1C1;
  border-bottom: 1px solid  #C1C1C1;
  background: white;
}

.sc .socials {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 90vw;
  margin: 2vw 5vw;
  margin-top: 8rem;
  padding: 5px;
  margin: auto;
}

.sc .socials .follow {
  width: 15rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.sc .socials .follow p {
  font-size: 16px;
  line-height: 119%;
  /* identical to box height, or 19px */
  /* Text color */
  color: white;
}

.sc .socials .follow img {
  cursor: pointer;
}

.sc .socials .share {
  width: 15rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.sc .socials .share p {
  font-size: 16px;
  line-height: 119%;
  /* identical to box height, or 19px */
  /* Text color */
  color: white;
}

.sc .socials .share img {
  cursor: pointer;
}

@media only screen and (max-width: 570px) {
  .sc .socials {
    /* width: 15rem; */
    display: -ms-grid;
    display: grid;
    /* justify-content: space-evenly; */
    /* align-items: center; */
  }
  .sc .socials .follow,
  .sc .socials .share {
    margin: 0vh 5vw;
  }
}
          `}</style>
      </div>
        :
        <div className="sc">
          <div className="socials">
        <div className="follow">
          <p>Follow us:</p>
          <img src="/extraPageImages/svgs/socials/twitter.svg" alt="twitter"/>
          <img src="/extraPageImages/svgs/socials/facebook.svg" alt="facebook"/>
          <img src="/extraPageImages/svgs/socials/linkedin.svg" alt="linkedin"/>
        </div>
        <div className="share">
          <p>Share on:</p>
          <img src="/extraPageImages/svgs/socials/twitter.svg" alt="twitter"/>
          <img src="/extraPageImages/svgs/socials/facebook.svg" alt="facebook"/>
          <img src="/extraPageImages/svgs/socials/linkedin.svg" alt="linkedin"/>
        </div>
      </div>
      <style jsx>{`
          .sc {
  border-top: 1px solid  #C1C1C1;
  border-bottom: 1px solid  #C1C1C1;
  background: white;
}

.sc .socials {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 90vw;
  margin: 2vw 5vw;
  margin-top: 8rem;
  padding: 5px;
  margin: auto;
}

.sc .socials .follow {
  width: 15rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.sc .socials .follow p {
  font-size: 16px;
  line-height: 119%;
  /* identical to box height, or 19px */
  /* Text color */
  color: #1B1B1B;
}

.sc .socials .follow img {
  cursor: pointer;
}

.sc .socials .share {
  width: 15rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.sc .socials .share p {
  font-size: 16px;
  line-height: 119%;
  /* identical to box height, or 19px */
  /* Text color */
  color: #1B1B1B;
}

.sc .socials .share img {
  cursor: pointer;
}

@media only screen and (max-width: 570px) {
  .sc .socials {
    /* width: 15rem; */
    display: -ms-grid;
    display: grid;
    /* justify-content: space-evenly; */
    /* align-items: center; */
  }
  .sc .socials .follow,
  .sc .socials .share {
    margin: 0vh 5vw;
  }
}
          `}</style>
      </div>
)
};

export default Socials;