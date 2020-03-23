import React from 'react';
import './contact.styles.scss';
import { Twitter, Facebook, LinkedIn, ChatWithSales, TalkToAGuru, ChatNow, RequestContact, WorkingHours } from '../../components/svgs/commsworth'
import LabelContent from '../../components/contact-components/label-content/label-content.component';
import ContactForm from '../../components/contact-components/contact-form/contact-form.component';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <div className="contact-flex">
                    <div>
                        <h1>Contact</h1>
                        <LabelContent label="Address" content="225, Ikorodu Crescent, Dolphin Estate, Ikoyi Lagos" />
                        <LabelContent label="Phone" content="+2348180321046" />
                        <LabelContent label="Email" content="info@commsworth.com" />
                        <LabelContent label="We are social" content={
                            <div>
                                <button className="socials-area-button"><Twitter /></button>
                                <button className="socials-area-button"><Facebook /></button>
                                <button className="socials-area-button"><LinkedIn /></button>
                            </div>
                        } />
                        <LabelContent label="Got questions?" content={
                            <div>
                                <div className="got-questions-grid">
                                    <div className="got-questions-box">
                                        <ChatWithSales />
                                        <p>Chat with Sales</p>
                                        <ChatNow />
                                    </div>
                                    <div className="got-questions-box">
                                        <TalkToAGuru />
                                        <p>Talk to a ProjectOS guru</p>
                                        <RequestContact />
                                    </div>
                                </div>
                                <div className="working-hours">
                                    <WorkingHours />
                                <p> Kindly fill out this short form to get information about products, plans, pricing, demos support, and anything else about our platform and a ProjectOS representative will get in touch to guide you on your journey. </p>
                                </div>

                            </div>

                        } />

                    </div>
                    <div className="contact-button">
                        <ContactForm />
                        <button>Send Message</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;