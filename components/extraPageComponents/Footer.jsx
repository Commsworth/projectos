import Link from "next/link";

const Footer = ()=>{
 
    return(
         <div>
  
        <div className="foot">
        <div className="footer">
          <ul>
            <Link href="#"><a>CUSTOMER SERVICE</a></Link>
            <li><Link href="#"><a>FAQs</a></Link></li>
            <li><Link href="#"><a>Customer Service</a></Link></li>
          </ul>
  
          <ul>
            <Link href="#"><a>BUSINESS</a></Link>
            <li><Link href="#"><a>Careers</a></Link></li>
            <li><Link href="#"><a>Partner with Us</a></Link></li>
            <li><Link href="#"><a>Investor Relations</a></Link></li>
          </ul>
  
          <ul>
            <Link href="#"><a>COMPANY</a></Link>
            <li><Link href="#"><a>About Us</a></Link></li>
            <li><Link href="#"><a>Services</a></Link></li>
            <li><Link href="#"><a>Partners</a></Link></li>
            <li><Link href="#"><a>Customer Stories</a></Link></li>
            <li><Link href="#"><a>Contact Us</a></Link></li>
          </ul>
  
          <ul>
            <Link href="#"><a>PORTFOLIO</a></Link>
            <li><Link href="#"><a>SIWP</a></Link></li>
            <li><Link href="#"><a>ProjectOS</a></Link></li>
            <li><Link href="#"><a>MealStock</a></Link></li>
          </ul>
        </div>      
        </div>
        <style jsx>
            {`
            .footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
  background-color: #111517;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  width: 90vw;
  margin: auto;
}

.foot {
  background-color: #111517;
  width: 100%;
}

.footer-brand {
  display: block;
}

.footer ul a {
  font-family: "Muli";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 139%;
  /* or 22px */
  letter-spacing: 0.19em;
  color: #ffffff;
}

.footer li a {
  font-family: "Muli";
  font-style: normal;
  font-weight: normal !important;
  font-size: 16px;
  line-height: 139%;
  /* or 22px */
  letter-spacing: 0.02em;
  color: #bbbbbb;
}

.footer ul {
  width: 19%;
  padding: 2rem 0rem 2rem 0rem;
  line-height: 30px;
}

.pda {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  /* margin: auto;
    width: 60%; */
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  padding: 30px 0rem 30px 0rem;
}

.pda li a {
  color: white;
  margin: 50px;
}

.pda-border {
  border-top: 2px solid white;
}

@media only screen and (max-width: 570px) {
  .footer {
    /* margin: 0vh 5vw; */
    display: -ms-grid;
    display: grid;
    background-color: #111517;
    /* padding: 2rem; */
    /* width: 70%; */
    margin: 0;
  }
  .socials {
    /* width: 15rem; */
    display: -ms-grid;
    display: grid;
    /* justify-content: space-evenly; */
    /* align-items: center; */
  }
  .follow,
  .share {
    margin: 0vh 5vw;
  }
  .footer ul {
    width: 50%;
    padding: 2rem;
  }
  .footer ul a {
    font-size: 20px;
    font-weight: 700;
  }
  .footer li a {
    color: grey;
    line-height: 3rem;
  }
  .pda {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
  }
  .pda li a {
    color: white;
    margin: 5px;
  }
}
            `}
        </style>
        </div>
  
    );
  }
  
  export default Footer;