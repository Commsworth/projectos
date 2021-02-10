import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Heading from '../../components/extraPageComponents/heading/heading'
import Question from '../../components/faqPageComponents/question/question';
import { navbarColoursAction } from '../../redux/app/app.actions';
import './faq.scss';

const FAQ = ({ navbarColours, navbarColoursDispatch }) => {
    useEffect(()=>{
        console.log(navbarColours)
        if(navbarColours === "primary"){
            navbarColoursDispatch("secondary")
        }
    })
    return (
        <div className="faq">
            <div className="faq-top">
                <Heading heading="Questions? Look here." subheading="Can’t find answers call us on (234) 818 0321 046 or info@commsworth.com" />
            </div>
            <div className="faq-bottom">
            <section className="left">
                <h5>Table of contents</h5>
                <p>General</p>
                <p>Licensing</p>
                <p>Services</p>
                <p>Company</p>
            </section>
            <section className="right">
                <Question text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac interdum lectus non in ultrices velit. Quisque lectus cursus velit accumsan, sed magna tincidunt odio. Lacus, sed velit elementum, ornare. Tortor tristique ut enim vitae." />
                <Question text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac interdum lectus non in ultrices velit. Quisque lectus cursus velit accumsan, sed magna tincidunt odio. Lacus, sed velit elementum, ornare. Tortor tristique ut enim vitae." />
                <Question text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac interdum lectus non in ultrices velit. Quisque lectus cursus velit accumsan, sed magna tincidunt odio. Lacus, sed velit elementum, ornare. Tortor tristique ut enim vitae." />
                <Question text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac interdum lectus non in ultrices velit. Quisque lectus cursus velit accumsan, sed magna tincidunt odio. Lacus, sed velit elementum, ornare. Tortor tristique ut enim vitae." />
            </section>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    navbarColours: state.app.navbarColours
})

const mapDispatchToProps = dispatch => ({
    navbarColoursDispatch: navbarColour=>(dispatch(navbarColoursAction(navbarColour)))
})

export default connect(mapStateToProps,mapDispatchToProps) (FAQ);