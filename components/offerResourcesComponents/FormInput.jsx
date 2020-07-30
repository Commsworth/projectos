import React from 'react'

const FormInput = ({handleChange, validation, error, label, id, phoneExp, ...otherProps}) => (
    <div className='group'>
        {
            label ?
            (<label htmlFor={id}>
                {label} 
                {error ? <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="asterik">
                                        <path d="M6.016 5.776L6.64 4.704L4.768 3.76L6.64 2.816L6.016 1.744L4.272 2.88L4.384 0.799999H3.136L3.248 2.88L1.504 1.744L0.88 2.816L2.752 3.76L0.88 4.704L1.504 5.776L3.248 4.64L3.136 6.72H4.384L4.272 4.64L6.016 5.776Z" fill="#C63C53" />
                                    </svg> : ""}
            </label>) : null}

        <input id ={id} onBlur={validation} onKeyDown={phoneExp} {...otherProps}  onChange={handleChange}/>

        {error ? null : <svg className="form-svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9574 0.820312L5.54258 9.27773L1.75 5.48789L0 7.23789L5.83242 13.0703L14 2.57031L11.9574 0.820312Z" fill="#0f912c" 
                                        /> </svg>}
        
            
            <style jsx>{`
                input {
  width: 360px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  border: none;
  text-align: left;
  font-size: 12px;
  padding: 10px 26px;
  margin-top: 15px;
  margin-right: 10px;
  font-weight: 600;
}

select {
  border: 0px !important;
  width: 317px;
  margin-top: 18px;
  outline: none !important;
  font-size: 12px;
  font-family: "Muli";
  font-weight: 600;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
}

select ::-webkit-input-placeholder {
  font-family: "Muli";
}

select :-ms-input-placeholder {
  font-family: "Muli";
}

select ::-ms-input-placeholder {
  font-family: "Muli";
}

select ::placeholder {
  font-family: "Muli";
}

input:focus {
  outline: none !important;
}

input[type="submit"] {
  width: 20%;
  background-color: #0e82f8;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 50px;
  font-family: "Nunito";
}

input[type="submit"]:hover {
  background-color: #00B3BE;
}

label {
  display: block;
  margin-bottom: 10px;
  padding: 0px 2.5px 0px 2.5px;
  margin-top: 1.5rem;
  color: #818181;
  width: 135px;
  font-size: 13px;
  font-family: "Nunito";
}

.form-svg {
  margin-top: 14px;
}

.group {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  border-bottom: 1px solid #dddddd;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 500px !important;
}

.group:focus-within {
  border-bottom: 2px solid blue;
}

.asterik {
  margin-bottom: 5px;
}

@media only screen and (max-width: 1000px) {
  .group {
    width: 100% !important;
  }
  select {
    width: 60% !important;
  }
  input {
    width: 60% !important;
  }
  label {
    width: 31% !important;
  }
}
                `}</style>                     
    </div>
)
 
export default FormInput