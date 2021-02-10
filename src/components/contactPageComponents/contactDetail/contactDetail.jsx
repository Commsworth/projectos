import React from 'react';
import './contactDetail.scss';
import arrow from './images/arrow.svg';

const ContactDetail = ({ title, content, image, link }) => {
    return (
        <section className="contact-detail">
            <p className="title">{title}</p>
            {
                image && <img src={image} alt="" />
            }
            <p className="content">{content}</p>
            {
                link && <section className="link-section">
                    <a href className="link">{link}</a>
                    <img src={arrow} alt="" />
                </section>
            }
        </section>
    );
};

export default ContactDetail;