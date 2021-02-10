import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ContactDetail from '../../components/contactPageComponents/contactDetail/contactDetail';
import talk from './images/talk.svg';
import chat from './images/chat.svg'
import './contact.scss';
import InputField from '../../components/contactPageComponents/inputField/inputField';
import Button from '../../components/extraPageComponents/Button/button';
import { navbarColoursAction } from '../../redux/app/app.actions';

const Contact = ({ navbarColours, navbarColoursDispatch }) => {
    useEffect(()=>{
        if(navbarColours === "primary"){
            navbarColoursDispatch("secondary")
        }
    })
    return (
        <div className="contact-page">
            <section className="contact-page-left">
                <h1>Contact</h1>
                <ContactDetail title="Address" content="225, Ikorodu Crescent, Dolphin Estate, Ikoyi Lagos"/>
                <ContactDetail title="Phone" content="+234 8180321046"/>
                <ContactDetail title="Email" content="info@commsworth.com"/>
                <section className="contact-page-left-flex">
                <ContactDetail title="Got questions?" content="Chat with Sales" image={chat} link="Chat Now"/>
                <ContactDetail title=" " content="Talk to a ProjectOS guru" image={talk} link="Request Contact"/>
                </section>
                <small>
                *Available Monday-Friday. 9AM to 5PM GMT+1.
                </small>
            </section>
            <section className="contact-page-right">
                <InputField name="Name"/>
                <InputField name="Email"/>
                <InputField name="Mobile Number"/>
                <InputField name="Country/Region"/>
                <InputField name="Company Name"/>
                <InputField name="Company Size"/>
                <InputField name="Job Role"/>
                <InputField name="I want to..." options={['Get a demo']}/>
                <InputField name="Message (optional)"/>
                <Button fontSize="12px" height="57px" width="180px" text="Send Message"/>
            </section>
        </div>
    );
};

const mapStateToProps = state => ({
    navbarColours: state.app.navbarColours
})

const mapDispatchToProps = dispatch => ({
    navbarColoursDispatch: navbarColour=>(dispatch(navbarColoursAction(navbarColour)))
})

export default connect(mapStateToProps,mapDispatchToProps) (Contact);