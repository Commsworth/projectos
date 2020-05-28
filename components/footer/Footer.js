import './footer.scss';

const Footer = ()=>{
 
  return(
       <div>

      <div className="foot">
      <div className="footer">
        <ul>
          <a href="#">CUSTOMER SERVICE</a>
          <li><a href="about.html">FAQs</a></li>
          <li><a href="#">Customer Service</a></li>
        </ul>

        <ul>
          <a href="#">BUSINESS</a>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Partner with Us</a></li>
          <li><a href="#">Investor Relations</a></li>
        </ul>

        <ul>
          <a href="#">COMPANY</a>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Partners</a></li>
          <li><a href="#">Customer Stories</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>

        <ul>
          <a href="contact.html">PORTFOLIO</a>
          <li><a href="#">SIWP</a></li>
          <li><a href="#">ProjectOS</a></li>
          <li><a href="#">MealStock</a></li>
        </ul>
      </div>      
      </div>
      </div>

  );
}

export default Footer;