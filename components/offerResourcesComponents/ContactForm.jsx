import React, { Component } from 'react'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import Modal from './Modal'


const initialState = {
    name: "",
    email: "",
    phone: "",
    companyName: "",
    companySize: "",
    jobRole: "",
    message: "",
    scope: "",
    companyNameError: true,
    companySizeError: true,
    jobRoleError: true,
    messageError: true,
    scopeError: true,
    phoneError: true,
    nameError: true,
    emailError: true,
}

class ContactForm extends Component {
    constructor(props) {
        super(props)

        this.state = initialState
    }

    showModal = () => {
        this.setState({
            ...this.state,
            show: !this.state.show
        });

    }


    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }


    phone = (e) => {
        const phone = document.getElementById('phone');

        if (e.key === "Backspace" || e.key === "Delete") return;
        if (e.target.value.length === 4) {
            phone.value = phone.value + "-";
        }
        if (e.target.value.length === 8)
            phone.value = phone.value + "-";

        if (e.target.value.length === 13) {
            phone.value = phone.value + "-";
        }
    }

    telephoneCheck = (str) => {
        let isphone = /^\+?1?\s*?\(?\d{4}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/.test(str);
        return isphone
    }

    validate = () => {
        let nameError;
        let emailError;
        let phoneError
        let companyNameError;
        let companySizeError;
        let jobRoleError;
        let messageError;
        let scopeError;

        if (!this.state.name) {
            nameError = true
        }
        if (!this.state.companyName) {
            companyNameError = true
        }
        if (!this.state.companySize) {
            companySizeError = true
        }
        if (!this.state.jobRole) {
            jobRoleError = true
        }
        if (!this.state.message) {
            messageError = true
        }
        if (!this.state.scope) {
            scopeError = true
        }
        if (!this.state.email.includes('com')) {
            emailError = true
        }

        if (!this.telephoneCheck(this.state.phone)) {
            phoneError = true
        }


        if (emailError || nameError || phoneError || companyNameError || companySizeError || jobRoleError || messageError || scopeError) {
            this.setState({ emailError, nameError, phoneError, companySizeError, companyNameError, jobRoleError, messageError, scopeError })
            return false
        }

        return true
    }

    validation = (event) => {
        const isValid = this.validate();
        if (isValid) {
            this.setState({ emailError: false, nameError: false, phoneError: false, companySizeError: false, companyNameError: false, jobRoleError: false, messageError: false, scopeError: false })
        }
    }



    handleSubmit = async (event) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.showModal()
            this.setState(initialState)
        }
    }

    render() {
       console.log(this.props.options[2].items[0].message)
        return this.props.dataID ? (
            <React.Fragment>
                <h1>{this.props.heading || 'Request a session'}</h1>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        id='name'
                        validation={this.validation}
                        valid={this.validate}
                        name="name"
                        error={this.state.nameError}
                        type="text"
                        value={this.state.name}
                        handleChange={this.handleChange}
                        label="Name"
                        required />
                    <FormInput
                        id='email'
                        validation={this.validation}
                        valid={this.validate}
                        name="email"
                        error={this.state.emailError}
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Email"
                        required />
                    <FormInput
                        id='phone'
                        phoneExp={this.phone}
                        validation={this.validation}
                        valid={this.validate}
                        name="phone"
                        error={this.state.phoneError}
                        type="text"
                        value={this.state.phone}
                        handleChange={this.handleChange}
                        label="Mobile Number"
                        required />
                    <FormInput
                        id='companyName'
                        validation={this.validation}
                        valid={this.validate}
                        name="companyName"
                        error={this.state.companyNameError}
                        type="text"
                        value={this.state.companyName}
                        handleChange={this.handleChange}
                        label="Company Name"
                        required />

                    <FormInput
                        id='jobRole'
                        validation={this.validation}
                        valid={this.validate}
                        name="jobRole"
                        error={this.state.jobRoleError}
                        type="text"
                        value={this.state.jobRole}
                        handleChange={this.handleChange}
                        label=" Job Role"
                        required />


                    <input type="submit" value="Shoot" />
                </form>

                <Modal onclose={this.showModal} show={this.state.show}>
                    <h1 style={{ fontSize: 24, color: "white", }}>Your message has been received</h1>
                    <p style={{ fontSize: 14, color: "white", textAlign: "center", marginBottom: 10, marginTop: 10 }}>Need more information? Reach out to our sales team.</p>
                </Modal>
                <style jsx>{`
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

                    `}</style>
            </React.Fragment>
        ) : (
                <React.Fragment>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            id='name'
                            validation={this.validation}
                            valid={this.validate}
                            name="name"
                            error={this.state.nameError}
                            type="text"
                            value={this.state.name}
                            handleChange={this.handleChange}
                            label="Name"
                            required />
                        <FormInput
                            id='email'
                            validation={this.validation}
                            valid={this.validate}
                            name="email"
                            error={this.state.emailError}
                            type="email"
                            value={this.state.email}
                            handleChange={this.handleChange}
                            label="Email"
                            required />
                        <FormInput
                            id='phone'
                            phoneExp={this.phone}
                            validation={this.validation}
                            valid={this.validate}
                            name="phone"
                            error={this.state.phoneError}
                            type="text"
                            value={this.state.phone}
                            handleChange={this.handleChange}
                            label="Mobile Number"
                            required />
                        <FormInput
                            id='companyName'
                            validation={this.validation}
                            valid={this.validate}
                            name="companyName"
                            error={this.state.companyNameError}
                            type="text"
                            value={this.state.companyName}
                            handleChange={this.handleChange}
                            label="Company Name"
                            required />

                        <FormSelect
                            option1={this.props.options[1].items[0].message}
                            option2={this.props.options[1].items[1].message}
                            option3={this.props.options[1].items[2].message}
                            option4={this.props.options[1].items[3].message}
                            validation={this.validation}
                            valid={this.validate}
                            name="companySize"
                            error={this.state.companySizeError}
                            id='companySize'
                            value={this.state.companySize}
                            handleChange={this.handleChange}
                            label="Company Size"
                            required />

                        <FormInput
                            id='jobRole'
                            validation={this.validation}
                            valid={this.validate}
                            name="jobRole"
                            error={this.state.jobRoleError}
                            type="text"
                            value={this.state.jobRole}
                            handleChange={this.handleChange}
                            label=" Job Role"
                            required />

                        <FormSelect
                            option1={this.props.options[2].items[0].message}
                            option2={this.props.options[2].items[1].message}
                            option3={this.props.options[2].items[2].message}
                            option4={this.props.options[2].items[3].message}
                            validation={this.validation}
                            valid={this.validate}
                            name="scope"
                            error={this.state.scopeError}
                            id='scope'
                            value={this.state.scopeSize}
                            handleChange={this.handleChange}
                            label="Request Demo"
                            required />

                        <FormInput
                            id='message'
                            validation={this.validation}
                            valid={this.validate}
                            name="message"
                            error={this.state.messageError}
                            type="text"
                            value={this.state.message}
                            handleChange={this.handleChange}
                            label="Message(optional)"
                        />

                        <input type="submit" value="Shoot" />
                    </form>

                    <Modal onclose={this.showModal} show={this.state.show}>
                        <h1 style={{ fontSize: 24, color: "white", }}>Your message has been received</h1>
                        <p style={{ fontSize: 14, color: "white", textAlign: "center", marginBottom: 10, marginTop: 10 }}>Need more information? Reach out to our sales team.</p>
                    </Modal>

                    <style jsx>{`
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

                    `}</style>
                </React.Fragment>
            )
    }
}

export default ContactForm