import React from 'react';
import FooterOption from './footerOption/footerOption';
import FooterTitle from './footerTitle/footerTitle';
import './footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
            <section>
                <FooterTitle text="ProjectOS"/>
                <FooterOption text="© 2019" link=""/>
            </section>
            <section>
                <FooterTitle text="PROJECTOS"/>
                <FooterOption text="Add-ons" link=""/>
                <FooterOption text="Partner Integration" link=""/>
            </section>
            <section>
                <FooterTitle text="RESOURCES"/>
                <FooterOption text="Overview" link=""/>
                <FooterOption text="Blog" link=""/>
                <FooterOption text="Product Walkthrough" link=""/>
                <FooterOption text="FAQs" link=""/>
            </section>
            <section>
                <FooterTitle text="COMPANY"/>
                <FooterOption text="About Us" link=""/>
                <FooterOption text="Customer Stories" link=""/>
                <FooterOption text="Partners" link=""/>
                <FooterOption text="Contact Us" link=""/>
            </section>
            <section>
                <FooterTitle text="LEGAL"/>
                <FooterOption text="Privacy Policy" link=""/>
                <FooterOption text="Terms of Service" link=""/>
                <FooterOption text="Cookies Policy" link=""/>
            </section>
            </div>
            <div className="footer-bottom">
                <FooterTitle text="Contact ProjectOS"/>
                <FooterTitle text="Products"/>
                <FooterTitle text="Privacy"/>
                <FooterTitle text="Terms Of Service"/>
                <FooterTitle text="FAQ"/>
            </div>
        </div>
    );
};

export default Footer;