import React, { Fragment, useEffect } from 'react';
import './ContactForm.css';
import M from 'materialize-css';

const ContactForm = ()=>{

    useEffect(() => {
       M.AutoInit();
     
      });

    return(
    <Fragment>
        <div className="form-wrapper">
        <div className="row">
            <div className="col s12 input-field">
                <input type="text" id="name" />
                <label htmlFor="#name">Name</label>
            </div>
        </div>
        <div className="row">
        <div className="col s12 input-field">
                <input type="text" id="company" />
                <label htmlFor="#company">Company</label>
            </div>
        </div>
        <div className="row">
        <div className="col s12 input-field">
               <select>
                   <option>Option 1</option>
               </select>
                <label htmlFor="#company">I want to...</label>
            </div>
        </div>

        <div className="row">
        <div className="col s12 input-field">
        <textarea id="textarea1" className="materialize-textarea"></textarea>
          <label htmlFor="textarea1">Message (optional)</label>
            </div>
        </div>

        <div className="row">
        <div className="col s12 input-field">
       <button className="btn send-btn">Send Message</button>
        </div>
        </div>
        </div>
    </Fragment>
    )
}

export default ContactForm;