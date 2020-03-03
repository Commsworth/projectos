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
                                        <small><p>Chat with Sales</p></small>
                                        <ChatNow />
                                    </div>
                                    <div className="got-questions-box">
                                        <TalkToAGuru />
                                        <small><p>Talk to a ProjectOS guru</p></small>
                                        <RequestContact />
                                    </div>
                                </div>
                                <div>
                                    <WorkingHours />
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