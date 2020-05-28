import './socials.styles.scss'

const Socials = ({icons}) => {
    return (
        icons==="white"?
        <div className="sc">
          <div className="socials">
        <div className="follow">
          <p>Follow us:</p>
          <img src="/whitetwitter.svg" alt="twitter"/>
          <img src="/whitefacebook.svg" alt="facebook"/>
          <img src="/whitelinkedin.svg" alt="linkedin"/>
        </div>
        <div className="share">
          <p>Share on:</p>
          <img src="/whitetwitter.svg" alt="twitter"/>
          <img src="/whitefacebook.svg" alt="facebook"/>
          <img src="/whitelinkedin.svg" alt="linkedin"/>
        </div>
      </div>
      </div>
        :
        <div className="sc">
          <div className="socials">
        <div className="follow">
          <p>Follow us:</p>
          <img src="/twitter.svg" alt="twitter"/>
          <img src="/facebook.svg" alt="facebook"/>
          <img src="/linkedin.svg" alt="linkedin"/>
        </div>
        <div className="share">
          <p>Share on:</p>
          <img src="/twitter.svg" alt="twitter"/>
          <img src="/facebook.svg" alt="facebook"/>
          <img src="/linkedin.svg" alt="linkedin"/>
        </div>
      </div>
      </div>
)
};

export default Socials;