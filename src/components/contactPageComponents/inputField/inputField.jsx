import React, { useState } from 'react';
import { useEffect } from 'react';
import './inputField.scss'

const InputField = ({ name, type, body, validity, value,options }) => {

    const [field, setField] = useState("");
    const [value1, setValue1] = useState("");

    useEffect(() => {
        // //console.log('value',value)
            if (value) {
                setValue1(value)
            }else{
                setValue1('')
            }
    }, [value])

    let message;
    switch (name) {
        case "name":
            message = "value must be longer than one character"
            break;
            case "last name":
                message = "value must be longer than one character"
                break;
                case "email":
            message = "value must be a valid email"
            break;
        default:
                message = "value must be longer than one character"
            break;
    }

    return (
        <div className="input-main">
            <label htmlFor={`${name}`} className={`input-label`}>{`${name}`}</label>
                {!options && <input type={`${type}`} name={`${name}`} className={`input-field`} onChange={e => {
                    setField(e.target.value);
                    // if (body) {
                    //     body(e.target.value)
                    // } else if (formdata) {
                    //     formdata(Object.values(e.target.files)[0])
                    //     console.log(Object.values(e.target.files)[0])
                    // }
                }} defaultValue={value1} />}
                {options && <select name="Choose an option" className="input-select input-field">
                    {options.map(each=>{
                        return <option value={`${each}`}>{`${each}`}</option>
                    })}
                </select>}
            {/* <p className="red-text">{!validity ? message : null}</p> */}
        </div>

        //<section>
        //<img src={`${image}`} alt={`${name}`}/>
        //<input type={`${type}`} name={`${name}`}  className="input-field"/>
        //</section>


        // placeholder={`${placeholder}`}
    );
};

export default InputField;