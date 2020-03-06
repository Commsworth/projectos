import React, { Fragment, useEffect, useState } from 'react';
import './ContactForm.css';
import M from 'materialize-css';
import axios from 'axios';

const ContactForm = ()=>{

    const [data, setData] = useState({
        name:"",
        email:"",
        mobileNumber:'string',
        country: "Nigeria",
        companyName: "",
        companySize:"20",
        jobRole:"Devops",
        reason:"",
        arr:"Cool",
        message:""
    });

    const handleNameInput = (v)=>{
        setData({...data,name:v.target.value});
    }

    const handleEmailInput = (v)=>{
        setData({...data,email:v.target.value});
    }
    const handleReasonInput = (v)=>{
        setData({...data,reason:v.target.value});
    }
    const handleMessageInput = (v)=>{
        setData({...data,message:v.target.value});
    }

    const handleSubmit = ()=>{
        console.log(data);
        axios.post("https://staging.commslog.com/alert/api/Alert/ContactUS/",{data},
        {
        headers:{
            'Authorization': 'Basic Y2xpZW50OnNlY3JldA==',
            'Content-Type': 'application/x-www-form-urlencoded',
             APIKEY:'ce28e0ec-164b-4d08-9cab-623b6ba46316'
        }
        })
        .then((res)=>{
           // console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(() => {
       M.AutoInit();
     
      });

    return(
    <Fragment>
        <div className="form-wrapper">
        <div className="row">
            <div className="col s12 input-field">
                <input type="text" id="name"  onChange={handleNameInput} />
                <label htmlFor="#name">Name</label>
            </div>
        </div>
        <div className="row">
        <div className="col s12 input-field">
                <input type="email" id="email" onChange={handleEmailInput}/>
                <label htmlFor="#email">Email</label>
            </div>
        </div>
        <div className="row">
        <div className="col s12 input-field">
               <select onChange={handleReasonInput}>
                   <option value="Option 1">Option 1</option>
               </select>
                <label htmlFor="#company">I want to...</label>
            </div>
        </div>

        <div className="row">
        <div className="col s12 input-field">
        <textarea id="textarea1" className="materialize-textarea" onChange={handleMessageInput}></textarea>
          <label htmlFor="textarea1">Message (optional)</label>
            </div>
        </div>

        <div className="row">
        <div className="col s12 input-field">
       <button className="btn send-btn" onClick={handleSubmit}>Send Message</button>
        </div>
        </div>
        </div>
    </Fragment>
    )
}

export default ContactForm;